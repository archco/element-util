export as namespace ElementUtil;

export type ElementTarget = string|Element|NodeList;

declare function resolveBase(base: Document|ElementTarget): Document|Element;
declare function polyfillForMatches(): void;

export function getElement(selector: ElementTarget, base?: Document|ElementTarget): Element;

export function getElements(selector: ElementTarget, base?: Document|ElementTarget): NodeList;

export function removeElements(selector: ElementTarget, base?: Document|ElementTarget): number;

export function toNodeList(elm: Element|string): NodeList;

export function nodeListToArray(list: NodeList|any[]|string): any[];

export function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null;
