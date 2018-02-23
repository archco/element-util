import ElementFilter from './classes/element-filter';
import ElementSorter, { SorterOptions } from './classes/element-sorter';
import { ElementTarget } from './methods/base';

export * from './methods/base';
export * from './methods/util';
export { default as ElementFilter } from './classes/element-filter';
export { default as ElementSorter } from './classes/element-sorter';

//
// Helper methods.
//

/**
 * Filtering elements.
 * @param  selector   querySelector
 * @param  str     filter string.
 * @param  enableHTML using .innerHTML, default is false.
 * @return            Hit number.
 */
export function filter(selector: ElementTarget, str: string = '', enableHTML: boolean = false): number {
  const f = new ElementFilter(selector, str, { enableHTML });
  return f.execute().hit;
}

/**
 * Sorting elements.
 * @param  elm     base element.
 * @param  options options for ElementSorter.
 * @return         sorted elements.
 */
export function sort(elm: ElementTarget, options: SorterOptions = {}): HTMLElement[] {
  const s = new ElementSorter(elm, options);
  return s.execute().getItems();
}
