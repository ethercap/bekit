# Time
Format the date.

## Get Class
```javascript
const { Time } = bekit.helper;
```

## Static Methods
### Time.format(date, pattern)
- Arguments:
  - {Date} date
  - {String} pattern
#### Valid value of pattern
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

#### Usage
```javascript
const date = new Date();
Time.format(date, 'yyyy-MM-dd DD');  // 2020-01-03 Friday
```
