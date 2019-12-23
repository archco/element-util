# Base Methods

## Types 

### ElementTarget

``` ts
/** The target that can converted to Element. */
type ElementTarget = string|Element|NodeList;
```

## getElement

Get a single element.

Syntax

``` ts
function getElement(selector: ElementTarget, base?: Document|ElementTarget): Element;
```

- @param  [`ElementTarget`] selector
- @param  `Document`|[`ElementTarget`] base - default: `document`
- @returns `Element`

## getElements

Get elements as NodeList.

Syntax

``` ts
function getElements(selector: ElementTarget, base?: Document|ElementTarget): NodeList;
```

- @param  [`ElementTarget`] selector
- @param  `Document`|[`ElementTarget`] base - default: `document`
- @returns `NodeList`

## getElementsAsArray

Get elements as array of HTMLElement.

Syntax

``` ts
function getElementsAsArray(selector: ElementTarget, base?: Document|ElementTarget): HTMLElement[];
```

- @param  [`ElementTarget`] selector
- @param  `Document`|[`ElementTarget`] base - default: `document`
- @returns `HTMLElement[]`

## removeElements

Remove elements by selector.

Syntax

``` ts
function removeElements(selector: ElementTarget, base?: Document|ElementTarget): number;
```

- @param  [`ElementTarget`] selector
- @param  `Document`|[`ElementTarget`] base - default: `document`
- @returns `number` The number of removed.

## toNodeList

Convert a single element to NodeList.

Syntax

``` ts
function toNodeList(elm: Element|string, base?: Document|ElementTarget): NodeList;
```

- @param `Element`|`string` elm
- @param `Document`|[`ElementTarget`] base - default: `document`
- @returns `NodeList`

## nodeListToArray

Convert NodeList to Array.

Syntax

``` ts
function nodeListToArray(list: NodeList|any[]|string): any[];
```

- @param  `NodeList`|`string`|`any[]` nodeList
- @returns `any[]`

## findAncestor

Find ancestor from element.

Syntax

``` js
function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null;
```

- @param [`ElementTarget`] self - base element.
- @param [`ElementTarget`] ancestor
- @returns `Element`|`null`

[`ElementTarget`]: #ElementTarget
