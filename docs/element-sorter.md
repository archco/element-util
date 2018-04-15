# Element Sorter

Class for sort elements.

### Table of contents

- [Usage](#usage)
  - [Via helper method](#via-helper-method)
  - [Via class](#via-class)
- [Types](#types)
- [Class Methods](#class-methods)
  - [constructor](#constructor)
  - [setItems](#setitems)
  - [getItems](#getitems)
  - [execute](#execute)

## Usage

### Via helper method

- Syntax

  ``` js
  let items = ElementUtil.sort(elm, options = {});
  ```

- Param  [`ElementTarget`] elm - base element.
- Param  `object` [ options = {} ] - See below options description.
- Returns `HTMLElement[]` Sorted items.

### Via class

``` js
import { ElementSorter } from 'element-util';

let elementSorter = new ElementSorter('ul.country-list');
elementSorter.execute();
let items = elementSorter.getItems();
```

## Types

### ElementTarget

``` ts
/** The target that can converted to Element. */
type ElementTarget = string|Element|NodeList;
```

### ItemsSettable

``` ts
/** Types that can be as target items. */
type ItemsSettable = string|NodeList|HTMLElement[];
```

### DatasetNames

``` ts
interface DatasetNames {
  /** Default value is `sortDirection`. It means `data-sort-direction` attribute in html. */
  sortDirection?: string;
  /** Default value is `sortType`. It means `data-sort-type` attribute in html. */
  sortType?: string;
  /** Default value is `sortValue`. It means `data-sort-value` attribute in html. */
  sortValue?: string;
}
```

### SorterOptions

``` ts
interface SorterOptions {
  /** Target elements for sorting. */
  items?: ItemsSettable;
  /** Specifying dataset names. type, value and direction. */
  datasetName?: DatasetNames;
}
```

## Class Methods

### constructor

- Syntax

  ``` js
  let elementSorter = new ElementSorter(elm, options = {});
  ```

- Param [`ElementTarget`] elm - Base element.
- Param [`SorterOptions`](#sorteroptions) [ options = {} ]

### setElement

Set base element.

- Syntax

  ``` js
  elementSorter.setElement(elm);
  ```

- Param  [`ElementTarget`] elm
- Returns `this`

### setItems

Set sort target items.

- Syntax

  ``` js
  elementSorter.setItems(items);
  ```

- Param  [`ItemsSettable`](#itemssettable) items - 'auto'|selector|NodeList|array
- Returns `this`

### getItems

Get sort target items.

- Syntax

  ``` js
  let items = elementSorter.getItems();
  ```

- Returns `HTMLElement[]`

### execute

Execute sort.

- Syntax

  ``` js
  elementSorter.execute();
  ```

- Returns `this`

[`ElementTarget`]: #elementtarget
