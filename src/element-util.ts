import Filter from './classes/filter';
import Sorter from './classes/sorter';
import * as BaseMethods from './methods/base';
import * as UtilMethods from './methods/util';

type ElementTarget = BaseMethods.ElementTarget;

export {
  Filter,
  Sorter,
};

export default {
  ...BaseMethods,
  ...UtilMethods,

  filter(selector: ElementTarget, filter: string = '', enableHTML: boolean = false): number {
    const f = new Filter(selector, filter, { enableHTML });
    return f.execute().hit;
  },

  sort(elm: ElementTarget, options: object = {}): HTMLElement[] {
    const s = new Sorter(elm, options);
    return s.execute().getItems();
  },
};
