# fe-common
common kits for fe
# 安装

```javascript
npm i bekit --save-dev
```

# 使用
```javascript
import * as bekit from 'bekit';
```

## Url
```javascript
let url = new bekit.helper.Url('https://www.google.com/index?id=abc#hash');
```
**properties:**

|property|type|
|:---:|:---:|
|protocol|string|
|host|string|
|path|string|
|fullPath|string|
|params|object|
|hash|string|

**methods:**
- url.addParams(obj);
- url.removeParams(key|arr);
- url.replaceParams(obj);
- url.toString();
- url.getFullPath();
```javascript
// 示例
url.addParams({
    p: 'msg'
});
url.removeParams('id');
url.replaceParams({
    p: 'new-msg'
});
url.toString();
```

## Ls
```javascript
let ls = new bekit.helper.Ls([config]);
```
**config properties:**

|property|type|default|
|:---:|:---:|:---:|
|prefix|string|\#\||
|gcRate|number|.1|

**methods:**
- ls.set(key, value[, expire]);
- ls.get(key).then(cb);
- ls.remove(key|arr).then(cb);
- ls.getOrSet(key, value).then(cb);

```javascript
// 示例
ls.set('test', { msg: 'some msg' });
ls.get('test').then(data => { console.log(data) });
ls.remove('test').then(() => {});
ls.remove(['test']).then(() => {});
ls.getOrSet('test', { msg: 'other msg' }).then(data => { console.log(data) });
```

## Ua
```javascript
bekit.helper.Ua.isDealEase();  // boolean
bekit.helper.Ua.isWx();        // boolean
bekit.helper.Ua.isIOS();       // boolean
bekit.helper.Ua.isAndroid();   // boolean
bekit.helper.Ua.isIOS();       // boolean
bekit.helper.Ua.getEnv();      // string
```

## Time
```javascript
bekit.helper.Time.format(date, format);
```
**format:**

|format|value|
|:---:|:---:|
|yyyy|year|
|yy|year|
|MM|month|
|M|month|
|dd|date|
|d|date|
|DD|week|
|D|week|
|DC|week cn|
|hh|hour|
|h|hour|
|mm|munite|
|m|munite|
|ss|second|
|s|second|

```javascript
// 示例
let date = new Date();
bekit.helper.Time.format(date, 'yyyy-MM-dd 星期DC');
```

## Factory
**methods:**
- bekit.helper.Factory.getSingle(fn);

```javascript
// 示例
let fn1 = bekit.helper.Factory.getSingle(function() {
    let date = new Date();
    return date;
});
```

## notice
**包含toast、messageBox、alert、confirm、prompt，因为bekit是无UI的，所以需要针对项目写相应的样式，可参照examples/src/example.less中的写法**

### 1.toast
```javascript
bekit.notice.toast(string | options);
```
**options:**

|key|description|
|:---:|:---:|
|message|内容|
|type|支持info、warning、success、error4种，其实是支持无数种的，只需要使用者写对应的样式即可|
|iconClass|内容前面的icon的类名，该值会覆盖默认的类名'bicon'|
|duration|内容展示时间|
|timeWait|内容在展示结束后，清空dom的延迟时间|

### 2.alert
```javascript
bekit.notice.alert(message[, title, options]).then(function() {}).catch(function() {});
```

### 3.confirm
```javascript
bekit.notice.confirm(message[, title, options]).then(function() {}).catch(function() {});
```

### 4.prompt
```javascript
bekit.notice.prompt(message[, title, options]).then(function() {}).catch(function() {});
```

### 4.messageBox
```javascript
bekit.notice.messageBox(options).then(function() {}).catch(function() {});
```
**alert、confirm、prompt本质上仅仅是messageBox在上层的封装，返回一个promise**

**options:**

|key|description|
|:---:|:---:|
|message|内容|
|title|标题|
|showCancelButton|是否展示取消按钮，alert默认不展示，其他默认展示|
|cancelButtonText|取消按钮的内容，默认为'取消'|
|confirmButtonText|确定按钮的内容，默认为'确定'|
|cancelButtonClass|取消按钮的类名，会覆盖默认的类名'b-btn b-btn-cancel'|
|confirmButtonClass|取消按钮的类名，会覆盖默认的类名'b-btn b-btn-confirm'|
|showInput|是否展示输入框，prompt默认展示，其他默认不展示|
|inputPattern|输入框的校验正则，默认为null|
|inputErrorMessage|输入框的错误提示，默认为''|


## plugin
```javascript
import Vue from 'vue';
Vue.use(bekit.plugin.vueNotice);

this.$toast('message');
this.$alert('message', 'title').then(function() {}).catch(function() {});
this.$confirm('message', 'title').then(function() {}).catch(function() {});
this.$prompt('message', 'title').then(function() {}).catch(function() {});
this.$messageBox({
    message: 'message',
    title: 'title'
}).then(function() {}).catch(function() {});
```
对notice进行了封装，方便在vue下调用。


# 开发维护(针对开发人员)
```javascript
git clone git@git.ethercap.com:fe/bekit.git
cd fe-common
npm run init
npm run watch
npm run example
```
