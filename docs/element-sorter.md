# Element Sorter

Class for sort elements.

## Usage

### Helper method

- Syntax
  ``` js
  let items = ElementUtil.sort(elm, options = {});
  ```
- Param  `Element`|`string` elm - base element.
- Param  `object` [ options = {} ] - See below options description.
- Return `array` Sorted items.

### Use class

``` js
import { ElementSorter } from 'element-util';

let elementSorter = new ElementSorter('ul.country-list');
elementSorter.execute();
let items = elementSorter.getItems();
```

## Class Methods

### constructor

- Syntax
  ``` js
  let elementSorter = new ElementSorter(elm, options = {});
  ```
- Param `Element`|`string` elm - Base element.
- Param `object` [ options = {} ]
  ``` js
  let options = {
    items: 'auto', // Items selector: 'auto'|selector|NodeList|array
    datasetName: {
      sortDirection: 'sortDirection', // data-sort-direction: 'asc'|'desc'
      sortType: 'sortType', // data-sort-type: 'string'|'number'|'date'
      sortValue: 'sortValue', // data-sort-value
    },
  };
  ```
- Return `ElementSorter`

### setElement

Set base element.

- Syntax
  ``` js
  elementSorter.getElement(elm);
  ```
- Param  `Element`|`string` elm
- Return `ElementSorter`

### setItems

Set sort target items.

- Syntax
  ``` js
  elementSorter.setItems(items);
  ```
- Param  `string`|`NodeList` items - 'auto'|selector|NodeList|array
- Return `ElementSorter`

### getItems

Get sort target items.

- Syntax
  ``` js
  let items = elementSorter.getItems();
  ```
- Return `array`

### execute

Execute sort.

- Syntax
  ``` js
  elementSorter.execute();
  ```
- Return `void`
