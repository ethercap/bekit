/**
 * 使用说明
 * ua.isDealEase(): Boolean
 * ua.isWx(): Boolean
 * ua.isIOS(): Boolean
 * ua.isAndroid(): Boolean
 * ua.isMob(): Boolean
 * ua.getEnv(): String
 */

const userAgent = navigator.userAgent;
// 单例工厂函数
function getSingle(fn: Function) {
    let result: boolean;
    return function () {
        if (result === undefined) return (result = fn.apply(this, arguments));
        return result;
    };
}

function _isDealEase() {
    return /DealEase/i.test(userAgent);
}

function _isWx() {
    return /MicroMessenger/i.test(userAgent);
}

function _isIOS() {
    return /iPhone|iPad|iPod/i.test(userAgent);
}

function _isAndroid() {
    return /Android/i.test(userAgent);
}

function _isMob() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

function _getEnv() {
    return _isWx() ? 'wx' : _isDealEase() ? 'yx' : '';
}

function test(num: string) {
    return num;
}

export default {
    isDealEase: getSingle(_isDealEase),
    isWx: getSingle(_isWx),
    isIOS: getSingle(_isIOS),
    isAndroid: getSingle(_isAndroid),
    isMob: getSingle(_isMob),
    getEnv: getSingle(_getEnv),
};
