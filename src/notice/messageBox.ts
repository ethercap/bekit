import * as _ from 'lodash';
import util from './_util.ts';
const { createElement } = util;

// 定义配置格式
interface Options {
    title?: string,
    message?: string,
    showCancelButton?: boolean,
    cancelButtonText?: string,
    confirmButtonText?: string,
    cancelButtonClass?: string,
    confirmButtonClass?: string,
    showInput?: boolean,
    inputPattern?: RegExp,
    inputErrorMessage?: string
}

function messageBox(options: Options ): Promise<any> {
    const _options: Options = {
        title: '',
        message: '',
        showCancelButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        cancelButtonClass: '',
        confirmButtonClass: '',
        showInput: false,
        inputPattern: null,
        inputErrorMessage: '格式不正确',
    };
    _.assign(_options, options);

    const confirmMask = createElement('div', { class: 'b-confirm-mask' });
    const confirm = createElement('div', { class: 'b-confirm' });
    confirmMask.appendChild(confirm);
    // header部分
    confirm.appendChild(createHeader(_options));

    // content部分
    const content = createElement('div', { class: 'b-confirm-content' });
    confirm.appendChild(content);
    if (_options.message) {
        const messageDom = createElement('div', { class: 'b-confirm-message' });
        messageDom.innerText = _options.message;
        content.appendChild(messageDom);
    }
    const input = createElement('input', { class: 'b-confirm-input' });
    const inputError = createElement('div', { class: 'b-confirm-input-error' });
    if (_options.showInput) {
        const inputContainer = createElement('div', { class: 'b-confirm-input-container' });
        inputContainer.appendChild(input);
        inputContainer.appendChild(inputError);
        input.addEventListener('input', e => {
            const currentTarget = e.currentTarget as HTMLInputElement;
            validate(_options, currentTarget, inputError);
        });
        content.appendChild(inputContainer);
    }

    // footer部分
    const footer = createElement('div', { class: 'b-confirm-footer' });
    confirm.appendChild(footer);
    const cancelButton = createElement('button', { class: 'b-btn b-btn-cancel' });
    if (_options.showCancelButton) {
        cancelButton.innerText = _options.cancelButtonText;
        if (_options.cancelButtonClass) cancelButton.className = _options.cancelButtonClass;
        footer.appendChild(cancelButton);
    }
    const confirmButton = createElement('button', { class: 'b-btn b-btn-confirm' });
    confirmButton.innerText = _options.confirmButtonText;
    if (_options.confirmButtonClass) confirmButton.className = _options.confirmButtonClass;
    footer.appendChild(confirmButton);

    const promise = new Promise((resolve, reject) => {
        confirmButton.addEventListener('click', () => {
            if (!_options.showInput) {
                confirmMask.parentNode.removeChild(confirmMask);
                resolve('confirm');
            } else {
                const _input = input as HTMLInputElement;
                if (validate(_options, _input, inputError)) {
                    confirmMask.parentNode.removeChild(confirmMask);
                    resolve({
                        value: _input.value,
                        action: 'confirm',
                    });
                }
            }
        });
        cancelButton.addEventListener('click', () => {
            confirmMask.parentNode.removeChild(confirmMask);
            reject('cancel');
        });
    });

    document.body.appendChild(confirmMask);
    return promise;
}

// header部分
function createHeader(options: Options) {
    const header = createElement('div', { class: 'b-confirm-header' });
    if (options.title) {
        const titleDom = createElement('div', { class: 'b-confirm-title' });
        titleDom.innerText = options.title;
        header.appendChild(titleDom);
    }
    return header;
}
// input验证
function validate(options: Options, input: HTMLInputElement, inputError: HTMLElement ): boolean {
    if (!options.inputPattern) return true;
    const result = options.inputPattern.test(input.value);
    if (result) {
        inputError.innerHTML = '';
    } else {
        inputError.innerHTML = options.inputErrorMessage;
    }
    return result;
}
export default messageBox;
