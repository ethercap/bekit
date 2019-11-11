import * as _ from 'lodash';
import util from './_util.ts';
const { createElement } = util;

// 定义配置格式
interface Options {
    message: string,
    type?: string,
    iconClass?: string,
    duration?: number,
    timeWait?: number
}

function toast(options: [Options, string]) {
    const _options: Options = {
        message: '',
        type: 'info',
        iconClass: '',
        duration: 2500,
        timeWait: 200,
    };
    if (typeof options === 'string') {
        _.assign(_options, {
            message: options,
        });
    } else {
        _.assign(_options, options);
    }
    const toastDom = createElement('div', { class: 'b-toast' });
    const icon = createElement('i', { class: 'bicon' });
    const message = createElement('div');
    if (_options.iconClass) icon.className = _options.iconClass;
    toastDom.classList.add('b-toast-' + _options.type);
    message.innerHTML = _options.message;
    toastDom.appendChild(icon);
    toastDom.appendChild(message);
    document.body.appendChild(toastDom);
    setTimeout(() => {
        toastDom.classList.add('active');
    }, 50);
    setTimeout(() => {
        toastDom.classList.remove('active');
    }, _options.duration);
    setTimeout(() => {
        toastDom.parentNode.removeChild(toastDom);
    }, _options.duration + _options.timeWait);
}

export default toast;
