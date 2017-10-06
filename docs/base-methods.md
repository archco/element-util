# Base Methods

## getElement
Get a single element.
- Syntax
```javascript
let element = ElementUtil.getElement(selector, base = document);
```
- Param  {String|Element|NodeList} selector
- Param  {String|Element} [ base = document ]
- Return {Element}

## getElements
Get elements as NodeList.
- Syntax
```javascript
let nodes = ElementUtil.getElements(selector, base = document);
```
- Param  {String|Element|NodeList} selector
- Param  {String|Element} [ base = document ]
- Return {NodeList}

## removeElements
Remove elements by selector.
- Syntax
```javascript
let number = ElementUtil.removeClass(selector, base = document);
```
- Param  {String|Element|NodeList} selector
- Param  {String|Element} [ base = document ]
- Return {Number} number of affected.

## toNodeList
Convert a single Element to NodeList.
- Syntax
```javascript
let nodeList = ElementUtil.toNodeList(elm);
```
- Param  {Element|String} elm
- Return {NodeList}

## nodeListToArray
Convert NodeList to Array.
- Syntax
```javascript
let array = ElementUtil.nodeListToArray(nodelist);
```
- Param  {NodeList|String} nodelist
- Return {Array}

## findAncestor
Find ancestor from element.
- Syntax
```javascript
let element = ElementUtil.findAncestor(elm, selector);
```
- Param {Element|String} elm or querySelector - base element.
- Param {String} selector - ancestor's querySelector.
- Return {Element|null}
