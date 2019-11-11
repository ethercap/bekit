import alert from '@/notice/alert.ts';
import confirm from '@/notice/confirm.ts';
import messageBox from '@/notice/messageBox.ts';
import prompt from '@/notice/prompt.ts';
import toast from '@/notice/toast.ts';

export const vueNotice = {
    install (Vue, options) {
        Vue.prototype.$toast = toast;
        Vue.prototype.$messageBox = messageBox;
        Vue.prototype.$alert = alert;
        Vue.prototype.$confirm = confirm;
        Vue.prototype.$prompt = prompt;
    },
};
