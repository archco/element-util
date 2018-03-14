# Element Filter

Class for filtering elements.

## Usage

### Helper method

- Syntax

  ``` js
  let hitCount = ElementUtil.filter(selector, str = '', htmlMode = false);
  ```

- Param  `string`|`NodeList` selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  `boolean` [ htmlMode = false ]
- Return `number` hit count.

### Use class

``` js
import { ElementFilter } from 'element-util';

let elementFilter = new ElementFilter('ul.country-list li', '');
elementFilter.setFilter('den').execute();
let count = elementFilter.getHit();
```

## Class Methods

### constructor

- Syntax

  ``` js
  let elementFilter = new ElementFilter(selector, str = '', options = {});
  ```

- Param  `string`|`NodeList` selector filtering targets.
- Param  `string` [ str = '' ] filter string.
- Param  `object` [ options = {} ]

  ``` js
  let options = {
    // Enable to use `innerHTML`. Default is false, and than use `textContent`.
  
    enableHTML: false,
  };
  ```

- Return `ElementFilter`

### setFilter

Set filter string.

- Syntax

  ``` js
  elementFilter.setFilter(str);
  ```

- Param  `string` str
- Return `ElementFilter`

### getHit

Get count of filtered elements.

- Syntax

  ``` js
  let count = elementFilter.getHit();
  ```

- Return `number`

### execute

Execute filtering.

- Syntax

  ``` js
  elementFilter.execute();
  ```

- Return `void`
