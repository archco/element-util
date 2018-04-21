export as namespace ElementUtil;

//
// Base methods.
//

/** The target that can converted to Element. */
export type ElementTarget = string|Element|NodeList;

/**
 * Get a single element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {Element}
 */
export function getElement(selector: ElementTarget, base?: Document|ElementTarget): Element;

/**
 * Get elements as NodeList.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {NodeList}
 */
export function getElements(selector: ElementTarget, base?: Document|ElementTarget): NodeList;

/**
 * Get elements as array of HTMLElements.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {HTMLElement[]}
 */
export function getElementsAsArray(selector: ElementTarget, base?: Document|ElementTarget): HTMLElement[];

/**
 * Remove elements.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {number} The number of removed.
 */
export function removeElements(selector: ElementTarget, base?: Document|ElementTarget): number;

/**
 * Converts a single element to NodeList.
 *
 * @export
 * @param {(Element|string)} elm
 * @returns {NodeList}
 */
export function toNodeList(elm: Element|string): NodeList;

/**
 * Converts NodeList to Array.
 *
 * @export
 * @param {(NodeList|any[]|string)} list
 * @returns {any[]}
 */
export function nodeListToArray(list: NodeList|any[]|string): any[];

/**
 * Find ancestor element.
 *
 * @export
 * @param {ElementTarget} self
 * @param {ElementTarget} ancestor
 * @returns {(Element|null)}
 */
export function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null;

//
// Util methods.
//

/**
 * Add event listener for each element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} type event type
 * @param {EventListener} listener
 * @param {(boolean|AddEventListenerOptions)} [options=false]
 * @returns {number} the number of affected.
 */
export function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  options?: boolean|AddEventListenerOptions,
): number;

/**
 * Add listener for the event that occurs outer of the target element.
 *
 * @export
 * @param {(Window|ElementTarget)} base the event target.
 * @param {ElementTarget} target the target element that will be ignored an event.
 * @param {string} type event type.
 * @param {EventListener} listener
 * @param {(boolean|AddEventListenerOptions)} [options=false]
 */
export function addOuterListener(
  base: Window|ElementTarget,
  target: ElementTarget,
  type: string,
  listener: EventListener,
  options?: boolean|AddEventListenerOptions,
): void;

/**
 * Wrap for each element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name.
 */
export function wrap(selector: ElementTarget, className: string, tagName?: string): void;

/**
 * Wrap all elements to inside a one wrapper.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name.
 */
export function wrapAll(selector: ElementTarget, className: string, tagName?: string): void;

/**
 * Add confirm on the 'submit' event.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} [message='Are you confirm?'] confirm message.
 */
export function submitConfirm(selector: ElementTarget, message?: string): void;

/**
 * Add classes to element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
export function addClass(selector: ElementTarget, className: string): void;

/**
 * Remove classes from element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
export function removeClass(selector: ElementTarget, className: string): void;

/**
 * Toggling classes to element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
export function toggleClass(selector: ElementTarget, className: string): void;

/**
 * Hide element. It will set value of style.display to 'none'.
 *
 * @export
 * @param {ElementTarget} selector
 */
export function hide(selector: ElementTarget): void;

/**
 * Show element. It will just remove 'display: none;'.
 *
 * @export
 * @param {ElementTarget} selector
 */
export function show(selector: ElementTarget): void;

/**
 * Toggling show/hide element.
 *
 * @export
 * @param {ElementTarget} selector
 */
export function toggleShow(selector: ElementTarget): void;

/**
 * Make a hidden input.
 *
 * @export
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 * @returns {HTMLInputElement}
 */
export function makeHiddenInput(name: string, value: string): HTMLInputElement;

/**
 * Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.
 *
 * @export
 * @param {ElementTarget} target
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 */
export function appendHiddenInput(target: ElementTarget, name: string, value: string): void;

//
// ElementFilter
//

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
export function filter(selector: ElementTarget, str?: string, enableHTML?: boolean): number;

export class ElementFilter {
  elms: NodeList;
  filter: string;
  hit: number;
  options: FilterOptions;

  /**
   * Creates an instance of ElementFilter.
   * @param {ElementTarget} selector target elements.
   * @param {string} [str=''] a string for filtering.
   * @param {FilterOptions} [options={}]
   * @memberof ElementFilter
   */
  constructor(selector: ElementTarget, str?: string, options?: FilterOptions);

  /**
   * Get default options.
   *
   * @returns {FilterOptions}
   * @memberof ElementFilter
   */
  getDefaultOptions(): FilterOptions;

  /**
   * Set options.
   *
   * @param {FilterOptions} options
   * @memberof ElementFilter
   */
  setOptions(options: FilterOptions): this;

  /**
   * Set filter string.
   *
   * @param {string} str string for filtering.
   * @returns {this}
   * @memberof ElementFilter
   */
  setFilter(str: string): this;

  /**
   * Get hit.
   *
   * @returns {number} The number of hit.
   * @memberof ElementFilter
   */
  getHit(): number;

  /**
   * Execute filtering.
   *
   * @returns {this}
   * @memberof ElementFilter
   */
  execute(): this;
}

//
// ElementSorter
//

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
 * @export
 * @param {ElementTarget} elm base element.
 * @param {SorterOptions} [options={}] options for ElementSorter.
 * @returns {HTMLElement[]} sorted elements.
 */
export function sort(elm: ElementTarget, options?: SorterOptions): HTMLElement[];

export class ElementSorter {
  /**
   * Base element.
   *
   * @type {HTMLElement}
   * @memberof ElementSorter
   */
  elm: HTMLElement;

  /**
   * The element items that will be sorted.
   *
   * @type {HTMLElement[]}
   * @memberof ElementSorter
   */
  items: HTMLElement[];

  /**
   * Current options.
   *
   * @type {SorterOptions}
   * @memberof ElementSorter
   */
  options: SorterOptions;

  /**
   * Creates an instance of ElementSorter.
   * @param {ElementTarget} elm Base element. e.g. `<ul>`, `<ol>` or `<table>`..
   * @param {SorterOptions} [options={}] items: 'auto'|selector|NodeList, datasetName: object
   * @memberof ElementSorter
   */
  constructor(elm: ElementTarget, options: SorterOptions);

  /**
   * Get default options.
   *
   * @returns {SorterOptions}
   * @memberof ElementSorter
   */
  getDefaultOptions(): SorterOptions;

  /**
   * Set options.
   *
   * @param {SorterOptions} options items: 'auto'|selector|NodeList, datasetName: object
   * @returns {this}
   * @memberof ElementSorter
   */
  setOptions(options: SorterOptions): this;

  /**
   * Set base element.
   *
   * @param {ElementTarget} elm
   * @returns {this}
   * @memberof ElementSorter
   */
  setElement(elm: ElementTarget): this;

  /**
   * Get items.
   *
   * @returns {HTMLElement[]}
   * @memberof ElementSorter
   */
  getItems(): HTMLElement[];

  /**
   * Set target items for to be sorted.
   *
   * @param {ItemsSettable} items
   * @returns {this}
   * @memberof ElementSorter
   */
  setItems(items: ItemsSettable): this;

  /**
   * Execute sort.
   *
   * @returns {this}
   * @memberof ElementSorter
   */
  execute(): this;
}
