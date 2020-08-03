# plugin
Some Vue plugins, such as notice plugin.

## notice
#### Init
Vue.use(bekit.plugin.vueNotice[, options]);
- Arguments:
  - {Object} options
##### options
|Property|Detail|Default|Required|
|:-:|:-:|:-:|:-:|
|toast|a default option for toast|{}|no|
|alert|a default option for alert|{}|no|
|confirm|a default option for confirm|{}|no|
|prompt|a default option for prompt|{}|no|
|messageBox|a default option for messageBox|{}|no|

#### Usage
```javascript
import Vue from 'vue';
import * as bekit from 'bekit';
Vue.use(bekit.plugin.vueNotice, {
    toast: {
        iconClass: 'xxicon'
    }
});
```

#### Methods
##### this.$toast
- Detail: See [bekit.notice.toast](/guide/notice/#toast)

##### this.$messageBox
- Detail: See [bekit.notice.messageBox](/guide/notice/#messageBox)

##### this.$alert
- Detail: See [bekit.notice.alert](/guide/notice/#alert)

##### this.$confirm
- Detail: See [bekit.notice.confirm](/guide/notice/#confirm)

##### this.$prompt
- Detail: See [bekit.notice.prompt](/guide/notice/#prompt)

#### Usage
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
