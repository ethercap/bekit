/**
 * 使用说明
 * Ua.isDealEase(): Boolean
 * Ua.isWx(): Boolean
 * Ua.isIOS(): Boolean
 * Ua.isAndroid(): Boolean
 * Ua.isMob(): Boolean
 * Ua.getEnv(): String
 */

import Factory from './Factory.ts';
const getSingle = Factory.getSingle;
const userAgent = navigator.userAgent.toLowerCase();

function _isDealEase(): boolean {
    return /DealEase/i.test(userAgent);
}

function _isWx(): boolean {
    return /MicroMessenger/i.test(userAgent);
}

function _isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(userAgent);
}

function _isAndroid(): boolean {
    return /Android/i.test(userAgent);
}

function _isMob(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

function _getEnv(): string {
    return _isWx() ? 'wx' : _isDealEase() ? 'yx' : '';
}

export default class Ua {
    public static isDealEase = getSingle(_isDealEase);
    public static isWx = getSingle(_isWx);
    public static isIOS = getSingle(_isIOS);
    public static isAndroid = getSingle(_isAndroid);
    public static isMob = getSingle(_isMob);
    public static getEnv = getSingle(_getEnv);
}
