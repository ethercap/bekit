import Vue from 'vue';
// 引入工具包
import * as bekit from '../../dist/index.js';
window.bekit = bekit;
console.log(bekit);
const { Factory, Time, Ua, Url, Dom } = bekit.helper;
// 应用插件
Vue.use(bekit.plugin.vueNotice, {
    toast: {
        iconClass: 'bicon'
    },
    alert: {
        confirmButtonText: '好'
    },
    confirm: {
        cancelButtonText: '不要了'
    }
});
// 引入业务样式 这些是需要在项目中手写的
import './example.less';

new Vue({
    el: '#app',
    data: {
        name: 'bekit'
    },
    created: function() {
        window.x = this;
        this.$nextTick(this.test);
        this.ls();
        // this.notice();
    },
    methods: {
        test: function() {

        },
        ls: function() {
            window.ls = new bekit.helper.Ls();
        },
        notice: function() {
            var _this = this;
            this.$confirm('some message', 'title', {
                confirmButtonText: '好的'
            }).then(function(data) {
                _this.$toast({
                    message: data,
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