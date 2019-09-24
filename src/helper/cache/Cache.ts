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
    public config: Config = {
        prefix: 'cache|',
    };
    constructor(config: object) {
        this.config = _.assign({}, this.config, config);
    }
    // 对外暴露set
    public set(key: string, value: any, expire?: number): Promise<any> {
        const fullKey = this._getFullKey(key);
        const data: Data = { $v: value };
        if (expire) {
            const timestamp = Math.floor(+new Date() / 1000);
            data.$ex = timestamp + expire;
        }
        return this._setValue(fullKey, data);
    }

    // 对外暴露get
    public get(key: string, defaultValue: any = null): Promise<any> {
        const fullKey = this._getFullKey(key);
        return this._getValue(fullKey).then(data => {
            if (!data) return defaultValue;
            return this._getData(key, data);
        });
     }

    // 对外暴露getOrSet
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

    // 对外暴露remove
    public abstract remove(keys: string | string[]): Promise<any>;

    // 以下为私有方法
    public abstract _setValue(key: string, value: any): Promise<any>;
    public abstract _getValue(key: string): Promise<any>;
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
