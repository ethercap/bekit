import Vue from 'vue';
// 引入工具包
import * as common from '../../dist/index.js';
// 应用插件
Vue.use(common.plugin.vueNotice);
// 引入业务样式 这些是需要在项目中手写的
import './example.less';

new Vue({
    el: '#app',
    data: {
        name: 'bekit'
    },
    created: function() {
        window.common = common;
        console.log(common);
        this.notice();
        this.ls();
    },
    methods: {
        ls: function() {
            window.ls = new common.helper.Ls();
        },
        notice: function() {
            var _this = this;
            this.$confirm('some message', 'title', {
                confirmButtonText: '好的'
            }).then(function(data) {
                _this.$toast({
                    message: data.value,
                    type: 'success'
                });
            }).catch(function() {
                _this.$toast({
                    message: 'cancel',
                    type: 'warning',
                });
            });
        }
    }
});