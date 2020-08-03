import * as notice from '@/notice/index.ts';
import * as _ from 'lodash';

// 定义配置格式
interface Options {
    toast?: Object,
    messageBox?: Object,
    alert?: Object,
    confirm?: Object,
    prompt?: Object
}

export const vueNotice = {
    // 提供初始化功能，可在options中传入
    install (Vue, options: Options = {}) {
        Vue.prototype.$toast = (option: any) => {
            const initOption = options.toast || {};
            if (typeof option === 'string') {
                option = { message: option };
            }
            option = _.assign({}, initOption, option);
            return notice.toast(option);
        };
        Vue.prototype.$messageBox = (option: Object) => {
            const initOption = options.messageBox || {};
            option = _.assign({}, initOption, option);
            return notice.messageBox(option);
        };
        Vue.prototype.$alert = (message: string, title: string, option?: Object) => {
            const initOption = options.alert || {};
            option = _.assign({}, initOption, option);
            return notice.alert(message, title, option);
        };
        Vue.prototype.$confirm = (message: string, title: string, option?: Object) => {
            const initOption = options.confirm || {};
            option = _.assign({}, initOption, option);
            return notice.confirm(message, title, option);
        };
        Vue.prototype.$prompt = (message: string, title: string, option?: Object) => {
            const initOption = options.prompt || {};
            option = _.assign({}, initOption, option);
            return notice.prompt(message, title, option);
        };
    },
};
