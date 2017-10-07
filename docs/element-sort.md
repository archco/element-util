# Element Sort

The functional class for sort elements.

## Usage

### Helper method
- Syntax
```javascript
let items = ElementUtil.sort(elm, options = {});
```
- Param  {Element|String} elm - base element.
- Param  {Object} [ options = {} ] - See below options description.
- Return {Array} Sorted items.

### Use class
```javascript
import { ElementSort } from 'element-util';

let elementSort = new ElementSort('ul.country-list');
elementSort.excute();
let items = elementSort.getItems();
```

## Class Methods

### constructor
- Syntax
```javascript
let elementSort = new ElementSort(elm, options = {});
```
- Param {Element|String} elm - Base element.
- Param {Object} [ options = {} ]
  ```javascript
  let options = {
    items: 'auto', // Items selector: 'auto' | selector | Nodlist | Array
    datasetName: {
      sortDirection: 'sortDirection', // data-sort-direction: 'asc' | 'desc'
      sortType: 'sortType', // data-sort-type: 'string' | 'number' | 'date'
      sortValue: 'sortValue', // data-sort-value
    },
  };
  ```
- Return {ElementSort}

### setElement
Set base element.

- Syntax
```javascript
elementSort.getElement(elm);
```
- Param  {Element|String} elm
- Return {ElementSort}

### setItems
Set sort target items.

- Syntax
```javascript
elementSort.setItems(items);
```
- Param  {String|NodeList} items - 'auto' | selector | Nodlist | Array
- Return {ElementSort}

### getItems
Get sort target items.

- Syntax
```javascript
let items = elementSort.getItems();
```
- Return {Array}

### execute
Excute sorting.

- Syntax
```javascript
elementSort.execute();
```
- Return {void}
