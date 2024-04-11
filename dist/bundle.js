/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    GaussSumStrategy.prototype.get = function (N) {
        return (N * (N + 1)) / 2;
    };
    return GaussSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaussSumStrategy);


/***/ }),

/***/ "./src/strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    LoopSumStrategy.prototype.get = function (N) {
        var sum = 0;
        for (var i = 1; i <= N; i++)
            sum += i;
        return sum;
    };
    return LoopSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopSumStrategy);


/***/ }),

/***/ "./src/strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    SumPrinter.prototype.print = function (strategy, N, domOutput) {
        var value = strategy.get(N);
        domOutput.innerHTML = "1~".concat(N, "\uAE4C\uC9C0\uC758 \uCD1D\uD569 = ").concat(value);
    };
    return SumPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumPrinter);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GaussSumStrategy */ "./src/strategy/GaussSumStrategy.ts");
/* harmony import */ var _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoopSumStrategy */ "./src/strategy/LoopSumStrategy.ts");
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SumPrinter */ "./src/strategy/SumPrinter.ts");



var printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_2__["default"]();
var dom1 = document.createElement("h1");
document.body.append(dom1);
var dom2 = document.createElement("h1");
document.body.append(dom2);
printer.print(new _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom1);
printer.print(new _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__["default"](), 100, dom2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFIQyw4QkFBRyxHQUFILFVBQUksQ0FBUztRQUNYLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0lBQUE7SUFNQSxDQUFDO0lBTEMsNkJBQUcsR0FBSCxVQUFJLENBQVM7UUFDWCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7SUFBQTtJQUtBLENBQUM7SUFKQywwQkFBSyxHQUFMLFVBQU0sUUFBcUIsRUFBRSxDQUFTLEVBQUUsU0FBa0I7UUFDeEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixTQUFTLENBQUMsU0FBUyxHQUFHLFlBQUssQ0FBQywrQ0FBWSxLQUFLLENBQUUsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ1BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNGO0FBQ1Y7QUFFdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxtREFBVSxFQUFFLENBQUM7QUFFakMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUzQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSx3REFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSx5REFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJhdGVneS9HYXVzc1N1bVN0cmF0ZWd5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJhdGVneS9Mb29wU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cmF0ZWd5L1N1bVByaW50ZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cmF0ZWd5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdW1TdHJhdGVneSBmcm9tIFwiLi9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXVzc1N1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3kge1xuICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKE4gKiAoTiArIDEpKSAvIDI7XG4gIH1cbn1cbiIsImltcG9ydCBTdW1TdHJhdGVneSBmcm9tIFwiLi9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wU3VtU3RyYXRlZ3kgaW1wbGVtZW50cyBTdW1TdHJhdGVneSB7XG4gIGdldChOOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE47IGkrKykgc3VtICs9IGk7XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxufVxuIiwiaW1wb3J0IFN1bVN0cmF0ZWd5IGZyb20gXCIuL1N1bVN0cmF0ZWd5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bVByaW50ZXIge1xuICBwcmludChzdHJhdGVneTogU3VtU3RyYXRlZ3ksIE46IG51bWJlciwgZG9tT3V0cHV0OiBFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBzdHJhdGVneS5nZXQoTik7XG4gICAgZG9tT3V0cHV0LmlubmVySFRNTCA9IGAxfiR7Tn3quYzsp4DsnZgg7LSd7ZWpID0gJHt2YWx1ZX1gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYXVzc1N1bVN0cmF0ZWd5IGZyb20gXCIuL0dhdXNzU3VtU3RyYXRlZ3lcIjtcbmltcG9ydCBMb29wU3VtU3RyYXRlZ3kgZnJvbSBcIi4vTG9vcFN1bVN0cmF0ZWd5XCI7XG5pbXBvcnQgU3VtUHJpbnRlciBmcm9tIFwiLi9TdW1QcmludGVyXCI7XG5cbmNvbnN0IHByaW50ZXIgPSBuZXcgU3VtUHJpbnRlcigpO1xuXG5jb25zdCBkb20xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tMSk7XG5cbmNvbnN0IGRvbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChkb20yKTtcblxucHJpbnRlci5wcmludChuZXcgTG9vcFN1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMSk7XG5wcmludGVyLnByaW50KG5ldyBHYXVzc1N1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=