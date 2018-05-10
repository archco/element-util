# Element Filter

Class for filtering elements.

### Table of contents

- [Usage](#usage)
  - [Via helper method](#via-helper-method)
  - [Via class](#via-class)
  - [Examples](#examples)
- [Types](#types)
- [Class methods](#class-methods)
  - [constructor](#constructor)
  - [setFilter](#setfilter)
  - [getHit](#gethit)
  - [execute](#execute)

## Usage

### Via helper method

- Syntax

  ``` ts
  function filter(selector: ElementTarget, str?: string, options?: FilterOptions): FilterResult;
  ```

- Param  [`ElementTarget`] selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  [`FilterOptions`] [ options = {} ]
- Returns [`FilterResult`] result object.

### Via class

``` js
import { ElementFilter } from 'element-util';

const elementFilter = new ElementFilter('ul.country-list li');
let result = elementFilter.setFilter('den').execute();
console.log(result.filtered[0]);
```

### Examples

#### Options: enableHTML

If `enableHTML` option is true, filter method will tried compares to the element's `innerHTML` attribute. Default value is `false`, and then using the `textContent` attribute.

``` html
<ul>
  <li>
    <span class="category1">item1</span>
  </li>
  <li>
    <span class="category2">item2</span>
  </li>
  <li>
    <span class="category1">item3</span>
  </li>
</ul>
```

``` js
const result = filter('ul > li', 'category1', { enableHTML: true });
result.filtered.length; // 2
```

#### Options: action

The `action` option allows you to specify an action after filtering elements in the filter method. The possible values are `'hideOthers'`, `'addClass'` or [`FilterActionFunction`].

``` js
// Hiding not matched elements.
filter('ul li', 'word', { action: 'hideOthers' });

// Add class to matched elements.
filter('ul li', 'word', { action: 'addClass: highlighted' });

// Set custom action function.
const customAction = (elm, isMatched) => {
  elm.dataset.selected = isMatched ? 'true' : 'false';
};
filter('ul li', 'word', { action: customAction });
```

## Types

### ElementTarget

``` ts
/** The target that can converted to Element. */
type ElementTarget = string|Element|NodeList;
```

### FilterActionFunction

``` ts
/**
 * Action function for a filtered element.
 * @param {HTMLElement} elm element.
 * @param {boolean} isMatched whether element is matched or not.
 * @returns {void}
 */
type FilterActionFunction = (elm: HTMLElement, isMatched: boolean) => void;
```

### FilterOptions

``` ts
interface FilterOptions {
  /** Enable to use `innerHTML`. Default is false, and than use `textContent`. */
  enableHTML?: boolean;
  /** action for each filtered element. 'hideOthers' or 'addClass: foo'. */
  action?: string | FilterActionFunction;
}
```

### FilterResult

``` ts
interface FilterResult {
  /** Filtering targets. */
  elms: HTMLElement[];
  /** Filtered elements. */
  filtered: HTMLElement[];
}
```

## Class Methods

### constructor

- Syntax

  ``` ts
  class ElementFilter {
    constructor(selector: ElementTarget, str?: string, options?: FilterOptions);
  }
  ```

- Param  [`ElementTarget`] selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  [`FilterOptions`] [ options = {} ]

### setFilter

Set filter string.

- Syntax

  ``` ts
  elementFilter.setFilter(str: string): this;
  ```

- Param  `string` str
- Returns `this`

### execute

Execute filtering.

- Syntax

  ``` ts
  elementFilter.execute(): FilterResult;
  ```

- Returns [`FilterResult`]

[`ElementTarget`]: #elementtarget
[`FilterActionFunction`]: #filteractionfunction
[`FilterOptions`]: #filteroptions
[`FilterResult`]: #filterresult
