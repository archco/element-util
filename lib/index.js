import baseMethods from './methods/base';
import utilMethods from './methods/util';
import Filter from './classes/filter';

const filterMethod = {
  filter(selector, filter, htmlMode = false) {
    let f = new Filter(selector, filter, { htmlMode });
    f.filtering();
    return f.getHit();
  },
};

const ElementUtil = Object.assign(
    baseMethods,
    utilMethods,
    filterMethod
  );

export default ElementUtil;
export {
  Filter,
};
