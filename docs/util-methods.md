# Util Methods

## Types

### ElementTarget

``` ts
/** The target that can converted to Element. */
type ElementTarget = string|Element|NodeList;
```

## addListener

Add event listener for each item.

- Syntax

  ``` ts
  function addListener(
    selector: ElementTarget,
    type: string,
    listener: EventListener,
    useCapture?: boolean,
  ): number;
  ```

- Param [`ElementTarget`] selector
- Param `string` type - event type.
- Param `Function` listener
- Param `boolean` [ useCapture = false ]
- Returns `number` - length of elements.

## addOuterListener

Add listener for the event that occurs outer of the target element.

- Syntax

  ``` ts
  function addOuterListener(
    base: Window|ElementTarget,
    target: ElementTarget,
    type: string,
    listener: EventListener,
  ): void;
  ```

- Param `Window`|[`ElementTarget`] base - the event target.
- Param [`ElementTarget`] target - the target element that will be ignored an event.
- Param `string` type - event type.
- Param `EventListener` listener - listener function.
- Returns `void`

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

- Syntax

  ``` ts
  function wrap(selector: ElementTarget, className: string, tagName?: string): void;
  ```

- Param [`ElementTarget`] selector
- Param `string` className - wrapper's class name.
- Param `string` [ tagName = 'DIV' ] - wrapper's tag name.
- Returns `void`

## wrapAll

Wrap all elements to inside a one wrapper.

- Syntax

  ``` ts
  function wrapAll(selector: ElementTarget, className: string, tagName?: string): void;
  ```

- Param [`ElementTarget`] selector
- Param `string` className - wrapper's class name.
- Param `string` [ tagName = 'DIV' ] - wrapper's tag name.
- Returns `void`

## submitConfirm

Add confirm on the 'submit' event.

- Syntax

  ``` ts
  function submitConfirm(selector: ElementTarget, message?: string): void;
  ```

- Param [`ElementTarget`] selector
- Param `string` [ message = 'Are you confirm?' ]
- Returns `void`

## addClass

Add classes to element.

- Syntax

  ``` ts
  function addClass(selector: ElementTarget, className: string): void;
  ```

- Param  [`ElementTarget`] selector
- Param  `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Returns `void`

## removeClass

Remove classes from element.

- Syntax

  ``` ts
  function removeClass(selector: ElementTarget, className: string): void;
  ```

- Param [`ElementTarget`] selector
- Param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Returns `void`

## toggleClass

Toggling classes to element.

- Syntax

  ``` ts
  function toggleClass(selector: ElementTarget, className: string): void;
  ```

- Param [`ElementTarget`] selector
- Param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Returns `void`

## hide

Hide element. It will set value of `style.display` to `none`.

- Syntax

  ``` ts
  function hide(selector: ElementTarget): void;
  ```

- Param [`ElementTarget`] selector
- Returns `void`

## show

Show element. It will just remove `display: none;`.

- Syntax

  ``` ts
  function show(selector: ElementTarget): void;
  ```

- Param [`ElementTarget`] selector
- Returns `void`

## toggleShow

Toggling show/hide element.

- Syntax

  ``` ts
  function toggleShow(selector: ElementTarget): void;
  ```

- Param [`ElementTarget`] selector
- Returns `void`

## makeHiddenInput

Make a hidden input.

- Syntax

  ``` ts
  function makeHiddenInput(name: string, value: string): HTMLInputElement;
  ```

- Param  `string` name - input name.
- Param  `string` value - input value.
- Returns `Element`

## appendHiddenInput

Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.

- Syntax

  ``` ts
  function appendHiddenInput(target: ElementTarget, name: string, value: string): void;
  ```

- Param  [`ElementTarget`] target - target element.
- Param  `string` name - input name.
- Param  `string` value - input value.
- Returns `void`

[`ElementTarget`]: #elementtarget
