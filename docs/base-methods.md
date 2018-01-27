# Base Methods

## getElement

Get a single element.

- Syntax
  ``` js
  let element = ElementUtil.getElement(selector, base = document);
  ```
- Param  `string`|`Element`|`NodeList` selector
- Param  `string`|`Element` [ base = document ]
- Return `Element`

## getElements

Get elements as NodeList.

- Syntax
  ``` js
  let nodes = ElementUtil.getElements(selector, base = document);
  ```
- Param  `string`|`Element`|`NodeList` selector
- Param  `string`|`Element` [ base = document ]
- Return `NodeList`

## removeElements

Remove elements by selector.

- Syntax
  ``` js
  let number = ElementUtil.removeClass(selector, base = document);
  ```
- Param  `string`|`Element`|`NodeList` selector
- Param  `string`|`Element` [ base = document ]
- Return `Number` number of affected.

## toNodeList

Convert a single Element to NodeList.

- Syntax
  ``` js
  let nodeList = ElementUtil.toNodeList(elm);
  ```
- Param  `Element`|`string` elm
- Return `NodeList`

## nodeListToArray

Convert NodeList to Array.

- Syntax
  ``` js
  let array = ElementUtil.nodeListToArray(nodeList);
  ```
- Param  `NodeList`|`string`|`Array` nodeList
- Return `Array`

## findAncestor

Find ancestor from element.

- Syntax
  ``` js
  let element = ElementUtil.findAncestor(self, ancestor);
  ```
- Param `Element`|`string` self - base element.
- Param `Element`|`string` ancestor
- Return `Element`|`null`
