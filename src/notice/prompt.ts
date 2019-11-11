import * as _ from 'lodash';
import messageBox from './messageBox.ts';

// 定义配置格式
interface Options {
    cancelButtonText?: string,
    confirmButtonText?: string,
    cancelButtonClass?: string,
    comfirmButtonClass?: string,
}

function prompt(message: string, title: string, options?: Options): Promise<any> {
    const _options: Object = {
        showCancelButton: true,
        showInput: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        cancelButtonClass: '',
        comfirmButtonClass: '',
    };
    _.assign(_options, options, {
        title,
        message,
    });
    return messageBox(_options);
}

export default prompt;
