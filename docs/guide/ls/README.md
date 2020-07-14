# Ls
Encapsulation of localStorage. It supports namespace and clearing expired data automatically. It supports sync methods and async methods.

## Get Instance
```javascript
const { Ls } = bekit.helper;
const ls = new bekit.helper.Ls([config]);
```
#### config
|Property|Type|Detail|Default|Required|
|:---:|:---:|:---:|:---:|:---:|
|prefix|String|namespace|'#\|'|no|
|gcRate|Number|When writing and reading data, the probability of clearing expired data automatically.|0.1|no|

## Instance Methods
### ls.set(key, value[, expire])
- Arguments:
  - {String} key
  - {any} value
  - {Number} [expire] The unit is seconds.
- Returns: {Promise}
- Usage
```javascript
ls.set('test', { msg: 'some msg' }, 3600 * 24 * 7).then(callback);
```

### ls.setSync(key, value[, expire])
- Arguments: Same to ls.set
- Detail: An sync version function of ls.set
- Usage
```javascript
ls.setSync('test', { msg: 'some msg' }, 3600 * 24 * 7);
```

### ls.get(key)
- Arguments:
  - {String} key
- Returns: {Promise}
- Usage
```javascript
ls.get('test').then(data => {
    // do something with data
});
```

### ls.getSync(key)
- Arguments: Same to ls.get
- Returns: Return the value that has been set. If the key doesn't been set, then return null.
- Detail: An sync version function of ls.get
- Usage
```javascript
const test = ls.getSync('test');
```


### ls.getOrSet(key, value)
- Arguments:
  - {String} key
  - {any} value
- Returns: {Promise}
- Usage
```javascript
ls.getOrSet('test', { msg: 'other msg' }).then(data => {
    // do something with data
 });
```

### ls.getOrSetSync(key, value)
- Arguments: Same to ls.getOrSet
- Returns: If the key has been set, then return the value already set. If not, set the specified value firstly, then return it
- Detail: An sync version function of ls.getOrSet
- Usage
```javascript
const test = ls.getOrSetSync('test', { msg: 'other msg' });
```

### ls.remove(key)
- Arguments:
  - {String | Array} key
- Returns: {Promise}
- Usage
```javascript
ls.remove('test').then(callback);
ls.remove(['test']).then(callback);
```

### ls.removeSync(key)
- Arguments: Same to ls.remove
- Detail: An sync version function of ls.remove
- Usage
```javascript
ls.removeSync('test');
ls.removeSync(['test']);
```
