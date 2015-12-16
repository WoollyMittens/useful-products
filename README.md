# useful.products.js: Responsive Products Slider

A responsive products slider.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-products">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/useful-products.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-products.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to start the script

```javascript
var products = new useful.Products().init({
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

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp prod` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
