/*
	Source:
	van Creij, Maurice (2014). "useful.products.js: A Responsive Products Slider", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/


// create the constructor if needed
var useful = useful || {};
useful.Products = useful.Products || function() {};

// extend the constructor
useful.Products.prototype.Main = function(config, context) {

    // PROPERTIES

    "use strict";
    this.config = config;
    this.context = context;
    this.element = config.element;
    this.wrapper = this.element.querySelector(config.wrapper);
    this.items = this.element.querySelectorAll(config.items);

    // METHODS

    this.init = function() {
        // double the contents to help with looping
        if (this.config.double) {
            this.doubleContent(this.wrapper);
        }
        // index the elements
        for (var a = 0, b = this.items.length; a < b; a += 1) {
            this.items[a].className += ' product-' + a;
            this.items[a].querySelector('img').addEventListener('load', this.onResize());
        }
        // add controls
        this.addControls();
        // add touch
        this.addTouch();
		// add idle timer
		this.addIdle();
        // redraw after every resize
        this.increment(0);
        window.addEventListener('resize', this.onResize());
        // return the object
        return this;
    };

    this.doubleContent = function(element) {
        // double the contents of a container
        element.innerHTML += element.innerHTML;
        this.items = this.element.querySelectorAll(this.config.items);
    };

    this.addControls = function() {
        // add the next button
        this.nextButton = document.createElement('a');
        this.nextButton.setAttribute('href', '#');
        this.nextButton.className = 'products-next';
        this.nextButton.innerHTML = '&gt;';
        this.nextButton.addEventListener('click', this.onNextClicked());
        this.element.appendChild(this.nextButton);
        // add the prev button
        this.prevButton = document.createElement('a');
        this.prevButton.setAttribute('href', '#');
        this.prevButton.className = 'products-prev';
        this.prevButton.innerHTML = '&lt;';
        this.prevButton.addEventListener('click', this.onPrevClicked());
        this.element.appendChild(this.prevButton);
    };

    this.addTouch = function() {
        var _this = this;
        // apply gesture events
        this.gestures = new useful.Gestures().init({
            'element': this.element,
            'threshold': 50,
            'filter': 1,
            'increment': 0.1,
            'cancelTouch': false,
            'cancelGesture': false,
            'swipeLeft': function() {
                _this.increment(-1);
            },
            'swipeRight': function() {
                _this.increment(1);
            }
        });
    };

    this.addIdle = function() {
        // only idle is needed
        if (this.config.idle && this.config.idle > 0) {
            // add the idle timer
            this.resetIdle();
            this.element.addEventListener('mousemove', this.onEndIdle());
            this.element.addEventListener('touchmove', this.onEndIdle());
        }
    };

    this.increment = function(direction) {
        var newIndex, oldIndex,
            minIndex = 0,
            maxIndex = this.items.length - 1,
            minHeight = 0;
        // reindex the items using the increment
        for (var a = 0, b = this.items.length; a < b; a += 1) {
            // get the index of this item
            oldIndex = parseInt(this.items[a].className.split('product-')[1]);
            // increment the index
            newIndex = oldIndex + direction;
            newIndex = (newIndex < minIndex) ? maxIndex : newIndex;
            newIndex = (newIndex > maxIndex) ? minIndex : newIndex;
            // apply the incremented index
            this.items[a].className = this.items[a].className.replace(
                ' product-' + oldIndex,
                ' product-' + newIndex
            );
            // measure the item
            minHeight = (this.items[a].offsetHeight > minHeight) ? this.items[a].offsetHeight : minHeight;
        }
        // adjust the wrapper height
        this.wrapper.style.height = minHeight + 'px';
    };

    this.resetIdle = function() {
        var _this = this;
        // set an interval for autimatic sliding
        clearInterval(this.idleTimeout);
        this.idleTimeout = setInterval(function() {
            _this.increment(-1);
        }, this.config.idle);
    };

    // EVENTS

    this.onResize = function() {
        var _this = this;
        return function() {
            // increment by 0 to force a redraw
            _this.increment(0);
        };
    };

    this.onEndIdle = function() {
        var _this = this;
        return function() {
            // reset the interval
            _this.resetIdle();
        };
    };

    this.onNextClicked = function() {
        var _this = this;
        return function(evt) {
            // cancel the default click
            evt.preventDefault();
            // increment forwards
            _this.increment(-1);
        };
    };

    this.onPrevClicked = function() {
        var _this = this;
        return function(evt) {
            // cancel the default click
            evt.preventDefault();
            // increment backwards
            _this.increment(1);
        };
    };

};

// return as a require.js module
if (typeof module !== 'undefined') {
    exports = module.exports = useful.Products.Main;
}
