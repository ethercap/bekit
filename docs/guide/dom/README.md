# Dom
Today we use MVVM develop mode. But we still operate DOM inevitably in some complex situation. For example, getting the document size, judging whether an element is visible and so on.

## Get Class
```javascript
const { Dom } = bekit.helper;
```

## Static Methods
### Dom.createElement(tag[, options])
- Arguments:
  - {String} tag
  - {Object} [options] Support all original properties
- Returns: {HTMLElement}
- Detail: Create an original element

### Dom.getDoc()
- Returns: {HTMLElement}
- Detail: Get the root element

### Dom.getViewPort()
- Returns: {Object}
  - {Number} width
  - {Number} height
- Detail: Get the viewport size

### Dom.getDocumentPort()
- Returns: {Object}
  - {Number} width
  - {Number} height
- Detail: Get the document size

### Dom.getScroll()
- Returns: {Object}
  - {Number} top
  - {Number} left
- Detail: Get the scrollbar position

### Dom.isTopped(selector)
- Arguments:
  - {String | HTMLElement} selector
- Returns: {boolean}
- Detail: When the page is scrolling, judge whether an element reachs the top of page

### Dom.isClient(selector)
- Arguments:
  - {String | HTMLElement} selector
- Returns: {boolean}
- Detail: When the page is scrolling, judge whether an element is visible

### Dom.scrollTo(selector[, offset])
- Arguments:
  - {String | HTMLElement} selector
  - {Number} [offset] default: -30
- Returns: {boolean}
- Detail: Scroll the page to make an element reachs the top of the page. You can use offset to adjust position.

### Dom.css(selector)
- Arguments:
  - {String | HTMLElement} selector
- Returns: {Object}
- Detail: Get the computed style of an element

### Dom.on(selector, type, handler[, options])
- Arguments:
  - {String | HTMLElement} selector
  - {String} type
  - {Function} handler
  - {Object} [options]
- Detail: Add an event handler

### Dom.off(selector, type, handler)
- Arguments:
  - {String | HTMLElement} selector
  - {String} type
  - {Function} handler
- Detail: Remove an event handler

#### Usage
```javascript
const div = Dom.createElement('div', { class: 'test' });
Dom.scrollTo('#someId');
Dom.on(dom, 'click', handler);
Dom.off(dom, 'click', handler);
```
