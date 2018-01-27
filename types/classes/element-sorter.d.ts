import { ElementTarget } from '../methods/base';

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

export default class ElementSorter {
  elm: HTMLElement;
  items: HTMLElement[];
  options: SorterOptions;

  /**
   * constructor
   * @param elm     Base element. e.g. `<ul>`, `<ol>` or `<table>`..
   * @param options items: 'auto'|selector|NodeList, datasetName: object
   */
  constructor(elm: ElementTarget, options: SorterOptions);

  /**
   * getDefaultOptions
   * @return
   */
  getDefaultOptions(): SorterOptions;

  /**
   * setOptions
   * @param  options items: 'auto'|selector|NodeList, datasetName: object
   * @return
   */
  setOptions(options: SorterOptions): this;

  /**
   * set base element.
   * @param  elm
   * @return
   */
  setElement(elm: ElementTarget): this;

  /**
   * getItems
   * @return
   */
  getItems(): HTMLElement[];

  /**
   * set items that target for sort.
   * @param  items
   * @return
   */
  setItems(items: ItemsSettable): this;

  /**
   * Execute sort.
   * @return
   */
  execute(): this;
}
