import baseMethods from './methods/base';
import utilMethods from './methods/util';
import ElementFilter from './classes/element-filter';
import ElementSort from './classes/element-sort';

const filterMethod = {
  filter(selector, filter, htmlMode = false) {
    let f = new ElementFilter(selector, filter, { htmlMode });
    f.excute();
    return f.getHit();
  },
};

const sortMethod = {
  sort(elm, options = {}) {
    let s = new ElementSort(elm, options);
    s.excute();
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
