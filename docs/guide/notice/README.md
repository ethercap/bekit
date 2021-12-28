# notice
Support the notice function, such as toast, alert, confirm, prompt. You can customize the style of the notice components. If you want to use these components in your project, you should write styles firstly. [See detail](https://github.com/luzimingx/bekit/blob/master/examples/src/example.less)

## toast
#### bekit.notice.toast(options)
- Arguments:
  - {String | Object} options
##### options
|Property|Type|Detail|Default|Required|
|:---:|:---:|:---:|:---:|:---:|
|message|String|The content|''|yes|
|type|String|Valid value: info、warning、success、error|info|no|
|iconClass|String|the class of icon befor the message|bicon|no|
|duration|Number|Duration time|2500|no|
|timeWait|Number|After notice, the delay time of clearing the component|200|no|
##### Usage
```javascript
bekit.notice.toast('some message');
bekit.notice.toast({
    message: 'some message',
    duration: 1000
});
```

## messageBox
#### bekit.notice.messageBox(options)
- Arguments:
  - {Object} options
- Returns: {Promise}
##### options
|Property|Type|Detail|Default|Required|
|:---:|:---:|:---:|:---:|:---:|
|title|String|Notice title|''|no|
|message|String|Notice content|''|no|
|showCancelButton|boolean|If show the cancel button|true|no|
|cancelButtonText|String|The text of the cancel button|'取消'|no
|confirmButtonText|String|The text of the confirm button|'确定'|no
|cancelButtonClass|String|The class of the cancel button|'b-btn b-btn-cancel'|no
|confirmButtonClass|String|The class of the confirm button|'b-btn b-btn-confirm'|no
|showInput|boolean|If show the input|false|no
|inputPattern|RegExp|The pattern of input|null|no
|inputErrorMessage|String|The error message of input|''|no
##### Usage
```javascript
bekit.notice.messageBox({
    title: 'title',
    message: 'message',
    confirmButtonText: 'I know'
});
```

## alert
#### bekit.notice.alert(message[, title, options])
- Arguments:
  - {String} message
  - {String} [title]
  - {Object} [options]
- Returns: {Promise}
- Detail: Simulate the native function of alert
##### options
|Property|Type|Detail|Default|Required|
|:---:|:---:|:---:|:---:|:---:|
|confirmButtonText|String|The text of confirm button|'确定'|no
|confirmButtonClass|String|The class of confirm button|'b-btn b-btn-confirm'|no
##### Usage
```javascript
bekit.notice.alert('message').then(() => {
    // do something
});
```

## confirm
#### bekit.notice.confirm(message[, title, options])
- Arguments:
  - {String} message
  - {String} [title]
  - {Object} [options]
- Returns: {Promise}
- Detail: Simulate the native function of confirm
##### options
|Property|Type|Detail|Default|Required|
|:---:|:---:|:---:|:---:|:---:|
|cancelButtonText|String|The text of cancel button|'取消'|no
|confirmButtonText|String|The text of confirm button|'确定'|no
|cancelButtonClass|String|The class of cancel button|'b-btn b-btn-cancel'|no
|confirmButtonClass|String|The class of confirm button|'b-btn b-btn-confirm'|no
##### Usage
```javascript
bekit.notice.confirm('message', 'title').then(() => {
    // cofirm here
}).catch(() => {
    // cancel here
});
```

## prompt
#### bekit.notice.prompt(message[, title, options])
- Arguments:
  - {String} message
  - {String} [title]
  - {Object} [options]
- Returns: {Promise}
- Detail: Simulate the native function of prompt
##### options
|Property|Type|Detail|Default|Required|
|:---:|:---:|:---:|:---:|:---:|
|cancelButtonText|String|The text of cancel button|'取消'|no
|confirmButtonText|String|The text of confirm button|'确定'|no
|cancelButtonClass|String|The class of cancel button|'b-btn b-btn-cancel'|no
|confirmButtonClass|String|The class of confirm button|'b-btn b-btn-confirm'|no
|inputPattern|RegExp|The pattern of input|null|no
|inputErrorMessage|String|The error message of input|''|no
##### Usage
```javascript
bekit.notice.prompt('message', 'title', {
    inputPattern: /abc/,
    inputErrorMessage: 'Invalid value'
}).then(() => {
    // cofirm here
}).catch(() => {
    // cancel here
});
```
