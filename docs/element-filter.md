# Element Filter

The functional class for filtering elements in node list.

## Usage

### Helper method
- Syntax
```javascript
let hitCount = ElementUtil.filter(selector, filter = '', htmlMode = false);
```
- Param  {String|NodeList} selector filtering targets.
- Param  {String} [ filter = '' ] filter string.
- Param  {Boolean} [ htmlMode = false ]
- Return {Number} hit count.

### Use class
```javascript
import { ElementFilter } from 'element-util';

let elementFilter = new ElementFilter('ul.country-list li', '');
elementFilter.setFilter('den').execute();
let count = elementFilter.getHit();
```

## Class Methods

### constructor
- Syntax
```javascript
let elementFilter = new ElementFilter(selector, filter = '', options = {});
```
- Param  {String|NodeList} selector filtering targets.
- Param  {String} [ filter = '' ] filter string.
- Param  {Object} [ options = {} ]
  ```javascript
  let options = {
    // Enable html mode option. default is false.
    // If this value true, filtering on innerHTML. (default on textContent)
    htmlMode: false,
  };
  ```
- Return {ElementFilter}

### setFilter
Set filter string.

- Syntax
```javascript
elementFilter.setFilter(filter);
```
- Param  {String} filter
- Return {ElementFilter}

### getHit
Get count of filtered elements.

- Syntax
```javascript
let count = elementFilter.getHit();
```
- Return {Number}

### execute
Excute filtering.

- Syntax
```javascript
elementFilter.execute();
```
- Return {void}
