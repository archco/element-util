import { ElementTarget } from '../methods/base';

declare interface FilterOptions {
  /** Enable to use `innerHTML`. Default is false, and than use `textContent`. */
  enableHTML?: boolean;
}

export default class ElementFilter {
  elms: NodeList;
  filter: string;
  hit: number;
  options: FilterOptions;

  /**
   * constructor
   * @param selector target elements.
   * @param filter   a string for filtering.
   * @param options  enableHTML?: boolean
   */
  constructor(selector: ElementTarget, filter?: string, options?: FilterOptions);

  /**
   * getDefaultOptions
   * @return filter options object.
   */
  getDefaultOptions(): FilterOptions;

  /**
   * setOptions
   * @param  options enableHTML?: boolean
   * @return
   */
  setOptions(options: FilterOptions): this;

  /**
   * setFilter
   * @param  filter a string for filtering.
   * @return
   */
  setFilter(filter: string): this;

  /**
   * get hit property.
   * @return
   */
  getHit(): number;

  /**
   * Executes filtering.
   * @return
   */
  execute(): this;
}
