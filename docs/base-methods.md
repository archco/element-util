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

  ``` ts
  function getElement(selector: ElementTarget, base?: Document|ElementTarget): Element;
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Returns `Element`

## getElements

Get elements as NodeList.

- Syntax

  ``` ts
  function getElements(selector: ElementTarget, base?: Document|ElementTarget): NodeList;
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Returns `NodeList`

## getElementsAsArray

Get elements as array of HTMLElement.

- Syntax

  ``` ts
  function getElementsAsArray(selector: ElementTarget, base?: Document|ElementTarget): HTMLElement[];
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Return `HTMLElement[]`

## removeElements

Remove elements by selector.

- Syntax

  ``` ts
  function removeElements(selector: ElementTarget, base?: Document|ElementTarget): number;
  ```

- Param  [`ElementTarget`] selector
- Param  `Document`|[`ElementTarget`] [ base = document ]
- Return `number` The number of removed.

## toNodeList

Convert a single element to NodeList.

- Syntax

  ``` ts
  function toNodeList(elm: Element|string, base?: Document|ElementTarget): NodeList;
  ```

- Param `Element`|`string` elm
- Param `Document`|[`ElementTarget`] [ base = document ]
- Return `NodeList`

## nodeListToArray

Convert NodeList to Array.

- Syntax

  ``` ts
  function nodeListToArray(list: NodeList|any[]|string): any[];
  ```

- Param  `NodeList`|`string`|`any[]` nodeList
- Return `any[]`

## findAncestor

Find ancestor from element.

- Syntax

  ``` js
  function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null;
  ```

- Param [`ElementTarget`] self - base element.
- Param [`ElementTarget`] ancestor
- Return `Element`|`null`

[`ElementTarget`]: #elementtarget
