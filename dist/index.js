/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animationScrollTop.js":
/*!**************************************!*\
  !*** ./src/js/animationScrollTop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationScrollTop\": () => (/* binding */ animationScrollTop)\n/* harmony export */ });\nconst animationScrollTop = scrollEndElem => {\n  const easeInCubic = t => t * t * t;\n\n  const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {\n    const runtime = stamp - start;\n    const progress = runtime / duration;\n    const ease = easeInCubic(progress);\n\n    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);\n\n    if (runtime < duration) {\n      requestAnimationFrame(() => {\n        const newStamp = new Date().getTime();\n        scrollToElem(start, newStamp, duration, scrollEndElemTop, startScrollOffset);\n      });\n    }\n  };\n\n  requestAnimationFrame(() => {\n    const stamp = new Date().getTime();\n    const duration = 1200;\n    const start = stamp;\n    const navHeader = document.getElementById('nav-header').clientHeight;\n    const startScrollOffset = window.pageYOffset;\n\n    const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - navHeader;\n\n    scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);\n  });\n};\n\n\n//# sourceURL=webpack://red/./src/js/animationScrollTop.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll),\n/* harmony export */   \"currentAge\": () => (/* binding */ currentAge)\n/* harmony export */ });\n/* harmony import */ var _animationScrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationScrollTop */ \"./src/js/animationScrollTop.js\");\n\n\nconst navLink = document.getElementsByClassName('nav-link');\nconst navBarMenuCheck = document.getElementById('navbar-menu-check');\n\nconst smoothScroll = () => {\n  const scrollElems = document.getElementsByClassName('smooth-scroll');\n\n  // eslint-disable-next-line no-plusplus\n  for (let i = 0; i < scrollElems.length; i++) {\n    const elem = scrollElems[i];\n\n    elem.addEventListener('click', e => {\n      e.preventDefault();\n      const scrollElemId = e.currentTarget.dataset.scrollTo;\n      const scrollEndElem = document.getElementById(scrollElemId);\n\n      (0,_animationScrollTop__WEBPACK_IMPORTED_MODULE_0__.animationScrollTop)(scrollEndElem);\n    });\n  }\n};\n\nconst currentAge = () => {\n  const currentAgeBlock = document.getElementById('current-age');\n  let today = new Date();\n  let todayYear = today.getFullYear();\n  let myAge = todayYear - 1990;\n\n  currentAgeBlock.innerText = myAge;\n};\n\nwindow.addEventListener('load', () => {\n  smoothScroll();\n  currentAge();\n\n  Array.from(navLink).forEach( navLink => {\n    navLink.addEventListener('click', () => {\n      setTimeout(function(){\n        navBarMenuCheck.checked = false;\n      }, 700);\n    });\n  });\n});\n\n\n//# sourceURL=webpack://red/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;