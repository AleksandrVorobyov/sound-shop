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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burgerBtn = document.querySelector('.header__burger');\r\nconst sidebar = document.getElementById('sidebar');\r\n\r\nburgerBtn.addEventListener('click', function() {\r\n    sidebar.classList.toggle('active');\r\n    document.querySelector(\"body\").classList.toggle('hidden');\r\n})\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n    $(\".carousel-shop\").owlCarousel({\r\n        nav: false,\r\n        dots: true,\r\n        items: 1,\r\n        animateOut: 'animate__backOutDown',\r\n        animateIn: 'animate__backInDown',\r\n        smartSpeed: 850,\r\n        margin: 200,\r\n        stagePadding:30,\r\n        dotsContainer: '#carousel-custom-dots',\r\n        mouseDrag: false,\r\n        touchDrag: false,\r\n    });\r\n\r\n    $('.owl-dots').click(function () {\r\n        $('.carousel-shop').trigger('to.owl.carousel', [$(this).index(), 300]);\r\n    });\r\n\r\n    $('.carousel-shop__nav-next').click(function() {\r\n        $(\".carousel-shop\").trigger('next.owl.carousel', [2500]);\r\n    })\r\n    $('.carousel-shop__nav-prev').click(function() {\r\n        $(\".carousel-shop\").trigger('prev.owl.carousel', [2500]);\r\n    })\r\n});\r\n\r\nconst carouselGalleryItems = document.querySelectorAll('.carousel-shop__gallery-item');\r\n\r\ncarouselGalleryItems.forEach( function(item) {\r\n    item.addEventListener('click', function(e) {\r\n        let parentBlock = e.target.closest('.carousel-shop__item');\r\n        parentBlock.querySelectorAll('.carousel-shop__gallery-item').forEach(function(item) {\r\n            item.classList.remove('carousel-shop__gallery-item--active');\r\n        });\r\n        item.classList.add('carousel-shop__gallery-item--active');\r\n        let imgClick = e.target.querySelector('img');\r\n        let imgClickSrc = imgClick.src;\r\n        let imgBig = parentBlock.querySelector('.carousel-shop__item-img');\r\n        imgBig.classList.add('animate-gallery');\r\n        let imgBigItem = parentBlock.querySelector('.carousel-shop__item-img img');\r\n        imgBigItem.src = imgClickSrc;\r\n        setTimeout(() => {\r\n            imgBig.classList.remove('animate-gallery');\r\n        }, 900);\r\n    })\r\n})\n\n//# sourceURL=webpack:///./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cart = document.getElementById('link-to-cart');\r\nconst cartLink = document.getElementById('link-for-cart');\r\nconst headerCart = document.querySelector('.header__navbar-cart');\r\n\r\ncartLink.addEventListener('click', function() {\r\n    let cartItems = cart.getAttribute('data-cart');\r\n    let cartItemsNum = parseInt(cartItems);\r\n    let cartItemsMore = cartItemsNum + 1;\r\n    headerCart.classList.add('active');\r\n    setTimeout(() => {\r\n        headerCart.classList.remove('active');\r\n    }, 5000);\r\n    \r\n    return cart.setAttribute('data-cart', cartItemsMore);\r\n});\r\n\r\nconst productItems = document.querySelectorAll('.cart__table-row');\r\n\r\nfunction quantityRes() {\r\n    productItems.forEach( function(item) {\r\n        let quantity = item.querySelector('[data-quantity]'),\r\n            quantityMin = item.querySelector('[data-min]'),\r\n            quantityPlus = item.querySelector('[data-plus]'),\r\n            quantityResult,\r\n            productCost = item.querySelector('[data-cost]'),\r\n            productPrice = item.querySelector('[data-price]').innerHTML;\r\n            productCost.innerHTML = productPrice;\r\n\r\n            cartTotalFunc ();\r\n\r\n        quantityMin.addEventListener('click', () => {\r\n            quantityResult = quantity.innerHTML - 1;\r\n\r\n            if (parseInt(quantityResult) == 0) {\r\n                item.remove();\r\n            }\r\n\r\n            return productCost.innerHTML = parseInt((quantityResult * productPrice)),\r\n             quantity.innerHTML = quantityResult, productCost, cartTotalFunc ();\r\n        });\r\n\r\n        quantityPlus.addEventListener('click', () => {\r\n            quantityResult = parseInt(quantity.innerHTML) + 1;\r\n\r\n            return productCost.innerHTML = parseInt((quantityResult * productPrice)),\r\n            quantity.innerHTML = quantityResult, productCost, cartTotalFunc ();\r\n        });\r\n    })\r\n}\r\n\r\nquantityRes();\r\n\r\nfunction cartTotalFunc () {\r\n    const cartTotal = document.querySelector('[data-cart-total]');\r\n    const allCost = document.querySelectorAll('[data-cost]');\r\n    const massAllCost = Array.from(allCost);\r\n    let massResCost = [];\r\n\r\n    massAllCost.forEach( (e) => {\r\n        return massResCost.push(e.innerHTML);\r\n    })\r\n\r\n    let costSum = 0;\r\n\r\n    for (let i = 0; i < massResCost.length; i++) {\r\n         costSum = costSum + parseInt(massResCost[i]);\r\n    }\r\n\r\n    cartTotal.innerHTML = ` ${costSum}$`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/cart.js?");

/***/ }),

/***/ "./src/js/circle.js":
/*!**************************!*\
  !*** ./src/js/circle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const labelCircleAll = document.querySelectorAll('[data-circle]');\r\n\r\nlabelCircleAll.forEach(function(item) {\r\n    item.addEventListener('click', function(e) {\r\n        let circleData = e.target.dataset.circle;\r\n        let carouselItemActive = document.querySelector('.owl-item.active');\r\n        carouselItemActive.querySelector('.carousel-shop__gallery-item.carousel-shop__gallery-item--active').classList.remove('carousel-shop__gallery-item--active');\r\n        let itemText = carouselItemActive.querySelector(`[data-item='${circleData}']`);\r\n        itemText.classList.add('carousel-shop__gallery-item--active');\r\n        itemText.click();\r\n    })\r\n});\n\n//# sourceURL=webpack:///./src/js/circle.js?");

/***/ }),

/***/ "./src/js/favorite.js":
/*!****************************!*\
  !*** ./src/js/favorite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btnFavorites = document.getElementById('header-favorite');\r\nconst btnFavoritesFooter = document.getElementById('footer-favorite');\r\n\r\nbtnFavorites.addEventListener('click', function(e) {\r\n    e.target.classList.toggle('header__navbar-favorite--on');\r\n});\r\n\r\nbtnFavoritesFooter.addEventListener('click', function(e) {\r\n    e.target.classList.toggle('header__navbar-favorite--on');\r\n});\n\n//# sourceURL=webpack:///./src/js/favorite.js?");

/***/ }),

/***/ "./src/js/search-btn.js":
/*!******************************!*\
  !*** ./src/js/search-btn.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btnSearch = document.getElementById('header-search-btn');\r\nconst inputSearch = document.getElementById('navbar-search');\r\nbtnSearch.addEventListener('click', (e) => {\r\n    if (inputSearch.classList.contains('header__navbar-input--active')) {\r\n        if (inputSearch.value.length > null) {\r\n            window.location.reload();\r\n        } else {\r\n            e.preventDefault();\r\n        }\r\n    } else {\r\n        inputSearch.classList.add('header__navbar-input--active');\r\n        e.preventDefault();\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/search-btn.js?");

/***/ }),

/***/ "./src/js/sign-in.js":
/*!***************************!*\
  !*** ./src/js/sign-in.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const signInLinks = document.querySelectorAll('[data-link]').forEach((item)=> {\r\n    item.addEventListener('click', toggleForm);\r\n});\r\n\r\nfunction toggleForm() {\r\n    const signInWrap = document.querySelector('.sign-in-wrap');\r\n    signInWrap.classList.toggle('active');\r\n    const signIn = document.querySelector('.sign-in');\r\n    signIn.classList.toggle('active');\r\n}\r\n\r\nconst signInBtn = document.getElementById('sign-in-btn');\r\nsignInBtn.addEventListener('click', function() {\r\n    const signIn = document.querySelector('.sign-in');\r\n    signIn.classList.add('sign-in--active');\r\n})\r\n\r\nconst signInBtnExit = document.querySelectorAll('[data-signin-exit]');\r\n\r\nsignInBtnExit.forEach((item)=> {\r\n    item.addEventListener('click', function() {\r\n        const signIn = document.querySelector('.sign-in');\r\n        signIn.classList.remove('sign-in--active');\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack:///./src/js/sign-in.js?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************!*\
  !*** multi ./src/js/app.js ./src/js/carousel.js ./src/js/cart.js ./src/js/circle.js ./src/js/favorite.js ./src/js/search-btn.js ./src/js/sign-in.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\app.js */\"./src/js/app.js\");\n__webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\carousel.js */\"./src/js/carousel.js\");\n__webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\cart.js */\"./src/js/cart.js\");\n__webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\circle.js */\"./src/js/circle.js\");\n__webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\favorite.js */\"./src/js/favorite.js\");\n__webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\search-btn.js */\"./src/js/search-btn.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\sasha\\Documents\\Web work\\sound-store\\src\\js\\sign-in.js */\"./src/js/sign-in.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/js/carousel.js_./src/js/cart.js_./src/js/circle.js_./src/js/favorite.js_./src/js/search-btn.js_./src/js/sign-in.js?");

/***/ })

/******/ });