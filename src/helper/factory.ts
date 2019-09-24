// 设计模式的工厂函数
export default class Factory {
    // 单例模式
    public static getSingle(fn) {
        let result: boolean;
        return function () {
            if (result === undefined) return (result = fn.apply(this, arguments));
            return result;
        };
    }
}
