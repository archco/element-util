# Element Sort

The functional class for sort elements.

## Usage

### Helper method

- Syntax
  ``` js
  let items = ElementUtil.sort(elm, options = {});
  ```
- Param  `Element`|`String` elm - base element.
- Param  `Object` [ options = {} ] - See below options description.
- Return `Array` Sorted items.

### Use class

``` js
import { ElementSort } from 'element-util';

const elementSort = new ElementSort('ul.country-list');
elementSort.execute();
const items = elementSort.getItems();
```

## Class Methods

### constructor

- Syntax
  ``` js
  let elementSort = new ElementSort(elm, options = {});
  ```
- Param `Element`|`String` elm - Base element.
- Param `Object` [ options = {} ]
  ``` js
  let options = {
    items: 'auto', // Items selector: 'auto' | selector | Nodlist | Array
    datasetName: {
      sortDirection: 'sortDirection', // data-sort-direction: 'asc' | 'desc'
      sortType: 'sortType', // data-sort-type: 'string' | 'number' | 'date'
      sortValue: 'sortValue', // data-sort-value
    },
  };
  ```
- Return `ElementSort`

### setElement

Set base element.

- Syntax
  ``` js
  elementSort.getElement(elm);
  ```
- Param  `Element`|`String` elm
- Return `ElementSort`

### setItems

Set sort target items.

- Syntax
  ``` js
  elementSort.setItems(items);
  ```
- Param  `String`|`NodeList` items - 'auto'|selector|NodeList|Array
- Return `ElementSort`

### getItems

Get sort target items.

- Syntax
  ``` js
  let items = elementSort.getItems();
  ```
- Return `Array`

### execute

Execute sorting.

- Syntax
  ``` js
  elementSort.execute();
  ```
- Return `void`
