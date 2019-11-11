// 定义配置格式
interface Config {
    prefix?: string,
    gcRate?: number
}

import * as _ from 'lodash';
import Cache from './Cache.ts';

export default class Ls extends Cache {
    public static defaultConfig: Config = {
        prefix: '#|',
        gcRate: .1,
    };
    public gcDoing: boolean = false;
    constructor(config: Config) {
        super(config);
    }

    public remove(keys: string | string[]): Promise<any> {
        if (typeof keys === 'string') keys = [keys];
        keys.forEach(key => {
            localStorage.removeItem(this._getFullKey(key));
        });
        return Promise.resolve();
    }

    public _setValue(key: string, value: any): Promise<any> {
        if (this._whetherDoGc()) this._gc();
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            if (this._isQuotaExceeded(e)) {
                const clearLs = confirm('您的本地存储空间已满，会影响您的正常使用，是否清理空间后重试？');
                if (clearLs) {
                    this._clear();
                    return this._setValue(key, value);
                } else {
                    return Promise.resolve();
                }
            }
            return Promise.reject(e);
        }
        return Promise.resolve();
    }

    public _getValue(key: string): Promise<any> {
        if (this._whetherDoGc()) this._gc();
        const dataStr = localStorage.getItem(key);
        if (!dataStr) return Promise.resolve(null);
        return Promise.resolve(JSON.parse(dataStr));
    }

    // 根据概率大小执行gc方法
    public _whetherDoGc() {
        if (Math.random() < this.config['gcRate'] && !this.gcDoing) return true;
        return false;
    }
    // 遍历localStorage，清除过期字段
    public _gc() {
        this.gcDoing = true;
        const length = localStorage.length;
        for (let i = 0; i < length; i++) {
            const fullKey = localStorage.key(i);
            if (fullKey && ~fullKey.indexOf(this.config['prefix'])) this.get(this._getOriginKey(fullKey));
        }
        this.gcDoing = false;
    }
    // 存储空间超过定额的判断
    public _isQuotaExceeded(e) {
        let quotaExceeded = false;
        if (e) {
            if (e.code) {
                switch (e.code) {
                    case 22:
                        quotaExceeded = true;
                        break;
                    case 1014:
                    // Firefox早期版本
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        quotaExceeded = true;
                    }
                    break;
                    default:
                    break;
                }
            }
        }
        return quotaExceeded;
    }
    // 清空
    public _clear() {
        localStorage.clear();
    }
}
