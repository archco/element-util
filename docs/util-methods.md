# Util Methods

## addListener

Add event listener on every selected elements.

- Syntax

  ``` js
  let effected = ElementUtil.addListener(selector, type, listener, useCapture = false);
  ```

- Param `string`|`Element`|`NodeList` selector
- Param `string` type - event type.
- Param `Function` listener
- Param `Boolean` [ useCapture = false ]
- Return `Number` - length of elements.

## wrap

Wrapping each element.

- Syntax

  ``` js
  ElementUtil.wrap(selector, className, tagName = 'DIV');
  ```

- Param `string`|`Element`|`NodeList` selector
- Param `string` className - wrapper's class name.
- Param `string` [ tagName = 'DIV' ] - wrapper's tag name.
- Return `void`

## wrapAll

Wrapping all elements inside a one wrapper.

- Syntax

  ``` js
  ElementUtil.wrapAll(selector, className, tagName = 'DIV');
  ```

- Param `string`|`Element`|`NodeList` selector
- Param `string` className - wrapper's class name.
- Param `string` [ tagName = 'DIV' ] - wrapper's tag name.
- Return `void`

## submitConfirm

Add confirm message listener when `submit` event.

- Syntax

  ``` js
  ElementUtil.submitConfirm(selector, message = 'Are you confirm?');
  ```

- Param `string`|`Element`|`NodeList` selector
- Param `string` [ message = 'Are you confirm?' ]
- Return `void`

## addClass

Add class to an element.

- Syntax

  ``` js
  ElementUtil.addClass(selector, className);
  ```

- Param  `string`|`Element` selector
- Param  `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Return `void`

## removeClass

Remove class from an element.

- Syntax

  ``` js
  ElementUtil.removeClass(selector, className);
  ```

- Param `string`|`Element` selector
- Param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Return `void`

## toggleClass

Toggling class.

- Syntax

  ``` js
  ElementUtil.toggleClass(selector, className);
  ```

- Param `string`|`Element` selector
- Param `string` className - If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
- Return `void`

## hide

Hide an element. use css `display: none;`

- Syntax

  ``` js
  ElementUtil.hide(selector);
  ```

- Param `string`|`Element` selector
- Return `void`

## show

Remove `display: none;`

- Syntax

  ``` js
  ElementUtil.show(selector);
  ```

- Param `string`|`Element` selector
- Return `void`

## toggleShow

Toggling show/hide element.

- Syntax

  ``` js
  ElementUtil.toggleShow(selector);
  ```

- Param `string`|`Element` selector
- Return `void`

## makeHiddenInput

Make a hidden input.

- Syntax

  ``` js
  let input = ElementUtil.makeHiddenInput(name, value);
  ```

- Param  `string` name - input name.
- Param  `string` value - input value.
- Return `Element`

## appendHiddenInput

Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.

- Syntax

  ``` js
  ElementUtil.appendHiddenInput(target, name, value);
  ```

- Param  `Element`|`string` target - target element.
- Param  `string` name - input name.
- Param  `string` value - input value.
- Return `void`
