# Util Methods

## Types

### ElementTarget

``` ts
/** The target that can converted to Element. */
type ElementTarget = string|Element|NodeList;
```

## addListener

Add event listener for each element.

Syntax

``` ts
function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  options?: boolean|AddEventListenerOptions,
): void;
```

- @param [`ElementTarget`] selector
- @param `string` type - event type.
- @param `Function` listener
- @param `boolean`|`AddEventListenerOptions` options - default: `false`
- @returns `void`

## addOuterListener

Add listener for the event that occurs outer of the target element.

Syntax

``` ts
function addOuterListener(
  base: Window|ElementTarget,
  target: ElementTarget,
  type: string,
  listener: EventListener,
  options?: boolean|AddEventListenerOptions,
): void;
```

- @param `Window`|[`ElementTarget`] base - the event target.
- @param [`ElementTarget`] target - the target element that will be ignored an event.
- @param `string` type - event type.
- @param `EventListener` listener - listener function.
- @param `boolean`|`AddEventListenerOptions` options - default: `false`
- @returns `void`

### Example

``` js
// basic usage.
addOuterListener(window, '#target', 'click', () => {
  console.log('You have clicked the outer of the target.');
});

// specify base.
addOuterListener('#app', '.not-me', 'mouseover', onOuterOverHandler);
```

## wrap

Wrap for each element.

Syntax

``` ts
function wrap(selector: ElementTarget, className: string, tagName?: string): void;
```

- @param [`ElementTarget`] selector
- @param `string` className - wrapper's class name.
- @param `string` tagName - wrapper's tag name. default: `'DIV'`
- @returns `void`

## wrapAll

Wrap all elements to inside a one wrapper.

Syntax

``` ts
function wrapAll(selector: ElementTarget, className: string, tagName?: string): void;
```

- @param [`ElementTarget`] selector
- @param `string` className - wrapper's class name.
- @param `string` tagName - wrapper's tag name. default: `'DIV'`
- @returns `void`

## submitConfirm

Add confirm on the 'submit' event.

Syntax

``` ts
function submitConfirm(selector: ElementTarget, message?: string): void;
```

- @param [`ElementTarget`] selector
- @param `string` message - confirm message. default: `'Are you confirm?'`
- @returns `void`

## addClass

Add classes to element.

Syntax

``` ts
function addClass(selector: ElementTarget, className: string): void;
```

- @param  [`ElementTarget`] selector
- @param  `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- @returns `void`

## removeClass

Remove classes from element.

Syntax

``` ts
function removeClass(selector: ElementTarget, className: string): void;
```

- @param [`ElementTarget`] selector
- @param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- @returns `void`

## toggleClass

Toggling classes to element.

Syntax

``` ts
function toggleClass(selector: ElementTarget, className: string): void;
```

- @param [`ElementTarget`] selector
- @param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- @returns `void`

## hide

Hide element. It will set value of `style.display` to `none`.

Syntax

``` ts
function hide(selector: ElementTarget): void;
```

- @param [`ElementTarget`] selector
- @returns `void`

## show

Show element. It will just remove `display: none;`.

Syntax

``` ts
function show(selector: ElementTarget): void;
```

- @param [`ElementTarget`] selector
- @returns `void`

## toggleShow

Toggling show/hide element.

Syntax

``` ts
function toggleShow(selector: ElementTarget): void;
```

- @param [`ElementTarget`] selector
- @returns `void`

## makeHiddenInput

Make a hidden input.

Syntax

``` ts
function makeHiddenInput(name: string, value: string): HTMLInputElement;
```

- @param  `string` name - input name.
- @param  `string` value - input value.
- @returns `Element`

## appendHiddenInput

Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.

Syntax

``` ts
function appendHiddenInput(target: ElementTarget, name: string, value: string): void;
```

- @param  [`ElementTarget`] target - target element.
- @param  `string` name - input name.
- @param  `string` value - input value.
- @returns `void`

[`ElementTarget`]: #ElementTarget
