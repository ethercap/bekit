# Url
It contains some common operations of url. You can convert url between String and Object. You can also add, remove and replace params of url.

## Get Instance
```javascript
const { Url } = bekit.helper;
let url = new Url('https://www.google.com/index?id=abc#hash');
```

## Instance Properties
### url.protocol
- Type: String
- Detail: Return the protocol. If the original string doesn't contain the protocol, for example 'www.google.com', then return window.location.protocol.

### url.host
- Type: String
- Detail: Return the host

### url.path
- Type: String
- Detail: Return the pathname. It will alwayse be the absolute path, such as '/foo/bar'. If original string doesn't contain the path, then return null.

### url.fullPath
- Type: String
- Detail: Return the full path which contains search and hash.

### url.params
- Type: Object
- Detail: Return an key/value object which represents the search of url. For example, the original string like '/foo?user=tom', url.params.user === 'tom'. If the original string doesn't have search, then return null.

### url.hash
- Type: String
- Detail: Return the hash of url(doesn't contain #). If the original string doesn't have hash, then return null.

## Instance Methods
### url.addParams(options)
- Arguments:
  - {Object} options an key/value Object
- Usage
```javascript
url.addParams({
    page: 1
});
```

### url.removeParams(key)
- Arguments:
  - {String | Array} key
- Usage
```javascript
url.removeParams('page');
url.removeParams(['page', 'id']);
```

### url.replaceParams(options)
- Arguments:
  - {Object} options an key/value Object
- Usage
```javascript
url.replaceParams({
    page: 2
});
```

### url.toString()
- Returns: {String}
- Detail:  Convert the instance to String.

### url.getFullPath()
- Returns: {String}
- Detail:  Return the fullPath.

## Static Methods
### Url.parseParams(search)
- Arguments:
  - {String} search
- Returns: {Object} an key/value Object
- Usage
```javascript
let search = 'source=gtx&sl=zh-CN';
Url.parseParams(search); // { source: 'gtx', sl: 'zh-CN' }
```

### Url.stringifyParams(params)
- Arguments:
  - {Object} params an key/value Object
- Returns: {String}
- Usage
```javascript
let params = {
    source: 'gtx',
    sl: 'zh-CN'
};
Url.stringifyParams(params); // 'source=gtx&sl=zh-CN'
```
