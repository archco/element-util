# Element Filter

Class for filtering elements.

### Table of contents

- [Usage](#usage)
  - [Via helper method](#via-helper-method)
  - [Via class](#via-class)
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
elementFilter.setFilter('den').execute();
const count = elementFilter.getHit();
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
