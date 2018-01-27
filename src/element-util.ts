import ElementFilter from './classes/element-filter';
import ElementSorter, { SorterOptions } from './classes/element-sorter';
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

  //
  // Helper methods.
  //

  /**
   * Filtering elements.
   * @param  selector   querySelector
   * @param  filter     filter string.
   * @param  enableHTML using .innerHTML, default is false.
   * @return            Hit number.
   */
  filter(selector: ElementTarget, filter: string = '', enableHTML: boolean = false): number {
    const f = new ElementFilter(selector, filter, { enableHTML });
    return f.execute().hit;
  },

  /**
   * Sorting elements.
   * @param  elm     base element.
   * @param  options options for ElementSorter.
   * @return         sorted elements.
   */
  sort(elm: ElementTarget, options: SorterOptions = {}): HTMLElement[] {
    const s = new ElementSorter(elm, options);
    return s.execute().getItems();
  },
};
