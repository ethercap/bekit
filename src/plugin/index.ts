import * as notice from '@/notice/index.ts';

export const vueNotice = {
    install (Vue, options = {}) {
        Vue.prototype.$toast = notice.toast;
        Vue.prototype.$messageBox = notice.messageBox;
        Vue.prototype.$alert = notice.alert;
        Vue.prototype.$confirm = notice.confirm;
        Vue.prototype.$prompt = notice.prompt;
    },
};
