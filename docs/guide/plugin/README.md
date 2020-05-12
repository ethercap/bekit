# plugin
将一些模块封装为 vue 插件，如 notice 模块，方便项目中调用。

## notice
#### 使用
```javascript
import Vue from 'vue';
import * as bekit from 'bekit';
Vue.use(bekit.plugin.vueNotice);
```

#### 方法
##### this.$toast
- 详细：同 bekit.notice.toast

##### this.$messageBox
- 详细：同 bekit.notice.messageBox

##### this.$alert
- 详细：同 bekit.notice.alert

##### this.$confirm
- 详细：同 bekit.notice.confirm

##### this.$prompt
- 详细：同 bekit.notice.prompt

#### 示例
```javascript
this.$toast('message');
this.$alert('message', 'title').then(function() {
    // do something here
});
this.$confirm('message', 'title').then(function() {
    // confirm here
}).catch(function() {
    // cancel here
});
```
