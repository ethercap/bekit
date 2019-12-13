// 一些dom操作
export default class Dom {
    public static createElement(tag: string, attrs?: Object): HTMLElement {
        const elem = document.createElement(tag);
        for (const key in attrs) {
            elem.setAttribute(key, attrs[key]);
        }
        return elem;
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
    public static getScroll(): Object {
        const doc = this.getDoc();
        return {
            top: doc.scrollTop,
            left: doc.scrollLeft,
        };
    }
    // 是否达到吸顶条件
    public static isTopped(dom: HTMLElement): boolean {
        const position = dom.getBoundingClientRect();
        if (position.top < 0) return true;
        return false;
    }
    // 是否出现在屏幕中
    public static isClient(dom: HTMLElement): boolean {
        const position = dom.getBoundingClientRect();
        if (position.top < this.getViewPort().height && position.bottom > 0) return true;
        return false;
    }
}
