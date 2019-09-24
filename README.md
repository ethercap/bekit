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

# 开发维护(针对开发人员)
```javascript
git clone git@git.ethercap.com:fe/bekit.git
cd fe-common
npm run init
npm run watch
npm run example
```
