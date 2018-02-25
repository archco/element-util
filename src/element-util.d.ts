export as namespace ElementUtil;

//
// Base methods.
//

declare type ElementTarget = string|Element|NodeList;

/**
 * Get element.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
 */
export function getElement(selector: ElementTarget, base?: Document|ElementTarget): Element;

/**
 * Get elements as NodeList.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
 */
export function getElements(selector: ElementTarget, base?: Document|ElementTarget): NodeList;

/**
 * Remove elements.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return          number of removed.
 */
export function removeElements(selector: ElementTarget, base?: Document|ElementTarget): number;

/**
 * Convert a single element to NodeList.
 * @param  elm
 * @return
 */
export function toNodeList(elm: Element|string): NodeList;

/**
 * Convert NodeList to Array.
 * @param  list
 * @return
 */
export function nodeListToArray(list: NodeList|any[]|string): any[];

/**
 * Find ancestor element.
 * @param  self
 * @param  ancestor
 * @return          Element or null.
 */
export function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null;

//
// Util methods.
//

/**
 * Add event listener on every selected elements.
 * @param  selector   querySelector
 * @param  type       event-type
 * @param  listener   listener
 * @param  useCapture default is false
 * @return            number of affected
 */
export function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  useCapture?: boolean,
): number;

/**
 * Wrapping each element.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
export function wrap(selector: ElementTarget, className: string, tagName?: string): void;

/**
 * Wrapping all elements inside a one wrapper.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
export function wrapAll(selector: ElementTarget, className: string, tagName?: string): void;

/**
 * Add confirm message listener when 'submit' event.
 * @param selector querySelector, form element probably.
 * @param message  confirm message.
 */
export function submitConfirm(selector: ElementTarget, message?: string): void;

/**
 * Add class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
export function addClass(selector: ElementTarget, className: string): void;

/**
 * Remove class from element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
export function removeClass(selector: ElementTarget, className: string): void;

/**
 * Toggling class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
export function toggleClass(selector: ElementTarget, className: string): void;

/**
 * Hide element. It will set element's display to 'none'.
 * @param selector querySelector
 */
export function hide(selector: ElementTarget): void;

/**
 * Show element. It will just remove 'display=none;'.
 * @param selector querySelector
 */
export function show(selector: ElementTarget): void;

/**
 * Toggling show/hide element.
 * @param selector querySelector
 */
export function toggleShow(selector: ElementTarget): void;

/**
 * Make a hidden input.
 * @param  name  name attribute.
 * @param  value value attribute.
 * @return
 */
export function makeHiddenInput(name: string, value: string): HTMLInputElement;

/**
 * Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.
 * @param target querySelector
 * @param name   name attribute.
 * @param value  value attribute.
 */
export function appendHiddenInput(target: ElementTarget, name: string, value: string): void;

//
// ElementFilter
//

declare interface FilterOptions {
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
export function filter(selector: ElementTarget, str?: string, enableHTML?: boolean): number;

export class ElementFilter {
  elms: NodeList;
  filter: string;
  hit: number;
  options: FilterOptions;

  /**
   * constructor
   * @param selector target elements.
   * @param str   a string for filtering.
   * @param options  enableHTML?: boolean
   */
  constructor(selector: ElementTarget, str?: string, options?: FilterOptions);

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
   * @param  str a string for filtering.
   * @return
   */
  setFilter(str: string): this;

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

//
// ElementSorter
//

/** Types that can be as target items. */
declare type ItemsSettable = string|NodeList|HTMLElement[];

declare interface DatasetNames {
  /** Default value is `sortDirection`. It means `data-sort-direction` attribute in html. */
  sortDirection?: string;
  /** Default value is `sortType`. It means `data-sort-type` attribute in html. */
  sortType?: string;
  /** Default value is `sortValue`. It means `data-sort-value` attribute in html. */
  sortValue?: string;
}

declare interface SorterOptions {
  /** Target elements for sorting. */
  items?: ItemsSettable;
  /** Specifying dataset names. type, value and direction. */
  datasetName?: DatasetNames;
}

/**
 * Sorting elements. (helper method)
 * @param  elm     base element.
 * @param  options options for ElementSorter.
 * @return         sorted elements.
 */
export function sort(elm: ElementTarget, options?: SorterOptions): HTMLElement[];

export class ElementSorter {
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
