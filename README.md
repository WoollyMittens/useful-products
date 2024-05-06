# products.js: Responsive Products Slider

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

A responsive products slider.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/products.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/gestures.js"></script>
<script src="js/products.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'lib/gestures.js',
	'js/products.js'
], function(Gestures, Products) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {Gestures = require('lib/gestures.js";
@import {Products} from "js/products.js";
```

## How to start the script

```javascript
var products = new Products({
	'elements': document.querySelectorAll('.products'),
	'wrapper': '.products-wrapper',
	'items': '.products-item',
	'remove': null,
	'idle': 4000
});
```

**elements : {DOM objects}** - A collection of target elements to turn into sliders.

**wrapper : {css rule}** - The scrolling wrapper inside each target element.

**items : {css rule}** - The individual product items.

**remove : {css rule}** - DOM elements that need to be removed before starting the slider. Typically these are extra elements left by the CMS.

**idle : {miliseconds}** - The time to wait before resuming the slideshow after an interaction.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
