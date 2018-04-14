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
 * Filtering elements. (It's helper method of the ElementFilter.)
 *
 * @export
 * @param {ElementTarget} selector target elements.
 * @param {string} [str=''] filter string.
 * @param {boolean} [enableHTML=false] using .innerHTML, default is false.
 * @returns {number} The number of hit.
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
   * Creates an instance of ElementFilter.
   * @param {ElementTarget} selector target elements.
   * @param {string} [str=''] a string for filtering.
   * @param {FilterOptions} [options={}]
   * @memberof ElementFilter
   */
  constructor(selector: ElementTarget, str: string = '', options: FilterOptions = {}) {
    this.elms = getElements(selector);
    this.filter = str;
    this.options = this.getDefaultOptions();
    this.setOptions(options);
  }

  /**
   * Get default options.
   *
   * @returns {FilterOptions}
   * @memberof ElementFilter
   */
  getDefaultOptions(): FilterOptions {
    return {
      enableHTML: false,
    };
  }

  /**
   * Set options.
   *
   * @param {FilterOptions} options
   * @memberof ElementFilter
   */
  setOptions(options: FilterOptions) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  /**
   * Set filter string.
   *
   * @param {string} str string for filtering.
   * @returns {this}
   * @memberof ElementFilter
   */
  setFilter(str: string): this {
    this.filter = str;
    return this;
  }

  /**
   * Get hit.
   *
   * @returns {number} The number of hit.
   * @memberof ElementFilter
   */
  getHit(): number {
    return this.hit;
  }

  /**
   * Execute filtering.
   *
   * @returns {this}
   * @memberof ElementFilter
   */
  execute(): this {
    if (this.elmsIsTable()) {
      this.filteringTable();
    } else {
      this.filteringNodes(this.elms);
    }
    return this;
  }

  protected filteringTable(): void {
    const table = this.elms[0] as HTMLElement;
    const tableRows = getElements('tbody tr', table);
    this.filteringNodes(tableRows);
  }

  protected filteringNodes(nodes: NodeList): void {
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

  protected elmsIsTable(): boolean {
    const elm = this.elms[0] as HTMLElement;
    return this.elms.length === 1 && elm.tagName === 'TABLE';
  }
}
