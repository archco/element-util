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
  function filter(selector: ElementTarget, str?: string, enableHTML?: boolean): number;
  ```

- Param  [`ElementTarget`] selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  `boolean` [ htmlMode = false ]
- Returns `number` The number of hit.

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

### FilterOptions

``` ts
interface FilterOptions {
  /** Enable to use `innerHTML`. Default is false, and than use `textContent`. */
  enableHTML?: boolean;
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
- Param  [`FilterOptions`](#filteroptions) [ options = {} ]

### setFilter

Set filter string.

- Syntax

  ``` ts
  elementFilter.setFilter(str: string): this;
  ```

- Param  `string` str
- Returns `this`

### getHit

Get count of filtered elements.

- Syntax

  ``` ts
  elementFilter.getHit(): number;
  ```

- Returns `number`

### execute

Execute filtering.

- Syntax

  ``` ts
  elementFilter.execute(): this;
  ```

- Returns `this`

[`ElementTarget`]: #elementtarget
