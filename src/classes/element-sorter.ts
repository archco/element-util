import {
  ElementTarget,
  getElement,
  getElementsAsArray,
  nodeListToArray,
} from '../methods/base';

/** Types that can be as target items. */
export type ItemsSettable = string|NodeList|HTMLElement[];

export interface DatasetNames {
  /** Default value is `sortDirection`. It means `data-sort-direction` attribute in html. */
  sortDirection?: string;
  /** Default value is `sortType`. It means `data-sort-type` attribute in html. */
  sortType?: string;
  /** Default value is `sortValue`. It means `data-sort-value` attribute in html. */
  sortValue?: string;
}

export interface SorterOptions {
  /** Target elements for sorting. */
  items?: ItemsSettable;
  /** Specifying dataset names. type, value and direction. */
  datasetName?: DatasetNames;
}

/**
 * Sorting elements. (It's helper method of the ElementSorter.)
 *
 * @param {ElementTarget} elm base element.
 * @param {SorterOptions} [options={}] options for ElementSorter. default: `{}`
 * @returns {HTMLElement[]} sorted elements.
 */
export function sort(elm: ElementTarget, options: SorterOptions = {}): HTMLElement[] {
  const s = new ElementSorter(elm, options);
  return s.execute().getItems();
}

export class ElementSorter {
  elm: HTMLElement;
  items: HTMLElement[];
  options: SorterOptions;

  /**
   * Creates an instance of ElementSorter.
   * @param {ElementTarget} elm Base element. e.g. `<ul>`, `<ol>` or `<table>`..
   * @param {SorterOptions} [options={}] items: 'auto'|selector|NodeList, datasetName: object
   * @memberof ElementSorter
   */
  constructor(elm: ElementTarget, options: SorterOptions = {}) {
    this.options = this.getDefaultOptions();
    this.setOptions(options);
    this.setElement(elm);
    this.setItems(this.options.items);
  }

  /**
   * Get default options.
   *
   * @returns {SorterOptions}
   * @memberof ElementSorter
   */
  getDefaultOptions(): SorterOptions {
    return {
      items: 'auto', // Items selector: 'auto' | selector | NodeList | Array
      datasetName: {
        sortDirection: 'sortDirection', // data-sort-direction: 'asc' | 'desc'
        sortType: 'sortType', // data-sort-type: 'string' | 'number' | 'date'
        sortValue: 'sortValue', // data-sort-value
      },
    };
  }

  /**
   * Set options.
   *
   * @param {SorterOptions} options items: 'auto'|selector|NodeList, datasetName: object
   * @returns {this}
   * @memberof ElementSorter
   */
  setOptions(options: SorterOptions): this {
    this.options = {
      ...this.options,
      ...options,
    };
    return this;
  }

  /**
   * Set base element.
   *
   * @param {ElementTarget} elm
   * @returns {this}
   * @memberof ElementSorter
   */
  setElement(elm: ElementTarget): this {
    this.elm = getElement(elm) as HTMLElement;
    return this;
  }

  /**
   * Get items.
   *
   * @returns {HTMLElement[]}
   * @memberof ElementSorter
   */
  getItems(): HTMLElement[] {
    return this.items;
  }

  /**
   * Set target items for to be sorted.
   *
   * @param {ItemsSettable} items
   * @returns {this}
   * @memberof ElementSorter
   */
  setItems(items: ItemsSettable): this {
    if (this.elmIsTable()) {
      this.items = getElementsAsArray('tbody tr', this.elm);
    } else if (items === 'auto') {
      this.items = nodeListToArray(this.elm.childNodes)
        .filter(node => node.tagName) as HTMLElement[];
    } else {
      this.items = getElementsAsArray(items as ElementTarget, this.elm);
    }
    return this;
  }

  /**
   * Execute sort.
   *
   * @returns {this}
   * @memberof ElementSorter
   */
  execute(): this {
    this.elmIsTable() ? this.sortTable() : this.sortElements();
    return this;
  }

  protected elmIsTable() {
    return this.elm.tagName === 'TABLE';
  }

  protected sortElements() {
    const compareMethod = (a: any, b: any): number => {
      const aVal = this.getSortValue(a);
      const bVal = this.getSortValue(b);
      const type = this.getSortType(this.elm) || this.getSortType(a);
      const asc = this.getSortDirection(this.elm) !== 'desc';
      return this.compare(aVal, bVal, type, asc);
    };
    this.toggleSortDirection(this.elm);
    this.sorting(this.items, compareMethod.bind(this));
  }

  protected sortTable() {
    const heads = getElementsAsArray('thead th', this.elm);
    heads.forEach((head, i) => {
      head.style.cursor = 'pointer'; // Set cursor style to `pointer`.
      head.addEventListener('click', event => {
        event.preventDefault();
        const th = event.currentTarget as HTMLElement;
        this.toggleSortDirection(th);
        this.sortingTable(
          this.items,
          i + 1,
          this.getSortType(th),
          this.getSortDirection(th),
        );
      });
    });
  }

  protected sorting(items: HTMLElement[], compareMethod: (a: any, b: any) => number) {
    items.sort(compareMethod);
    items.forEach(item => {
      const parent = item.parentNode;
      parent.removeChild(item);
      parent.appendChild(item);
    });
  }

  protected sortingTable(rows: HTMLElement[], nth: number, type: string, direction: string) {
    const compareMethod = (a: HTMLElement, b: HTMLElement): number => {
      a = getElement(`td:nth-child(${nth})`, a) as HTMLElement;
      b = getElement(`td:nth-child(${nth})`, b) as HTMLElement;
      const aVal = this.getSortValue(a);
      const bVal = this.getSortValue(b);
      type = type || this.getSortType(a);
      const asc = direction === 'asc';
      return this.compare(aVal, bVal, type, asc);
    };
    this.sorting(rows, compareMethod.bind(this));
  }

  protected getSortValue(elm: HTMLElement): string {
    let sortValue: any = elm.dataset[this.options.datasetName.sortValue];
    if (!sortValue) {
      sortValue = elm.textContent;
    }
    return sortValue.toUpperCase();
  }

  protected getSortType(elm: HTMLElement): string|null {
    return elm.dataset[this.options.datasetName.sortType] || null;
  }

  protected getSortDirection(elm: HTMLElement): string {
    return elm.dataset[this.options.datasetName.sortDirection];
  }

  protected toggleSortDirection(elm: HTMLElement): void {
    elm.dataset[this.options.datasetName.sortDirection]
      = this.getSortDirection(elm) === 'asc' ? 'desc' : 'asc';
  }

  protected compare(a: string, b: string, type: string, asc: boolean = true): number {
    const compareNumber = (aVal: string, bVal: string): number => {
      const aNum = parseFloat(aVal);
      const bNum = parseFloat(bVal);
      return asc ? aNum - bNum : bNum - aNum;
    };
    const compareDate = (aVal: string, bVal: string): number => {
      const aDate = new Date(aVal);
      const bDate = new Date(bVal);
      return asc
        ? aDate.getTime() - bDate.getTime()
        : bDate.getTime() - aDate.getTime();
    };

    if (type === 'number') {
      return compareNumber(a, b);
    } else if (type === 'date') {
      return compareDate(a, b);
    } else {
      // default: compare as string.
      return asc ? a.localeCompare(b) : b.localeCompare(a);
    }
  }
}
