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
- 详细：见 [bekit.notice.toast](/zh/guide/notice/#toast)

##### this.$messageBox
- 详细：见 [bekit.notice.messageBox](/zh/guide/notice/#messageBox)

##### this.$alert
- 详细：见 [bekit.notice.alert](/zh/guide/notice/#alert)

##### this.$confirm
- 详细：见 [bekit.notice.confirm](/zh/guide/notice/#confirm)

##### this.$prompt
- 详细：见 [bekit.notice.prompt](/zh/guide/notice/#prompt)

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
