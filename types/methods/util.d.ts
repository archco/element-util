import { ElementTarget } from './base';

export as namespace ElementUtil;

export function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  useCapture?: boolean,
): number|null;

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
