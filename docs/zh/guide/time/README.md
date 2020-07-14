# Time
对日期的格式化操作，方法为 Time 类的静态方法。

## 获取类
```javascript
const { Time } = bekit.helper;
```

## 静态方法
### Time.format(date, pattern)
- 参数：
  - {Date} date
  - {String} pattern
#### pattern 的有效值
|pattern|decription|
|:---:|:---:|
|yyyy|year|
|yy|year|
|MM|month|
|M|month|
|dd|day|
|d|day|
|DD|week|
|D|week|
|DC|week cn|
|hh|hour|
|h|hour|
|mm|munite|
|m|munite|
|ss|second|
|s|second|

#### 示例
```javascript
const date = new Date();
Time.format(date, 'yyyy-MM-dd 星期DC');  // 2020-01-03 星期五
```
