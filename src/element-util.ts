import ElementFilter from './classes/element-filter';
import ElementSorter from './classes/element-sorter';
import * as BaseMethods from './methods/base';
import * as UtilMethods from './methods/util';

type ElementTarget = BaseMethods.ElementTarget;

export {
  ElementFilter,
  ElementSorter,
};

export default {
  ...BaseMethods,
  ...UtilMethods,

  filter(selector: ElementTarget, filter: string = '', enableHTML: boolean = false): number {
    const f = new ElementFilter(selector, filter, { enableHTML });
    return f.execute().hit;
  },

  sort(elm: ElementTarget, options: object = {}): HTMLElement[] {
    const s = new ElementSorter(elm, options);
    return s.execute().getItems();
  },
};
