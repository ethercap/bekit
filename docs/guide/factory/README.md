# Factory
提供常见的工厂函数，包括单例、缓存、AOP，方法为Factory类的静态方法。

## 获取类
```javascript
const { Factory } = bekit.helper;
```

## 静态方法
### Factory.getSingle(fn);
- 参数：
  - {Function} fn
- 返回值：{Function}
- 详细：将一个普通函数转换成一个单例模式的函数。
#### 示例
```javascript
function getDate() {
    return new Date();
}
const singleFn = Factory.getSingle(getDate);
```

### Factory.getCache(fn);
- 参数：
  - {Function} fn
- 返回值：{Function}
- 详细：将一个普通函数转换成具有缓存代理的函数，适用于某个被频繁调用的函数，值得注意的是，该函数的参数只能简单类型的数字、字符串。
#### 示例
```javascript
function originFn(key) {
    // some complex process
    // return someting
}
const newFn = Factory.getCache(originFn);
newFn('key');
```

### Factory.before(fn, beforeFn);
- 参数：
  - {Function} fn
  - {Function} beforeFn
- 返回值：{Function}
- 详细：实现 AOP，返回一个函数，先执行 beforeFn，再执行 fn。
#### 示例
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
- 参数：
  - {Function} fn
  - {Function} afterFn
- 返回值：{Function}
- 详细：实现 AOP，返回一个函数，先执行 fn，再执行 afterFn。
#### 示例
```javascript
function originFn() {
    console.log(1);
}
const newFn = Factory.after(originFn, function() {
    console.log(2);
});
newFn(); // 1 2
```
