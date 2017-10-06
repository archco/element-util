import baseMethods from './methods/base';
import utilMethods from './methods/util';
import ElementFilter from './classes/filter';
import ElementSort from './classes/sort';

// TODO:
// - Write test file more..
// - Write docs.
// - release.

const filterMethod = {
  filter(selector, filter, htmlMode = false) {
    let f = new ElementFilter(selector, filter, { htmlMode });
    f.filtering();
    return f.getHit();
  },
};

const sortMethod = {
  sort(elm, options = {}) {
    let s = new ElementSort(elm, options);
    s.sorting();
    return s.getItems();
  },
};

const ElementUtil = Object.assign(
    baseMethods,
    utilMethods,
    filterMethod,
    sortMethod
  );

export default ElementUtil;
export {
  ElementFilter,
  ElementSort,
};
