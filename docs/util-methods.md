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

  ``` js
  let effected = ElementUtil.addListener(selector, type, listener, useCapture = false);
  ```

- Param [`ElementTarget`] selector
- Param `string` type - event type.
- Param `Function` listener
- Param `boolean` [ useCapture = false ]
- Returns `number` - length of elements.

## addOuterListener

Add listener for the event that occurs outer of the target element.

- Syntax

  ``` js
  ElementUtil.addOuterListener(base, target, type, listener);
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

  ``` js
  ElementUtil.wrap(selector, className, tagName = 'DIV');
  ```

- Param [`ElementTarget`] selector
- Param `string` className - wrapper's class name.
- Param `string` [ tagName = 'DIV' ] - wrapper's tag name.
- Returns `void`

## wrapAll

Wrap all elements to inside a one wrapper.

- Syntax

  ``` js
  ElementUtil.wrapAll(selector, className, tagName = 'DIV');
  ```

- Param [`ElementTarget`] selector
- Param `string` className - wrapper's class name.
- Param `string` [ tagName = 'DIV' ] - wrapper's tag name.
- Returns `void`

## submitConfirm

Add confirm on the 'submit' event.

- Syntax

  ``` js
  ElementUtil.submitConfirm(selector, message = 'Are you confirm?');
  ```

- Param [`ElementTarget`] selector
- Param `string` [ message = 'Are you confirm?' ]
- Returns `void`

## addClass

Add classes to element.

- Syntax

  ``` js
  ElementUtil.addClass(selector, className);
  ```

- Param  [`ElementTarget`] selector
- Param  `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Returns `void`

## removeClass

Remove classes from element.

- Syntax

  ``` js
  ElementUtil.removeClass(selector, className);
  ```

- Param [`ElementTarget`] selector
- Param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Returns `void`

## toggleClass

Toggling classes to element.

- Syntax

  ``` js
  ElementUtil.toggleClass(selector, className);
  ```

- Param [`ElementTarget`] selector
- Param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Returns `void`

## hide

Hide element. It will set value of `style.display` to `none`.

- Syntax

  ``` js
  ElementUtil.hide(selector);
  ```

- Param [`ElementTarget`] selector
- Returns `void`

## show

Show element. It will just remove `display: none;`.

- Syntax

  ``` js
  ElementUtil.show(selector);
  ```

- Param [`ElementTarget`] selector
- Returns `void`

## toggleShow

Toggling show/hide element.

- Syntax

  ``` js
  ElementUtil.toggleShow(selector);
  ```

- Param [`ElementTarget`] selector
- Returns `void`

## makeHiddenInput

Make a hidden input.

- Syntax

  ``` js
  let input = ElementUtil.makeHiddenInput(name, value);
  ```

- Param  `string` name - input name.
- Param  `string` value - input value.
- Returns `Element`

## appendHiddenInput

Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.

- Syntax

  ``` js
  ElementUtil.appendHiddenInput(target, name, value);
  ```

- Param  [`ElementTarget`] target - target element.
- Param  `string` name - input name.
- Param  `string` value - input value.
- Returns `void`

[`ElementTarget`]: #elementtarget
