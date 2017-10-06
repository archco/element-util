import baseMethods from './methods/base';
import utilMethods from './methods/util';
import Filter from './classes/filter';
import Sort from './classes/sort';

const filterMethod = {
  filter(selector, filter, htmlMode = false) {
    let f = new Filter(selector, filter, { htmlMode });
    f.filtering();
    return f.getHit();
  },
};

const sortMethod = {
  sort(elm, options = {}) {
    let s = new Sort(elm, options);
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
  Filter,
  Sort,
};
