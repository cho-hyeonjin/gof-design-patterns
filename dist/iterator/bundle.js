/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

// Aggregator 를 구성하는 구성요소 Array 클래스
// 제네릭타입으로 설정해줘야 하는데, Item 타입으로 정해준다.
var Array = /** @class */ (function () {
    // Item 클래스 여러개를 가질 private 필드 추가 & 초기화
    function Array(items) {
        this.items = items;
    }
    // intdex를 통해 배열 구성 데이터를 얻을 수 있는 메서드 추가
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        // 배열 구성 데이터의 개수를 구할 수 있는 getter 메서드 정의
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.itertator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this); // Iterator 인터페이스의 구현체 ArrayIterator 클래스에서 위에서 정의한 Array class의 메서드를 필드로 구성할 수 있도록 this 전달(this는 Array의 인스턴스)
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/item.ts":
/*!******************************!*\
  !*** ./src/iterator/item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
// Aggregator 인터페이스 구성항목에 대한 Item 클래스
var Item = /** @class */ (function () {
    // // 2개의 private 필드를 가짐. private이므로 클래스 내부에서만 사용 가능
    // private _name: string;
    // private _cost: number;
    // // 생성자로 필드값 초기화
    // constructor(name: string, cost: number) {
    //   this._name = name;
    //   this._cost = cost;
    // }
    // --- 위 코드를 아래와 같이 한 줄로 간결하게 표현할 수 있음 ---
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        // Item class 외부에서도 _name과 _cost 필드를 사용할 수 있도록 getter 설정
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/iterator/item.ts");


var items = [
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠크다스", 3000),
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 2000),
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("빼빼로", 2000),
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 5000),
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.itertator();
while (iter.next()) {
    var item = iter.current();
    var domItem = document.createElement("div");
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0 ");
    document.body.appendChild(domItem);
    domItem.classList.add("iterator-item");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUksOENBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFNUIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQUcsSUFBSSxDQUFDLElBQUksZ0JBQU0sSUFBSSxDQUFDLElBQUksWUFBSSxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvLi9zcmMvaXRlcmF0b3IvQXJyYXkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL2l0ZXJhdG9yL0FycmF5SXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL2l0ZXJhdG9yL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL2l0ZXJhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZ2dyZWdhdG9yIGZyb20gXCIuL0FnZ3JlZ2F0b3JcIjtcbmltcG9ydCBBcnJheUl0ZXJhdG9yIGZyb20gXCIuL0FycmF5SXRlcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBJdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvclwiO1xuXG4vLyBBZ2dyZWdhdG9yIOulvCDqtazshLHtlZjripQg6rWs7ISx7JqU7IaMIEFycmF5IO2BtOuemOyKpFxuLy8g7KCc64Sk66at7YOA7J6F7Jy866GcIOyEpOygle2VtOykmOyVvCDtlZjripTrjbAsIEl0ZW0g7YOA7J6F7Jy866GcIOygle2VtOykgOuLpC5cbmNsYXNzIEFycmF5IGltcGxlbWVudHMgQWdncmVnYXRvcjxJdGVtPiB7XG4gIC8vIEl0ZW0g7YG0656Y7IqkIOyXrOufrOqwnOulvCDqsIDsp4ggcHJpdmF0ZSDtlYTrk5wg7LaU6rCAICYg7LSI6riw7ZmUXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IEl0ZW1bXSkge31cblxuICAvLyBpbnRkZXjrpbwg7Ya17ZW0IOuwsOyXtCDqtazshLEg642w7J207YSw66W8IOyWu+ydhCDsiJgg7J6I64qUIOuplOyEnOuTnCDstpTqsIBcbiAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgfVxuICAvLyDrsLDsl7Qg6rWs7ISxIOuNsOydtO2EsOydmCDqsJzsiJjrpbwg6rWs7ZWgIOyImCDsnojripQgZ2V0dGVyIOuplOyEnOuTnCDsoJXsnZhcbiAgcHVibGljIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBpdGVydGF0b3IoKTogSXRlcmF0b3I8SXRlbT4ge1xuICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzKTsgLy8gSXRlcmF0b3Ig7J247YSw7Y6Y7J207Iqk7J2YIOq1rO2YhOyytCBBcnJheUl0ZXJhdG9yIO2BtOuemOyKpOyXkOyEnCDsnITsl5DshJwg7KCV7J2Y7ZWcIEFycmF5IGNsYXNz7J2YIOuplOyEnOuTnOulvCDtlYTrk5zroZwg6rWs7ISx7ZWgIOyImCDsnojrj4TroZ0gdGhpcyDsoITri6wodGhpc+uKlCBBcnJheeydmCDsnbjsiqTthLTsiqQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXk7XG4iLCJpbXBvcnQgQXJyYXkgZnJvbSBcIi4vQXJyYXlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBJdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvclwiO1xuXG5jbGFzcyBBcnJheUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3I8SXRlbT4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnJheTogQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5pbmRleCA9IC0xO1xuICB9XG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5hcnJheS5jb3VudDtcbiAgfVxuXG4gIGN1cnJlbnQoKTogSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZ2V0SXRlbSh0aGlzLmluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUl0ZXJhdG9yO1xuIiwiLy9cbi8vIEFnZ3JlZ2F0b3Ig7J247YSw7Y6Y7J207IqkIOq1rOyEse2VreuqqeyXkCDrjIDtlZwgSXRlbSDtgbTrnpjsiqRcbmNsYXNzIEl0ZW0ge1xuICAvLyAvLyAy6rCc7J2YIHByaXZhdGUg7ZWE65Oc66W8IOqwgOynkC4gcHJpdmF0ZeydtOuvgOuhnCDtgbTrnpjsiqQg64K067aA7JeQ7ISc66eMIOyCrOyaqSDqsIDriqVcbiAgLy8gcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAvLyBwcml2YXRlIF9jb3N0OiBudW1iZXI7XG5cbiAgLy8gLy8g7IOd7ISx7J6Q66GcIO2VhOuTnOqwkiDstIjquLDtmZRcbiAgLy8gY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb3N0OiBudW1iZXIpIHtcbiAgLy8gICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgLy8gICB0aGlzLl9jb3N0ID0gY29zdDtcbiAgLy8gfVxuICAvLyAtLS0g7JyEIOy9lOuTnOulvCDslYTrnpjsmYAg6rCZ7J20IO2VnCDspITroZwg6rCE6rKw7ZWY6rKMIO2RnO2YhO2VoCDsiJgg7J6I7J2MIC0tLVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2Nvc3Q6IG51bWJlcikge31cblxuICAvLyBJdGVtIGNsYXNzIOyZuOu2gOyXkOyEnOuPhCBfbmFtZeqzvCBfY29zdCDtlYTrk5zrpbwg7IKs7Jqp7ZWgIOyImCDsnojrj4TroZ0gZ2V0dGVyIOyEpOyglVxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBnZXQgY29zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJyYXkgZnJvbSBcIi4vQXJyYXlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gIG5ldyBJdGVtKFwi7L+g7YGs64uk7IqkXCIsIDMwMDApLFxuICBuZXcgSXRlbShcIuyDiOyasOq5oVwiLCAyMDAwKSxcbiAgbmV3IEl0ZW0oXCLrubzrubzroZxcIiwgMjAwMCksXG4gIG5ldyBJdGVtKFwi7LSI7L2U7YyM7J20XCIsIDUwMDApLFxuXTtcblxuY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoaXRlbXMpO1xuY29uc3QgaXRlciA9IGFycmF5Lml0ZXJ0YXRvcigpO1xuXG53aGlsZSAoaXRlci5uZXh0KCkpIHtcbiAgY29uc3QgaXRlbSA9IGl0ZXIuY3VycmVudCgpO1xuXG4gIGNvbnN0IGRvbUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkb21JdGVtLmlubmVyVGV4dCA9IGAke2l0ZW0ubmFtZX0gOiAke2l0ZW0uY29zdH3sm5AgYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcblxuICBkb21JdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVyYXRvci1pdGVtXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9