import * as baseMethods from '../methods/base';
import * as utilMethods from '../methods/util';

type ElementTarget = baseMethods.ElementTarget;

export interface FilterOptions {
  /** Enable to use `innerHTML`. Default is false, and than use `textContent`. */
  enableHTML?: boolean;
}

export default class ElementFilter {
  elms: NodeList;
  filter: string;
  hit: number = 0;
  options: FilterOptions;

  /**
   * constructor
   * @param selector target elements.
   * @param filter   a string for filtering.
   * @param options  enableHTML?: boolean
   */
  constructor(selector: ElementTarget, filter: string = '', options: FilterOptions = {}) {
    this.elms = baseMethods.getElements(selector);
    this.filter = filter;
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
  setFilter(filter: string): this {
    this.filter = filter;
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
    const tableRows = baseMethods.getElements('tbody tr', table);
    this.filteringNodes(tableRows);
  }

  private filteringNodes(nodes: NodeList): void {
    this.hit = 0;
    const filter = this.filter.toUpperCase();

    for (const node of nodes) {
      const elm = node as HTMLElement;
      const content = this.options.enableHTML
        ? elm.innerHTML
        : elm.textContent;
      if (content.toUpperCase().indexOf(filter) === -1) {
        utilMethods.hide(elm);
      } else {
        utilMethods.show(elm);
        this.hit++;
      }
    }
  }

  private elmsIsTable(): boolean {
    const elm = this.elms[0] as HTMLElement;
    return this.elms.length === 1 && elm.tagName === 'TABLE';
  }
}
