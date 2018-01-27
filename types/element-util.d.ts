import ElementFilter from './classes/element-filter.d';
import ElementSorter, { SorterOptions } from './classes/element-sorter.d';
import { ElementTarget } from './methods/base.d';

export as namespace ElementUtil;

export {
  ElementFilter,
  ElementSorter,
};

export default ElementUtil;

/*
  FIXME: Solve re-exporting namespace declaration problem later.
  @see https://github.com/Microsoft/TypeScript/issues/4336
 */
declare namespace ElementUtil {

  //
  // Base methods.
  //

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
   * @param className class name.
   */
  export function addClass(selector: ElementTarget, className: string): void;

  /**
   * Remove class from element.
   * @param selector  querySelector
   * @param className class name.
   */
  export function removeClass(selector: ElementTarget, className: string): void;

  /**
   * Toggling class to element.
   * @param selector  querySelector
   * @param className class name.
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
  // Helper methods.
  //

  /**
   * Filtering elements.
   * @param  selector   querySelector
   * @param  filter     filter string.
   * @param  enableHTML using .innerHTML, default is false.
   * @return            Hit number.
   */
  export function filter(selector: ElementTarget, filter?: string, enableHTML?: boolean): number;

  /**
   * Sorting elements.
   * @param  elm     base element.
   * @param  options options for ElementSorter.
   * @return         sorted elements.
   */
  export function sort(elm: ElementTarget, options?: SorterOptions): HTMLElement[];
}
