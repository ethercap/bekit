# Url
对 url 的常见操作，在字符串和对象之间相互转换，支持对参数的增删和修改。

## 获取实例
```javascript
const { Url } = bekit.helper;
let url = new Url('https://www.google.com/index?id=abc#hash');
```

## 实例属性
### url.protocol
- 类型：String
- 详细：字符串，返回服务协议，如果原始字符串中没有 protocol，则返回 window.location.protocol。如原始字符串为 'www.google.com'。

### url.host
- 类型：String
- 详细：字符串，返回主机名

### url.path
- 类型：String
- 详细：字符串，对应当前路由的路径，总是解析为绝对路径，如 '/foo/bar'，如果没有路径，则为 null。

### url.fullPath
- 类型：String
- 详细：字符串，返回包含查询参数和hash的完整路径，如果为空，则为空字符串。

### url.params
- 类型：Object
- 详细：一个 key/value 对象，表示 url 查询参数。例如，对于路径 '/foo?user=tom'，则有 url.params.user === 'tom'，如果没有查询参数，则为 null。

### url.hash
- 类型：String
- 详细：当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为null。

## 实例方法
### url.addParams(options)
- 参数：
  - {Object} options 一个 key/value 对象
- 示例
```javascript
url.addParams({
    page: 1
});
```

### url.removeParams(key)
- 参数：
  - {String | Array} key
- 示例
```javascript
url.removeParams('page');
url.removeParams(['page', 'id']);
```

### url.replaceParams(options)
- 参数：
  - {Object} options 一个 key/value 对象
- 示例
```javascript
url.replaceParams({
    page: 2
});
```

### url.toString()
- 返回值： {String}
- 详细： 将实例转为字符串格式

### url.getFullPath()
- 返回值： {String}
- 详细： 返回实例的 fullPath

## 静态方法
### Url.parseParams(search)
- 参数：
  - {String} search
- 返回值：{Object} 一个 key/value 对象
- 示例
```javascript
let search = 'source=gtx&sl=zh-CN';
Url.parseParams(search); // { source: 'gtx', sl: 'zh-CN' }
```

### Url.stringifyParams(params)
- 参数：
  - {Object} params 一个 key/value 对象
- 返回值：{String}
- 示例
```javascript
let params = {
    source: 'gtx',
    sl: 'zh-CN'
};
Url.stringifyParams(params); // 'source=gtx&sl=zh-CN'
```
