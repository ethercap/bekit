// 定义配置格式
interface Config {
    prefix?: string,
    gcRate?: number
}

import * as _ from 'lodash';
import Cache from './Cache.ts';

export default class Ls extends Cache {
    public gcDoing: boolean = false;
    constructor(config: Config = {}) {
        super(_.assign({
            prefix: '#|',
            gcRate: .1,
        }, config));
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
        localStorage.setItem(key, JSON.stringify(value));
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
}
