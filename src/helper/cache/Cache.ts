// 定义存储的格式
interface Data {
    $v: any,
    $ex?: number
}
// 定义配置格式
interface Config {
    prefix?: string
}

import * as _ from 'lodash';

export default abstract class Cache {
    public static defaultConfig: Config = {
        prefix: 'cache|',
    };
    public config: Config;
    constructor(config: object = {}) {
        this.config = _.assign({}, new.target.defaultConfig, config);
    }
    /*
    * 对外暴露set
    * set 异步
    * setSync 同步
    */
    public set(key: string, value: any, expire?: number): Promise<any> {
        return this._set(key, value, expire, false);
    }
    public setSync(key: string, value: any, expire?: number): any {
        return this._set(key, value, expire, true);
    }

    /*
    * 对外暴露get
    * get 异步
    * getSync 同步
    */
    public get(key: string, defaultValue: any = null): Promise<any> {
        const fullKey = this._getFullKey(key);
        return this._getValue(fullKey).then(data => {
            if (!data) return defaultValue;
            return this._getData(key, data);
        });
     }
     public getSync(key: string, defaultValue: any = null): any {
         const fullKey = this._getFullKey(key);
         const data = this._getValue(fullKey, true);
         if (!data) return defaultValue;
         return this._getData(key, data);
     }

    /*
    * 对外暴露getOrSet
    * getOrSet 异步
    * getOrSetSync 同步
    */
    public getOrSet(key: string, value?: any): Promise<any> {
        value = typeof value === 'function' ? value() : value;
        return this.get(key, null).then(_value => {
            if (_value === null) {
                return this.set(key, value).then(() => {
                    return value;
                });
            }
            return _value;
        });
    }
    public getOrSetSync(key: string, value?: any): any {
        value = typeof value === 'function' ? value() : value;
        const _value = this.getSync(key, null);
        if (_value === null) {
            this.setSync(key, value);
            return value;
        }
        return _value;
    }

    /*
    * 对外暴露remove
    * remove 异步
    */
    public abstract remove(keys: string | string[]): Promise<any>;

    // 以下为私有方法
    public _set(key: string, value: any, expire?: number, sync: boolean = false): any {
        const fullKey = this._getFullKey(key);
        const data: Data = { $v: value };
        if (expire) {
            const timestamp = Math.floor(+new Date() / 1000);
            data.$ex = timestamp + expire;
        }
        return this._setValue(fullKey, data, sync);
    }
    public abstract _setValue(key: string, value: any, sync?: boolean): any;
    public abstract _getValue(key: string, sync?: boolean): any;
    // 返回data前需要处理过期问题
    public _getData(key: string, data: Data): any {
        const timestamp = Math.floor(+new Date() / 1000);
        if (timestamp > data.$ex) {
            this.remove(key);
            return null;
        }
        return data.$v;
    }
    public _getFullKey(key: string): string {
        return this.config['prefix'] + key;
    }
    public _getOriginKey(fullKey: string): string {
        const length = this.config['prefix'].length;
        return fullKey.substring(length);
    }
}
