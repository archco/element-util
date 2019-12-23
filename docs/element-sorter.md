# Element Sorter

Class for sort elements.

### Table of contents

- [Usage](#usage)
  - [Via helper method](#via-helper-method)
  - [Via class](#via-class)
- [Types](#types)
- [Class Methods](#class-methods)
  - [constructor](#constructor)
  - [setItems](#setItems)
  - [getItems](#getItems)
  - [execute](#execute)

## Usage

### Via helper method

Syntax

``` ts
function sort(elm: ElementTarget, options?: SorterOptions): HTMLElement[];
```

- @param  [`ElementTarget`] elm - base element.
- @param  `object` options - See below options description. default: `{}`
- @returns `HTMLElement[]` Sorted items.

### Via class

``` js
import { ElementSorter } from 'element-util';

const elementSorter = new ElementSorter('ul.country-list');
elementSorter.execute();
const items = elementSorter.getItems();
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

## Class Members

### Properties

- elm `HTMLElement` - base element. e.g. `<ul>` or `<table>`..
- items `HTMLElement[]` - the element items that will be sorted.
- options [`SorterOptions`] - current options.

### constructor

Syntax

``` ts
class ElementSorter {
  constructor(elm: ElementTarget, options: SorterOptions);
}
```

- @param [`ElementTarget`] elm - Base element.
- @param [`SorterOptions`] options - default: `{}`

### setElement

Set base element.

Syntax

``` ts
elementSorter.setElement(elm: ElementTarget): this;
```

- @param  [`ElementTarget`] elm
- @returns `this`

### setItems

Set sort target items.

Syntax

``` ts
elementSorter.setItems(items: ItemsSettable): this;
```

- @param  [`ItemsSettable`](#ItemsSettable) items - 'auto'|selector|NodeList|array
- @returns `this`

### getItems

Get sort target items.

Syntax

``` ts
elementSorter.getItems(): HTMLElement[];
```

- @returns `HTMLElement[]`

### execute

Execute sort.

Syntax

``` ts
elementSorter.execute(): this;
```

- @returns `this`

[`ElementTarget`]: #ElementTarget
[`SorterOptions`]: #SorterOptions
