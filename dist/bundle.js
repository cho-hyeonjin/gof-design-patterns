/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** 추상클래스이므로 abstract를 붙여서 선언 */
var DisplayArticleTemplate = /** @class */ (function () {
    /** 파생클래스에서 접근할 수 있도록 protected 접근자로 지정 */
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        /** 각 단계를 정해진 순서대로 호출해주는 template method 추가 - 파생 클래스에서 수정할 수 없고 사용만 할 수 있게 readonly로 작성 */
        this.displayHtml = function () {
            return "\n      ".concat(_this.titleHtml(), "\n      ").concat(_this.contentHtml(), "\n      ").concat(_this.footerHtml(), "\n    ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value=".concat(this.article.getTitle(), " /></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><textarea cols='50' rows='5'>".concat(items.join(""), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "' /></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        /** 부모클래스의 생성자 호출 위해 super 키워드 입력하여 호출 */
        return _super.call(this, article) || this;
    }
    /** 3개의 추상 메서드 입력 */
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(""), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("Cho-Hyeonjin's Tech Stack", ["React", "Redux", "TypeScript", "Three.js", "PixiJS"], "Creative Developer");
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector(".content").innerHTML = display.displayHtml();
document.querySelector(".edit-mode").addEventListener("change", function (event) {
    var display;
    if (event.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector(".content").innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGF0ZS9BcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy8uL3NyYy90ZW1wbGF0ZS9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy8uL3NyYy90ZW1wbGF0ZS9FZGl0YWJsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy8uL3NyYy90ZW1wbGF0ZS9TaW1wbGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvLi9zcmMvdGVtcGxhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdLFxuICAgIHByaXZhdGUgZm9vdGVyOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgcHVibGljIGdldENvbnRlbnQoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9vdGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9vdGVyO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5cbi8qKiDstpTsg4HtgbTrnpjsiqTsnbTrr4DroZwgYWJzdHJhY3Trpbwg67aZ7Jes7IScIOyEoOyWuCAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIC8qKiDtjIzsg53tgbTrnpjsiqTsl5DshJwg7KCR6re87ZWgIOyImCDsnojrj4TroZ0gcHJvdGVjdGVkIOygkeq3vOyekOuhnCDsp4DsoJUgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFydGljbGU6IEFydGljbGUpIHt9XG5cbiAgLyoqIOqwgSDri6jqs4Trpbwg7KCV7ZW07KeEIOyInOyEnOuMgOuhnCDtmLjstpztlbTso7zripQgdGVtcGxhdGUgbWV0aG9kIOy2lOqwgCAtIO2MjOyDnSDtgbTrnpjsiqTsl5DshJwg7IiY7KCV7ZWgIOyImCDsl4bqs6Ag7IKs7Jqp66eMIO2VoCDsiJgg7J6I6rKMIHJlYWRvbmx566GcIOyekeyEsSAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheUh0bWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7dGhpcy50aXRsZUh0bWwoKX1cbiAgICAgICR7dGhpcy5jb250ZW50SHRtbCgpfVxuICAgICAgJHt0aGlzLmZvb3Rlckh0bWwoKX1cbiAgICBgO1xuICB9O1xuXG4gIC8qKiDqtaztmITsnbQg7JeG64qUIOy2lOyDgeuplOyEnOuTnOuhnCDshKDslrggKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRpdGxlSHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb250ZW50SHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1sKCk6IHN0cmluZztcbn1cbiIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gXCIuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBwcm90ZWN0ZWQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2PjxzcGFuPuygnOuqqTwvc3Bhbj48aW5wdXQgdmFsdWU9JHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0gLz48L2Rpdj5gO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbnRlbnRIdG1sKCk6IHN0cmluZyB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcCgoaXRlbSkgPT4gYCR7aXRlbX1cXG5gKTtcbiAgICByZXR1cm4gYDxzcGFuPuuCtOyaqTwvc3Bhbj48dGV4dGFyZWEgY29scz0nNTAnIHJvd3M9JzUnPiR7aXRlbXMuam9pbihcbiAgICAgIFwiXCJcbiAgICApfTwvdGV4dGFyZWE+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2PjxzcGFuPuq4gOyTtOydtDwvc3Bhbj48aW5wdXQgdmFsdWU9JyR7dGhpcy5hcnRpY2xlLmdldEZvb3RlcigpfScgLz48L2Rpdj5gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHN1cGVyKGFydGljbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIC8qKiAz6rCc7J2YIOy2lOyDgSDrqZTshJzrk5wg7J6F66ClICovXG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxoMT4ke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfTwvaDE+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGA8bGk+JHtpdGVtfTwvbGk+YCk7XG4gICAgcmV0dXJuIGA8dWw+JHtpdGVtcy5qb2luKFwiXCIpfTwvdWw+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8aDM+JHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9oMz5gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIC8qKiDrtoDrqqjtgbTrnpjsiqTsnZgg7IOd7ISx7J6QIO2YuOy2nCDsnITtlbQgc3VwZXIg7YKk7JuM65OcIOyeheugpe2VmOyXrCDtmLjstpwgKi9cbiAgICBzdXBlcihhcnRpY2xlKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9FZGl0YWJsZURpc3BsYXlBcnRpY2xlXCI7XG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vU2ltcGxlRGlzcGxheUFydGljbGVcIjtcblxuY29uc3QgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKFxuICBcIkNoby1IeWVvbmppbidzIFRlY2ggU3RhY2tcIixcbiAgW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJUaHJlZS5qc1wiLCBcIlBpeGlKU1wiXSxcbiAgXCJDcmVhdGl2ZSBEZXZlbG9wZXJcIlxuKTtcblxuY29uc3QgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gIGxldCBkaXNwbGF5O1xuXG4gIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkKSB7XG4gICAgZGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=