# Base Methods

## Types 

### ElementTarget

``` ts
/** The target that can converted to Element. */
type ElementTarget = string|Element|NodeList;
```

## getElement

Get a single element.

- Syntax

  ``` js
  let element = ElementUtil.getElement(selector, base = document);
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Returns `Element`

## getElements

Get elements as NodeList.

- Syntax

  ``` js
  let nodes = ElementUtil.getElements(selector, base = document);
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Returns `NodeList`

## getElementsAsArray

Get elements as array of HTMLElement.

- Syntax

  ``` js
  let elms = ElementUtil.getElementsAsArray(selector, base = document);
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Return `HTMLElement[]`

## removeElements

Remove elements by selector.

- Syntax

  ``` js
  let number = ElementUtil.removeClass(selector, base = document);
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Return `number` The number of removed.

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

- Param  `NodeList`|`string`|`any[]` nodeList
- Return `any[]`

## findAncestor

Find ancestor from element.

- Syntax

  ``` js
  let element = ElementUtil.findAncestor(self, ancestor);
  ```

- Param [`ElementTarget`] self - base element.
- Param [`ElementTarget`] ancestor
- Return `Element`|`null`

[`ElementTarget`]: #elementtarget
