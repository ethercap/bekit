# Ls
对 localStorage 的封装，支持自定义存储 key 的前缀，自动清除过期数据，支持同步和异步方法。

## 获取实例
```javascript
const { Ls } = bekit.helper;
const ls = new bekit.helper.Ls([config]);
```
#### config
|属性|类型|说明|默认值|是否必填|
|:---:|:---:|:---:|:---:|:---:|
|prefix|String|储存数据 key的前缀|'#\|'|否|
|gcRate|Number|在存储、读取数据的时候，同时清空所有过期数据的概率|.1|否|

## 实例方法
### ls.set(key, value[, expire])
- 参数：
  - {String} key
  - {any} value
  - {Number} [expire] 单位为秒
- 返回值：{Promise}
- 示例
```javascript
ls.set('test', { msg: 'some msg' }, 3600 * 24 * 7).then(callback);
```

### ls.setSync(key, value[, expire])
- 参数：同 ls.set
- 详细：ls.set 的同步版本
- 示例
```javascript
ls.setSync('test', { msg: 'some msg' }, 3600 * 24 * 7);
```

### ls.get(key)
- 参数：
  - {String} key
- 返回值：{Promise}
- 示例
```javascript
ls.get('test').then(data => {
    // do something with data
});
```

### ls.getSync(key)
- 参数：同 ls.get
- 返回值：直接返回存储的值，如果取不到，返回 null。
- 详细：ls.get 的同步版本
- 示例
```javascript
const test = ls.getSync('test');
```


### ls.getOrSet(key, value)
- 参数：
  - {String} key
  - {any} value
- 返回值：{Promise}
- 示例
```javascript
ls.getOrSet('test', { msg: 'other msg' }).then(data => {
    // do something with data
 });
```

### ls.getOrSetSync(key, value)
- 参数：同 ls.getOrSet
- 返回值：如果取到存储的值，则直接返回，如果没有取到，则先设置指定的 value，再返回该 value。
- 详细：ls.getOrSet 的同步版本
- 示例
```javascript
const test = ls.getOrSetSync('test', { msg: 'other msg' });
```

### ls.remove(key)
- 参数：
  - {String | Array} key
- 返回：{Promise}
- 示例
```javascript
ls.remove('test').then(callback);
ls.remove(['test']).then(callback);
```

### ls.removeSync(key)
- 参数：同 ls.remove
- 详细：ls.remove 的同步版本
- 示例
```javascript
ls.removeSync('test');
ls.removeSync(['test']);
```
