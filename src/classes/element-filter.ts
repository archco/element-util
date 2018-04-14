import {
  ElementTarget,
  getElements,
  nodeListToArray,
} from '../methods/base';
import { hide, show } from '../methods/util';

export interface FilterOptions {
  /** Enable to use `innerHTML`. Default is false, and than use `textContent`. */
  enableHTML?: boolean;
}

/**
 * Filtering elements. (helper method)
 * @param  selector   querySelector
 * @param  str     filter string.
 * @param  enableHTML using .innerHTML, default is false.
 * @return            Hit number.
 */
export function filter(selector: ElementTarget, str: string = '', enableHTML: boolean = false): number {
  const f = new ElementFilter(selector, str, { enableHTML });
  return f.execute().hit;
}

export class ElementFilter {
  elms: NodeList;
  filter: string;
  hit: number = 0;
  options: FilterOptions;

  /**
   * constructor
   * @param selector target elements.
   * @param str   a string for filtering.
   * @param options  enableHTML?: boolean
   */
  constructor(selector: ElementTarget, str: string = '', options: FilterOptions = {}) {
    this.elms = getElements(selector);
    this.filter = str;
    this.options = this.getDefaultOptions();
    this.setOptions(options);
  }

  /**
   * getDefaultOptions
   * @return filter options object.
   */
  getDefaultOptions(): FilterOptions {
    return {
      enableHTML: false,
    };
  }

  /**
   * setOptions
   * @param  options enableHTML?: boolean
   * @return
   */
  setOptions(options: FilterOptions) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  /**
   * setFilter
   * @param  filter a string for filtering.
   * @return
   */
  setFilter(str: string): this {
    this.filter = str;
    return this;
  }

  /**
   * get hit property.
   * @return
   */
  getHit(): number {
    return this.hit;
  }

  /**
   * Executes filtering.
   * @return
   */
  execute(): this {
    if (this.elmsIsTable()) {
      this.filteringTable();
    } else {
      this.filteringNodes(this.elms);
    }
    return this;
  }

  private filteringTable(): void {
    const table = this.elms[0] as HTMLElement;
    const tableRows = getElements('tbody tr', table);
    this.filteringNodes(tableRows);
  }

  private filteringNodes(nodes: NodeList): void {
    this.hit = 0;
    const str = this.filter.toUpperCase();
    const elms = nodeListToArray(nodes) as HTMLElement[];

    for (const elm of elms) {
      const content = this.options.enableHTML
        ? elm.innerHTML
        : elm.textContent;
      if (content.toUpperCase().indexOf(str) === -1) {
        hide(elm);
      } else {
        show(elm);
        this.hit++;
      }
    }
  }

  private elmsIsTable(): boolean {
    const elm = this.elms[0] as HTMLElement;
    return this.elms.length === 1 && elm.tagName === 'TABLE';
  }
}
