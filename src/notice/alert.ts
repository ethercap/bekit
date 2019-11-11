import * as _ from 'lodash';
import messageBox from './messageBox.ts';

// 定义配置格式
interface Options {
    confirmButtonText?: string,
    comfirmButtonClass?: string,
}

function alert(message: string, title: string, options?: Options): Promise<any> {
    const _options: Object = {
        showCancelButton: false,
        confirmButtonText: '确定',
        comfirmButtonClass: '',
    };
    _.assign(_options, options, {
        title,
        message,
    });
    return messageBox(_options);
}

export default alert;
