import ElementFilter from './classes/element-filter';
import ElementSorter from './classes/element-sorter';
import { ElementTarget } from './methods/base';

export as namespace ElementUtil;

export {
  ElementFilter,
  ElementSorter,
};

export default ElementUtil;

declare namespace ElementUtil {
  export function getElement(selector: ElementTarget, base?: Document|ElementTarget): Element;

  export function getElements(selector: ElementTarget, base?: Document|ElementTarget): NodeList;

  export function removeElements(selector: ElementTarget, base?: Document|ElementTarget): number;

  export function toNodeList(elm: Element|string): NodeList;

  export function nodeListToArray(list: NodeList|any[]|string): any[];

  export function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null;

  export function addListener(selector: ElementTarget, type: string, listener: EventListener, useCapture?: boolean): number|null;

  export function wrap(selector: ElementTarget, className: string, tagName?: string): void;

  export function wrapAll(selector: ElementTarget, className: string, tagName?: string): void;

  export function submitConfirm(selector: ElementTarget, message?: string): void;

  export function addClass(selector: ElementTarget, className: string): void;

  export function removeClass(selector: ElementTarget, className: string): void;

  export function toggleClass(selector: ElementTarget, className: string): void;

  export function hide(selector: ElementTarget): void;

  export function show(selector: ElementTarget): void;

  export function toggleShow(selector: ElementTarget): void;

  export function makeHiddenInput(name: string, value: string): HTMLInputElement;

  export function appendHiddenInput(target: ElementTarget, name: string, value: string): void;

  export function filter(selector: ElementTarget, filter?: string, enableHTML?: boolean): number;

  export function sort(elm: ElementTarget, options?: object): HTMLElement[];
}

