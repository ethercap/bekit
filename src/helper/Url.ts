import * as _ from 'lodash';
/**
 * url链接地址字符串的常规处理
 */
export default class Url {
    public static parseParams(str: string) {
        return str.split('&').reduce((result, current) => {
            const arr = current.split('=');
            result[arr[0]] = arr[1];
            return result;
        }, {});
    }
    public static stringifyParams(params) {
        if (!params) return '';
        const arr = Object.keys(params).map(key => {
            return key + '=' + params[key];
        });
        return arr.join('&');
    }
    public protocol: string;
    public host: string;
    public path: string;
    public fullPath: string;
    public params: Object;
    public hash: string;
    constructor(url: string) {
        const patterns: { [key: string]: RegExp } = {
            protocol: /\s(.+)\:\/\//,
            host: /\:\/\/(.+?)[\?\#\s\/]/,
            path: /[\w\s](\/.*?)[\?\#\s]/,
            params: /\?(.+?)[\#\/\s]/,
            hash: /\#(\w+)\s$/,
        };
        url = decodeURI(' ' + url + ' ');
        for (const key in patterns) {
            const pattern = patterns[key];
            this[key] = key === 'params' ? (pattern.exec(url) && Url.parseParams(pattern.exec(url)[1])) : (pattern.exec(url) && pattern.exec(url)[1]);
        }
        // // 如果没有给定protocol、host则取当前地址的protocol、host
        this.protocol = this.protocol || location.protocol.slice(0, -1);
        this.host = this.host || location.host;
        this.getFullPath();
    }
    public addParams(obj: Object) {
        this.params = _.assign({}, this.params, obj);
        this.getFullPath();
        return this;
    }
    public removeParams(keys: string | string[]) {
        if (!this.params) return this;
        if (typeof keys === 'string') keys = [keys];
        keys.forEach(key => {
            delete this.params[key];
        });
        this.getFullPath();
        return this;
    }
    public replaceParams(obj: Object) {
        return this.addParams(obj);
    }
    public toString() {
        const protocol = this.protocol + '://';
        const host = this.host;
        const path = this.path || '';
        let paramsStr = Url.stringifyParams(this.params);
        const hash = this.hash ? '#' + this.hash : '';
        paramsStr = paramsStr ? '?' + paramsStr : '';
        return protocol + host + path + paramsStr + hash;
    }
    public getFullPath() {
        const reg = new RegExp(this.protocol + '://' + this.host);
        return this.fullPath = this.toString().replace(reg, '');
    }
}
