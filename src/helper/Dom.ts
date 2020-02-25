interface ScrollValue {
    top: number,
    left: number
}

// 一些dom操作
export default class Dom {
    public static createElement(tag: string, attrs?: Object): HTMLElement {
        const elem = document.createElement(tag);
        for (const key in attrs) {
            elem.setAttribute(key, attrs[key]);
        }
        return elem;
    }
    public static getElement(selector: string | HTMLElement): HTMLElement {
        const dom = selector;
        return typeof dom === 'string' ? document.querySelector(dom) : dom;
    }
    // 获取根元素
    public static getDoc(): any {
        if (document.compatMode === 'BackCompat') {
            this.getDoc = () => document.body;
        } else {
            this.getDoc = () => document.documentElement;
        }
        return this.getDoc();
    }
    // 获取视口
    public static getViewPort(): any {
        const doc = this.getDoc();
        this.getViewPort = () => ({
            width: doc.clientWidth,
            height: doc.clientHeight,
        });
        return this.getViewPort();
    }
    // 获取文档视口
    public static getDocumentPort(): Object {
        const viewPort = this.getViewPort();
        const doc = this.getDoc();
        return {
            width: Math.max(doc.scrollWidth, viewPort.width),
            height: Math.max(doc.scrollHeight, viewPort.height),
        };
    }
    // 获取滚动条位置
    // NOTE: getDoc().scrollTop在移动端失效
    public static getScroll(): ScrollValue {
        const top = document.documentElement.scrollTop;
        const left = document.documentElement.scrollLeft;
        return {
            top: top === 0 ? document.body.scrollTop : top,
            left: left === 0 ? document.body.scrollLeft : left,
        };
    }
    // 是否达到吸顶条件
    public static isTopped(selector: string | HTMLElement): boolean {
        const dom = this.getElement(selector);
        const position = dom.getBoundingClientRect();
        if (position.top < 0) return true;
        return false;
    }
    // 是否出现在屏幕中
    public static isClient(selector: string | HTMLElement): boolean {
        const dom = this.getElement(selector);
        const position = dom.getBoundingClientRect();
        if (position.top < this.getViewPort().height && position.bottom > 0) return true;
        return false;
    }
    // 滚动到某一个元素的位置
    public static scrollTo(selector: string | HTMLElement, offset: number = -30) {
        const dom = this.getElement(selector);
        const position = dom.getBoundingClientRect();
        const scrollTop = this.getScroll().top;
        window.scrollTo(0, position.top + scrollTop + offset);
    }
    // 获取计算css样式
    public static css(selector: string | HTMLElement) {
        const dom = this.getElement(selector);
        return window.getComputedStyle(dom);
    }
    // 事件
    public static on(selector: string | HTMLElement, type: string, handler: any, options: any = false): Function {
        const dom = this.getElement(selector);
        dom.addEventListener(type, handler, options);
        return handler;
    }
    public static off(selector: string | HTMLElement, type: string, handler: any): Function {
        const dom = this.getElement(selector);
        dom.removeEventListener(type, handler, false);
        return handler;
    }
}
