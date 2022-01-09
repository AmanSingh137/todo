"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = ()=>{\n    const { 0: userInput , 1: setUserInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: todoList , 1: setToDoList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setToDoList([\n            userInput,\n            ...todoList\n        ]);\n        setUserInput('');\n        document.getElementById('textField').value = '';\n    };\n    const handleDelete = (todo)=>{\n        const updatedArr = todoList.filter((todoItem)=>todoList.indexOf(todoItem) != todoList.indexOf(todo)\n        );\n        setToDoList(updatedArr);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"TO DO List\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"text\",\n                id: \"textField\",\n                onChange: handleChange,\n                __source: {\n                    fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: handleSubmit,\n                __source: {\n                    fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Add\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: todoList.length >= 1 ? todoList.map((item, index)=>{\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                        __source: {\n                            fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 32\n                        },\n                        __self: undefined,\n                        children: [\n                            item,\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(item);\n                                },\n                                __source: {\n                                    fileName: \"D:\\\\todo\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 54\n                                },\n                                __self: undefined,\n                                children: \"Delete\"\n                            })\n                        ]\n                    }, index));\n                }) : 'Enter a to-do!'\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFHaEMsS0FBSyxDQUFDQyxLQUFLLE9BQVEsQ0FBQztJQUVoQixLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSCwrQ0FBUSxDQUFDLENBQUU7SUFDN0MsS0FBSyxNQUFFSSxRQUFRLE1BQUVDLFdBQVcsTUFBSUwsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFM0MsS0FBSyxDQUFDTSxZQUFZLElBQUlDLENBQUMsR0FBSyxDQUFDO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJMLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsWUFBWSxJQUFJSixDQUFDLEdBQUssQ0FBQztRQUN6QkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCSCxXQUFXLENBQUMsQ0FBQ0g7WUFBQUEsU0FBUztlQUFLRSxRQUFRO1FBQUEsQ0FBQztRQUNwQ0QsWUFBWSxDQUFDLENBQUU7UUFDZlMsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBVyxZQUFFSCxLQUFLLEdBQUcsQ0FBRTtJQUNuRCxDQUFDO0lBRUQsS0FBSyxDQUFDSSxZQUFZLElBQUlDLElBQUksR0FBSyxDQUFDO1FBQzVCLEtBQUssQ0FBQ0MsVUFBVSxHQUFHWixRQUFRLENBQUNhLE1BQU0sRUFBRUMsUUFBUSxHQUFLZCxRQUFRLENBQUNlLE9BQU8sQ0FBQ0QsUUFBUSxLQUFLZCxRQUFRLENBQUNlLE9BQU8sQ0FBQ0osSUFBSTs7UUFDcEdWLFdBQVcsQ0FBQ1csVUFBVTtJQUMxQixDQUFDO0lBRUQsTUFBTSx1RUFDREksQ0FBRzs7Ozs7Ozs7aUZBQ0NDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBVTs7aUZBQ2JDLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBVztnQkFBQ0MsUUFBUSxFQUFFbkIsWUFBWTs7Ozs7Ozs7aUZBQ3ZEb0IsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFaEIsWUFBWTs7Ozs7OzswQkFBRSxDQUFHOztpRkFDakNpQixDQUFFOzs7Ozs7OzBCQUVLeEIsUUFBUSxDQUFDeUIsTUFBTSxJQUFJLENBQUMsR0FBR3pCLFFBQVEsQ0FBQzBCLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEdBQUssQ0FBQztvQkFDbEQsTUFBTSx1RUFBRUMsQ0FBRTs7Ozs7Ozs7NEJBQWNGLElBQUk7aUdBQUVMLENBQU07Z0NBQUNDLE9BQU8sR0FBR3BCLENBQUMsR0FBRyxDQUFDO29DQUNoREEsQ0FBQyxDQUFDQyxjQUFjO29DQUNoQk0sWUFBWSxDQUFDaUIsSUFBSTtnQ0FDckIsQ0FBQzs7Ozs7OzswQ0FBRSxDQUFNOzs7dUJBSE9DLEtBQUs7Z0JBSXpCLENBQUMsSUFBSSxDQUFnQjs7OztBQUt6QyxDQUFDO0FBRUQsaUVBQWUvQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9Eb0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VG9Eb0xpc3QoW3VzZXJJbnB1dCwgLi4udG9kb0xpc3RdKTtcclxuICAgICAgICBzZXRVc2VySW5wdXQoJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RmllbGQnKS52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEFyciA9IHRvZG9MaXN0LmZpbHRlcigodG9kb0l0ZW0pID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpO1xyXG4gICAgICAgIHNldFRvRG9MaXN0KHVwZGF0ZWRBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlRPIERPIExpc3Q8L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRleHRGaWVsZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49IDEgPyB0b2RvTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+e2l0ZW19PGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiAnRW50ZXIgYSB0by1kbyEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb0RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ1cGRhdGVkQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwiZGl2IiwiaDMiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();