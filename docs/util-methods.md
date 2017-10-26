# Util Methods

## addListener
Add event listener on selector.
- Syntax
```javascript
let effected = ElementUtil.addListener(selector, type, listener, useCapture = false);
```
- Param {String|Element|NodeList} selector
- Param {String} type - event type.
- Param {Function} listener
- Param {Boolean} [ useCapture = false ]
- Return {Number} - length of elements.

## wrap
Wrap elements by div.wrapper, one by one.
- Syntax
```javascript
ElementUtil.wrap(selector, className, tagName = 'DIV');
```
- Param {String|Element|NodeList} selector
- Param {String} className - wrapper's class name.
- Param {String} [ tagName = 'DIV' ] - wrapper's tag name.
- Return {void}

## wrapAll
Wrap all elements inside to div.wrapper.
- Syntax
```javascript
ElementUtil.wrapAll(selector, className, tagName = 'DIV');
```
- Param {String|Element|NodeList} selector
- Param {String} className - wrapper's class name.
- Param {String} [ tagName = 'DIV' ] - wrapper's tag name.
- Return {void}

## submitConfirm
Add confirm message on 'submit' event.
- Syntax
```javascript
ElementUtil.submitConfirm(selector, message = 'Are you confirm?');
```
- Param {String|Element|NodeList} selector
- Param {String} [ message = 'Are you confirm?' ]
- Return {void}

## addClass
Add class to an element.
- Syntax
```javascript
ElementUtil.addClass(selector, className);
```
- Param  {String|Element} selector
- Param  {String} className
- Return {void}

## removeClass
Remove class from an element.
- Syntax
```javascript
ElementUtil.removeClass(selector, className);
```
- Param {String|Element} selector
- Param {String} className
- Return {void}

## toggleClass
Toggling class.
- Syntax
```javascript
ElementUtil.toggleClass(selector, className);
```
- Param {String|Element} selector
- Param {String} className
- Return {void}

## hide
Hide an element. use css `display: none;`
- Syntax
```javascript
ElementUtil.hide(selector);
```
- Param {String|Element} selector
- Return {void}

## show
Remove `display: none;`
- Syntax
```javascript
ElementUtil.show(selector);
```
- Param {String|Element} selector
- Return {void}

## toggleShow
Toggling show/hide element.
- Syntax
```javascript
ElementUtil.toggleShow(selector);
```
- Param {String|Element} selector
- Return {void}

## makeHiddenInput
Make `input[type="hidden"]` element.
- Syntax
```javascript
let input = Element.makeHiddenInput(name, value);
```
- Param  {String} name - input name.
- Param  {String} value - input value.
- Return {Element}

## appendHiddenInput
Append hidden type input to target element.
- Syntax
```javascript
Element.appendHiddenInput(target, name, value);
```
- Param  {Element|String} target - target element.
- Param  {String} name - input name.
- Param  {String} value - input value.
- Return {void}
