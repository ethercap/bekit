# Dom
在一些复杂交互下，不可避免的需要对 DOM 进行一些操作，如获取视口尺寸、文档尺寸，是否在视口中可见等，方法为 Dom 类的静态方法。

## 获取类
```javascript
const { Dom } = bekit.helper;
```

## 静态方法
### Dom.createElement(tag[, options])
- 参数：
  - {String} tag
  - {Object} [options] 支持原生 Dom 的属性
- 返回值：{HTMLElement}
- 详细：创建一个原生Dom元素

### Dom.getDoc()
- 返回值：{HTMLElement}
- 详细：获取页面根元素

### Dom.getViewPort()
- 返回值：{Object}
  - {Number} width
  - {Number} height
- 详细：获取视口尺寸

### Dom.getDocumentPort()
- 返回值：{Object}
  - {Number} width
  - {Number} height
- 详细：获取文档尺寸

### Dom.getScroll()
- 返回值：{Object}
  - {Number} top
  - {Number} left
- 详细：获取页面滚动条位置

### Dom.isTopped(selector)
- 参数：
  - {String | HTMLElement} selector
- 返回值：{boolean}
- 详细：在页面滚动时，某个元素是否达到了页面最顶部，适用于某些元素在滚动到顶部的时候吸顶。

### Dom.isClient(selector)
- 参数：
  - {String | HTMLElement} selector
- 返回值：{boolean}
- 详细：某个元素是否在页面中可见

### Dom.scrollTo(selector[, offset])
- 参数：
  - {String | HTMLElement} selector
  - {Number} [offset] 默认值：-30
- 返回值：{boolean}
- 详细：滚动页面，是某个元素出现在页面的最顶部，一般用户填写表单的时候提示用户错误位置，并且可以使用 offset 微调位置。

### Dom.css(selector)
- 参数：
  - {String | HTMLElement} selector
- 返回值：{Object}
- 详细：获取某个元素的 css 计算样式

### Dom.on(selector, type, handler[, options])
- 参数：
  - {String | HTMLElement} selector
  - {String} type
  - {Function} handler
  - {Object} [options]
- 详细：监听事件

### Dom.off(selector, type, handler)
- 参数：
  - {String | HTMLElement} selector
  - {String} type
  - {Function} handler
- 详细：解除监听事件

#### 示例
```javascript
const div = Dom.createElement('div', { class: 'test' });
Dom.scrollTo('#someId');
Dom.on(dom, 'click', handler);
Dom.off(dom, 'click', handler);
```
