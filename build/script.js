/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function(num, inner, item, slid ) {


    for (let i = 0 ; i < this.length; i++) {
        // const width = window.getComputedStyle(this[i].querySelector('.pictures-carousel__inner')).width;
        const width = window.getComputedStyle(this[i].querySelector(inner)).width;
        // const slides = this[i].querySelectorAll('.pictures-carousel__item');
        const slides = this[i].querySelectorAll(item);
        // const slidesField = this[i].querySelector('.pictures-carousel__slides');
        const slidesField = this[i].querySelector(slid);

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });


        let offset = (+width.split('.')[0].replace(/\D/g, '') * (num));
        let slideIndex = 0;

        slidesField.style.transform = `translateX(-${offset}px)`;

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if (offset == (+width.split('.')[0].replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.split('.')[0].replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
        });

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.split('.')[0].replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.split('.')[0].replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
        });

    }
};

// $('.carousel').carousel();


/***/ }),

/***/ "./src/js/lib/components/observer.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/observer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const options = {
	rootMargin: '-10px'
};
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
		let containerInner = entry.target.querySelectorAll('[data-animated]');
		if (entry.isIntersecting ) {
			containerInner.forEach(function(item) {
				let setaDataAimated = item.dataset.animated;
				item.classList.add(setaDataAimated);
			})
			return; // если класс добавлен, продолжать уже не надо
		}
		containerInner.forEach(function(item) {
			let setaDataAimated = item.dataset.animated;
			item.classList.remove(setaDataAimated);
		});
	});
}, options);

// Сообщить наблюдателю, какие элементы следует отслеживать
try {
	observer.observe(document.querySelector('.observer-headline'));
	observer.observe(document.querySelector('.observer-first'));
	observer.observe(document.querySelector('.observer-first-additive'));
	observer.observe(document.querySelector('.observer-second'));
	observer.observe(document.querySelector('.observer-second-pictures'));
	observer.observe(document.querySelector('.observer-third'));
	observer.observe(document.querySelector('.observer-third-pictures'));
	observer.observe(document.querySelector('.observer-paintings'));
	observer.observe(document.querySelector('.observer-meetings'));
} catch (error) {}




// Пример записи:
// в html:
//<div class="observer" id="observer">
//    <div class="container-inner" data-animated = "fadeInUp"></div>
//</div>
// в js:
// try {
// 	observer.observe(document.querySelector('.observer'));
// } catch (error) {}
// // или через id
// observer.observe(document.getElementById('observer'));
// observer.observe(document.querySelector('#observer'));


/***/ }),

/***/ "./src/js/lib/components/scrolling.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/scrolling.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 600) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Scrolling with raf
    //Вар -2 с requestAnimationFrame
    // let links = document.querySelectorAll('[href^="#"]'), speed = 0.3;
    // let links = document.querySelectorAll('[href="#up"]'), speed = 0.1;

    // links.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();

    //         let widthTop = document.documentElement.scrollTop,
    //             hash = this.hash,
    //             toBlock = document.querySelector(hash).getBoundingClientRect().top,
    //             start = null;
    //         // console.log(document.documentElement.scrollTop);
    //         console.log(this.hash);
    //         // console.log(document.querySelector(hash).getBoundingClientRect());


    //         requestAnimationFrame(step);

    //         function step(time) {
    //             if (start === null) {
    //                 start = time;
    //             }

    //             let progress = time - start,
    //                 r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

    //                 document.documentElement.scrollTo(0, r);

    //             if (r != widthTop + toBlock) {
    //                 requestAnimationFrame(step);
    //             } else {
    //                 location.hash = hash;
    //             }
    //         }
    //     });
    // });


};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);


/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_hendlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hendlers */ "./src/js/lib/modules/hendlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/observer */ "./src/js/lib/components/observer.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_observer__WEBPACK_IMPORTED_MODULE_8__);

 //show, hide, toggle
//addClass, removeClass, toggleClass
// on, off, click
//setAttribute, removeAttribute, toggleAttribute
//html, eq, index, find, siblings
//





/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/*
    $.prototype.html-
    Метод для замены, полученной HTML
    структуры внутри элемента.
    Если контента передан, то заменяем контент,
    если аргументов нет, то получаем контент
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

/*
    $.prototype.eq -
    Получаем объект по номеру,
    т.е. получаем один элемент как самостоятельный объект,
    а не  элемент часть объекта
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

/*
    $.prototype.index-
    Получение номера элемента по порядку среди элементов
    у одного родителя
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    // function findMyIndex (item) {
    //     return item == this[0];
    // };

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

/*
    Найти элементы по селектору внутри уже найденных.
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// X.losest(Y) возвращает элементы X с ближайшим общим родительским элементом (Y) (или сам элемент)
// console.log($('.some').closest('.findme')); - найти все .some с родителем .findme, если не найдено вернуть сам элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        let this1 = this[i].closest(selector);
        debugger
        if(!this1) { //мое условие
            // this[i] = 'classNull';
            return this;
        }
        this[i] = this1;
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    debugger
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};


/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        
        if (!this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].removeAttribute(attributeName);
        }
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function(classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};


/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function(dur, display, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        this.fadeInBody(dur, display, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function(dur, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        this.fadeOutBody(dur, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function(dur, display, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this.fadeInBody(dur, display, fin, i);
        } else {
            this.fadeOutBody(dur, fin, i);
        }
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInBody = function(dur, display, fin, i) { //Д.З.4-8
    
    this[i].style.display = display || 'block';
    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };
    
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
    
    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOutBody = function(dur, fin, i) { //Д.З.4-8
    
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
            this[i].style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);

    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};








/***/ }),

/***/ "./src/js/lib/modules/hendlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/hendlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Реазизация
// $('.food-2 a').on('click',() => {
//     $('.modal-dialog').fadeIn(180);
// });
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');  
// });

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};






/***/ }),

/***/ "./src/js/lib/site/main.js":
/*!*********************************!*\
  !*** ./src/js/lib/site/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/scrolling */ "./src/js/lib/components/scrolling.js");
// работа с бургером
// Добавляем класс active, для замены бургера на крестик (это в css)
$('.navbar-toggle').on('click', function() {
    $('.burger').toggleClass('active');
});
let isClick = true;
$.prototype.dropdownFadeLeft = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            let toggleIsClick = () => {
                isClick ?  isClick = false : isClick = true;
            }
            if (isClick) {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeOutLeft");
                $(`[data-toggle-id="${id}"]`).addClass("fadeInLeft");
                $(`[data-toggle-id="${id}"]`).fadeIn(500, 'flex' , toggleIsClick);
                $('.logo-link').addClass('logo-link_gadget');
                $('body').addClass('none-scroll');
            } else {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeInLeft");
                $(`[data-toggle-id="${id}"]`).addClass("fadeOutLeft");
                $(`[data-toggle-id="${id}"]`).fadeOut(500, toggleIsClick);
                $('.logo-link').removeClass('logo-link_gadget');
                $('body').removeClass('none-scroll');
            }
        });
    }
};
$('.navbar-toggle').dropdownFadeLeft();

// работа слайдера pictures
$('.pictures__item').on('click', function() {
    const strAlt = this.querySelector('.pictures__img').alt;
    const items = document.querySelectorAll('.pictures-carousel__item');
    let offset = -1;
    for (let i = 0; i < items.length; i++) {
        const img = items[i].querySelector('.pictures-carousel__img');
        if (img.alt === strAlt) {
            offset = i;
            break;
        }
   }
    $('.pictures-carousel').addClass('pictures-carousel_show');
    $('.pictures-carousel').carousel(
        offset,
        '.pictures-carousel__inner',
        '.pictures-carousel__item',
        '.pictures-carousel__slides'
    );
    $('.pageup').addClass('fadeOut');
    $('.pageup').removeClass('fadeIn');
});
$('.btn-close').on('click', function() {
    $('.pictures-carousel').removeClass('pictures-carousel_show');

    const slide = document.querySelector('.pictures-carousel__slides');
    const items = document.querySelectorAll('.pictures-carousel__item');
    slide.style.width = 'auto';
    items.forEach(item => {
        item.style.width = 'auto';
    });
    slide.style.transform = `translateX(0px)`;
});

// работа слайдера meetings
$('.meetings__item').on('click', function() {
    const strAlt = this.querySelector('.meetings__img').alt;

    const items = document.querySelectorAll('.meetings-carousel__item');
    let offset = -1;
    for (let i = 0; i < items.length; i++) {
        const img = items[i].querySelector('.meetings-carousel__img');
        if (img.alt === strAlt) {
            offset = i;
            break;
        }
   }
    $('.meetings-carousel').addClass('meetings-carousel_show');
    $('.meetings-carousel').carousel(
        offset,
        '.meetings-carousel__inner',
        '.meetings-carousel__item',
        '.meetings-carousel__slides'
    );
    $('.pageup').addClass('fadeOut');
    $('.pageup').removeClass('fadeIn');
});


$('.meetings-btn-close').on('click', function() {
    $('.meetings-carousel').removeClass('meetings-carousel_show');

    const slide = document.querySelector('.meetings-carousel__slides');
    const items = document.querySelectorAll('.meetings-carousel__item');
    slide.style.width = 'auto';
    items.forEach(item => {
        item.style.width = 'auto';
    });
    slide.style.transform = `translateX(0px)`;
});






window.addEventListener('DOMContentLoaded', () => {
    // const iframe = document.querySelector(".main-video__iframe");
    // const video = document.querySelector(".main-video");
    // iframe.addEventListener("mouseout", function() {
    //     const screenPape = document.querySelector(".screen-pape");
    //     screenPape.style.zIndex = "20";
    // });

    // try {

    //     const player = VK.VideoPlayer(iframe);
    //     player.mute();
    //     player.seek(0);
    //     player.play();


    //     player.on('error', () => {
    //         const video = document.querySelector(".main-video");
    //         video.style.display = 'none';
    //     });

    // } catch (error) {
    //         const video = document.querySelector(".main-video");
    //         video.style.display = 'none';
    // }
    Object(_components_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup');
});


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
/* harmony import */ var _lib_site_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/site/main.js */ "./src/js/lib/site/main.js");
// 'use strict';




console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map