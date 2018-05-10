import {
  ElementTarget,
  getElements,
  getElementsAsArray,
} from '../methods/base';
import {
  addClass,
  hide,
  removeClass,
  show,
} from '../methods/util';

export type FilterActionFunction = (elm: HTMLElement, isFiltered: boolean) => void;

export interface FilterOptions {
  /** Enable to use `innerHTML`. Default is false, and than use `textContent`. */
  enableHTML?: boolean;
  /** action for each filtered element. 'hideOthers' or 'addClass: foo'. */
  action?: string | FilterActionFunction;
}

export interface FilterResult {
  /** Filtering targets. */
  elms: HTMLElement[];
  /** Filtered elements. */
  filtered: HTMLElement[];
}

/**
 * Filtering elements. (It's helper method of the ElementFilter.)
 *
 * @export
 * @param {ElementTarget} selector target elements.
 * @param {string} [str=''] filter string.
 * @param {FilterOptions} [options={}] options.
 * @returns {FilterResult} {elms, filtered}
 */
export function filter(selector: ElementTarget, str: string = '', options: FilterOptions = {}): FilterResult {
  return new ElementFilter(selector, str, options).execute();
}

export class ElementFilter {
  elms: HTMLElement[];
  filtered: HTMLElement[] = [];
  filter: string;
  options: FilterOptions;

  /**
   * Creates an instance of ElementFilter.
   * @param {ElementTarget} selector target elements.
   * @param {string} [str=''] filter string.
   * @param {FilterOptions} [options={}]
   * @memberof ElementFilter
   */
  constructor(selector: ElementTarget, str: string = '', options: FilterOptions = {}) {
    this.elms = getElementsAsArray(selector);
    this.setFilter(str);
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
   * @returns {this}
   * @memberof ElementFilter
   */
  setOptions(options: FilterOptions): this {
    this.options = {
      ...this.options,
      ...options,
    };
    return this;
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
   * Execute filtering.
   *
   * @returns {FilterResult}
   * @memberof ElementFilter
   */
  execute(): FilterResult {
    if (this.elmsIsTable()) {
      this.filteringTable();
    } else {
      this.filteringNodes(this.elms);
    }
    return {
      elms: this.elms,
      filtered: this.filtered,
    };
  }

  protected filteringTable(): void {
    const tableRows = getElementsAsArray('tbody tr', this.elms[0]);
    this.filteringNodes(tableRows);
  }

  protected filteringNodes(elms: HTMLElement[]): void {
    const str = this.filter.toUpperCase();

    for (const elm of elms) {
      const content = this.options.enableHTML
        ? elm.innerHTML
        : elm.textContent;
      if (content.toUpperCase().indexOf(str) === -1) {
        this.actionToElm(elm, false);
      } else {
        this.actionToElm(elm, true);
        this.filtered.push(elm);
      }
    }
  }

  protected actionToElm(elm: HTMLElement, isFiltered: boolean): void {
    const action = this.options.action;
    if (action === 'hideOthers') {
      isFiltered ? show(elm) : hide(elm);
    } else if (typeof action === 'string' && /^(addClass:)/.test(action)) {
      const [, className] = action.split(':').map(x => x.trim());
      isFiltered ? addClass(elm, className) : removeClass(elm, className);
    } else if (typeof action === 'function') {
      action(elm, isFiltered);
    }
  }

  protected elmsIsTable(): boolean {
    return this.elms.length === 1
      && this.elms[0].tagName === 'TABLE';
  }
}
