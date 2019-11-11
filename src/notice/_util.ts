const util = {
    createElement(tag: string, attrs?: Object) {
        const elem = document.createElement(tag);
        for (const key in attrs) {
            elem.setAttribute(key, attrs[key]);
        }
        return elem;
    },
};

export default util;
