# Factory
Some common factory functions, such as singleton pattern, cache pattern and AOP and so on.

## Get Class
```javascript
const { Factory } = bekit.helper;
```

## Static Methods
### Factory.getSingle(fn);
- Arguments:
  - {Function} fn
- Returns: {Function}
- Detail: Convert an ordinary function to an singleton pattern function
- Usage
```javascript
function getDate() {
    return new Date();
}
const singleFn = Factory.getSingle(getDate);
```

### Factory.getCache(fn);
- Arguments:
  - {Function} fn
- Returns: {Function}
- Detail: Convert an ordinary function to an cache pattern function. Please note that object is an valid argument of the function
- Usage
```javascript
function originFn(key) {
    // some complex process
    // return someting
}
const newFn = Factory.getCache(originFn);
newFn('key');
```

### Factory.before(fn, beforeFn);
- Arguments:
  - {Function} fn
  - {Function} beforeFn
- Returns: {Function}
- Detail: Convert an ordinary function to an AOP function. The beforeFn will run firstly and then the fn will run.
- Usage
```javascript
function originFn() {
    console.log(2);
}
const newFn = Factory.before(originFn, function() {
    console.log(1);
});
newFn(); // 1 2
```

### Factory.after(fn, afterFn);
- Arguments:
  - {Function} fn
  - {Function} afterFn
- Returns: {Function}
- Detail: Convert an ordinary function to an AOP function. The fn will run firstly and then the afterFn will run.
- Usage
```javascript
function originFn() {
    console.log(1);
}
const newFn = Factory.after(originFn, function() {
    console.log(2);
});
newFn(); // 1 2
```
