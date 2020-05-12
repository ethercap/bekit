# notice
提供业务中常见的通知，包含 toast、messageBox、alert、confirm、prompt，因为 bekit 是无 UI 的，所以在某个项目中引入 bekit 后需要写相应的样式，参见 [示例](https://github.com/ethercap/bekit/blob/master/examples/src/example.less)。这种设计是为了解决 Element UI 等组件库中的样式无法满足业务需求这种场景。

## toast
#### bekit.notice.toast(options)
- 参数：
  - {String | Object} options
##### options
|属性|类型|说明|默认值|是否必填|
|:---:|:---:|:---:|:---:|:---:|
|message|String|内容|''|是|
|type|String|支持 info、warning、success、error|info|否|
|iconClass|String|内容前面的 icon 的类名|bicon|否|
|duration|Number|内容展示时间|2500|否|
|timeWait|Number|内容在展示结束后，清空 DOM 的延迟时间|200|否|
##### 示例
```javascript
bekit.notice.toast('some message');
bekit.notice.toast({
    message: 'some message',
    duration: 1000
});
```

## messageBox
#### bekit.notice.messageBox(options)
- 参数：
  - {Object} options
- 返回值：{Promise}
##### options
|属性|类型|说明|默认值|是否必填|
|:---:|:---:|:---:|:---:|:---:|
|title|String|标题|''|否|
|message|String|内容|''|否|
|showCancelButton|boolean|是否展示取消按钮|true|否|
|cancelButtonText|String|取消按钮的内容|'取消'|否
|confirmButtonText|String|确定按钮的内容|'确定'|否
|cancelButtonClass|String|取消按钮的类名|'b-btn b-btn-cancel'|否
|confirmButtonClass|String|取消按钮的类名|'b-btn b-btn-confirm'|否
|showInput|boolean|是否展示输入框|false|否
|inputPattern|RegExp|输入框的校验正则|null|否
|inputErrorMessage|String|输入框的错误提示|''|否
##### 示例
```javascript
bekit.notice.messageBox({
    title: 'title',
    message: 'message',
    confirmButtonText: '我知道了'
});
```

## alert
#### bekit.notice.alert(message[, title, options])
- 参数：
  - {String} message
  - {String} [title]
  - {Object} [options]
- 返回值：{Promise}
- 详细：模拟原生的 alert
##### options
|属性|类型|说明|默认值|是否必填|
|:---:|:---:|:---:|:---:|:---:|
|confirmButtonText|String|确定按钮的内容|'确定'|否
|confirmButtonClass|String|取消按钮的类名|'b-btn b-btn-confirm'|否
##### 示例
```javascript
bekit.notice.alert('message').then(() => {
    // do something
});
```

## confirm
#### bekit.notice.confirm(message[, title, options])
- 参数：
  - {String} message
  - {String} [title]
  - {Object} [options]
- 返回值：{Promise}
- 详细：模拟原生的 confirm
##### options
|属性|类型|说明|默认值|是否必填|
|:---:|:---:|:---:|:---:|:---:|
|cancelButtonText|String|取消按钮的内容|'取消'|否
|confirmButtonText|String|确定按钮的内容|'确定'|否
|cancelButtonClass|String|取消按钮的类名|'b-btn b-btn-cancel'|否
|confirmButtonClass|String|取消按钮的类名|'b-btn b-btn-confirm'|否
##### 示例
```javascript
bekit.notice.confirm('message', 'title').then(() => {
    // cofirm here
}).catch(() => {
    // cancel here
});
```

## prompt
#### bekit.notice.prompt(message[, title, options])
- 参数：
  - {String} message
  - {String} [title]
  - {Object} [options]
- 返回值：{Promise}
- 详细：模拟原生的 prompt
##### options
|属性|类型|说明|默认值|是否必填|
|:---:|:---:|:---:|:---:|:---:|
|cancelButtonText|String|取消按钮的内容|'取消'|否
|confirmButtonText|String|确定按钮的内容|'确定'|否
|cancelButtonClass|String|取消按钮的类名|'b-btn b-btn-cancel'|否
|confirmButtonClass|String|取消按钮的类名|'b-btn b-btn-confirm'|否
|inputPattern|RegExp|输入框的校验正则|null|否
|inputErrorMessage|String|输入框的错误提示|''|否
##### 示例
```javascript
bekit.notice.confirm('message', 'title', {
    inputPattern: /abc/,
    inputErrorMessage: '格式错误'
}).then(() => {
    // cofirm here
}).catch(() => {
    // cancel here
});
```
