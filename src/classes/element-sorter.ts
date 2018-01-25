import * as baseMethods from '../methods/base';
import { nodeListToArray } from '../methods/base';

type ElementTarget = baseMethods.ElementTarget;
type ItemsSettable = string|NodeList|HTMLElement[];

interface DatasetNames {
  sortDirection: string;
  sortType: string;
  sortValue: string;
}

interface SorterOptions {
  items?: ItemsSettable;
  datasetName?: DatasetNames;
}

export default class ElementSorter {
  elm: HTMLElement;
  items: HTMLElement[];
  options: SorterOptions;

  constructor(elm: ElementTarget, options: SorterOptions = {}) {
    this.options = this.getDefaultOptions();
    this.setOptions(options);
    this.setElement(elm);
    this.setItems(this.options.items);
  }

  getDefaultOptions() {
    return {
      items: 'auto', // Items selector: 'auto' | selector | NodeList | Array
      datasetName: {
        sortDirection: 'sortDirection', // data-sort-direction: 'asc' | 'desc'
        sortType: 'sortType', // data-sort-type: 'string' | 'number' | 'date'
        sortValue: 'sortValue', // data-sort-value
      },
    };
  }

  setOptions(options: SorterOptions): this {
    this.options = {
      ...this.options,
      ...options,
    };
    return this;
  }

  setElement(elm: ElementTarget): this {
    this.elm = baseMethods.getElement(elm) as HTMLElement;
    return this;
  }

  getItems(): HTMLElement[] {
    return this.items;
  }

  setItems(items: ItemsSettable): this {
    if (this.elmIsTable()) {
      const nodeList = baseMethods.getElements('tbody tr', this.elm);
      this.items = baseMethods.nodeListToArray(nodeList) as HTMLElement[];
    } else if (items === 'auto') {
      this.items = baseMethods.nodeListToArray(this.elm.childNodes)
        .filter(node => node.tagName) as HTMLElement[];
    } else {
      const nodeList = baseMethods.getElements(items as ElementTarget, this.elm);
      this.items = baseMethods.nodeListToArray(nodeList) as HTMLElement[];
    }
    return this;
  }

  execute(): this {
    this.elmIsTable() ? this.sortTable() : this.sortElements();
    return this;
  }

  private elmIsTable() {
    return this.elm.tagName === 'TABLE';
  }

  private sortElements() {
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

  private sortTable() {
    const heads = baseMethods.getElements('thead th', this.elm);

    for (const [i, head] of heads.entries()) {
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
    }
  }

  private sorting(items: HTMLElement[], compareMethod: (a: any, b: any) => number) {
    items.sort(compareMethod);
    items.forEach(item => {
      const parent = item.parentNode;
      parent.removeChild(item);
      parent.appendChild(item);
    });
  }

  private sortingTable(rows: HTMLElement[], nth: number, type: string, direction: string) {
    const compareMethod = (a: HTMLElement, b: HTMLElement): number => {
      a = baseMethods.getElement(`td:nth-child(${nth})`, a) as HTMLElement;
      b = baseMethods.getElement(`td:nth-child(${nth})`, b) as HTMLElement;
      const aVal = this.getSortValue(a);
      const bVal = this.getSortValue(b);
      type = type || this.getSortType(a);
      const asc = direction === 'asc';
      return this.compare(aVal, bVal, type, asc);
    };
    this.sorting(rows, compareMethod.bind(this));
  }

  private getSortValue(elm: HTMLElement): string {
    let sortValue: any = elm.dataset[this.options.datasetName.sortValue];
    if (!sortValue) {
      sortValue = elm.textContent;
    }
    return sortValue.toUpperCase();
  }

  private getSortType(elm: HTMLElement): string|null {
    return elm.dataset[this.options.datasetName.sortType] || null;
  }

  private getSortDirection(elm: HTMLElement): string {
    return elm.dataset[this.options.datasetName.sortDirection];
  }

  private toggleSortDirection(elm: HTMLElement): void {
    elm.dataset[this.options.datasetName.sortDirection]
      = this.getSortDirection(elm) === 'asc' ? 'desc' : 'asc';
  }

  private compare(a: string, b: string, type: string, asc: boolean = true): number {
    const compareNumber = (aVal: string, bVal: string): number => {
      const aNum = parseFloat(aVal);
      const bNum = parseFloat(b);
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
