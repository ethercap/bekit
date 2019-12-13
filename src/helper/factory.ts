// 设计模式的工厂函数
export default class Factory {
    // 单例模式
    public static getSingle(fn: Function): Function {
        let result: boolean;
        return (...args) => {
            if (result === undefined) return (result = fn(...args));
            return result;
        };
    }
    // 缓存代理模式   仅仅适用于简单类型的参数
    public static getCache(fn: Function): Function {
        const cache = {};
        return (...args) => {
            const key = args.join(',');
            if (key in cache) return cache[key];
            return cache[key] = fn(...args);
        };
    }
    // AOP
    public static before(fn: Function, beforeFn: Function): Function {
        return (...args) => {
            beforeFn(...args);
            return fn(...args);
        };
    }
    public static after(fn: Function, afterFn: Function): Function {
        return (...args) => {
            const result = fn(...args);
            afterFn(...args);
            return result;
        };
    }
}
