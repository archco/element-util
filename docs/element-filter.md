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

  ``` js
  let hitCount = ElementUtil.filter(selector, str = '', htmlMode = false);
  ```

- Param  [`ElementTarget`] selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  `boolean` [ htmlMode = false ]
- Returns `number` The number of hit.

### Via class

``` js
import { ElementFilter } from 'element-util';

let elementFilter = new ElementFilter('ul.country-list li', '');
elementFilter.setFilter('den').execute();
let count = elementFilter.getHit();
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

  ``` js
  let elementFilter = new ElementFilter(selector, str = '', options = {});
  ```

- Param  [`ElementTarget`] selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  [`FilterOptions`](#filteroptions) [ options = {} ]

### setFilter

Set filter string.

- Syntax

  ``` js
  elementFilter.setFilter(str);
  ```

- Param  `string` str
- Returns `this`

### getHit

Get count of filtered elements.

- Syntax

  ``` js
  let count = elementFilter.getHit();
  ```

- Returns `number`

### execute

Execute filtering.

- Syntax

  ``` js
  elementFilter.execute();
  ```

- Returns `this`

[`ElementTarget`]: #elementtarget
