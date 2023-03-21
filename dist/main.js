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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n}\\n\\n.content {\\n    width: 100vw;\\n    height: 100vh;\\n    display:grid;\\n    grid-template-columns: repeat(5, 1fr);\\n    grid-template-rows: repeat(5,1fr);\\n}\\n\\n.header {\\n    grid-column: 1 / 6;\\n    grid-row: 1/ 2;\\n    background-color: brown;\\n}\\n\\n.footer {\\n    grid-column: 1 / 6;\\n    grid-row: 5 / 6;\\n    background-color: brown;\\n}\\n\\n.navPanel {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 5;\\n    background-color: blueviolet;\\n    display:flex;\\n    flex-direction: column;\\n}\\n\\n.mainPanel {\\n    grid-column: 2 / 6;\\n    grid-row: 2 / 5;\\n    background-color: greenyellow;\\n}\\n\\n.projContainer {\\n    height: 80%;\\n    width: 100%;\\n    border-bottom: solid black;\\n    background-color: azure;\\n    overflow: scroll;\\n}\\n\\n.navPanel > button {\\n    justify-content: flex-end;\\n    align-items:flex-end;\\n    width: 15%;\\n    margin: 5px;\\n}\\n\\n.modalDiv {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%,-50%) scale(0);\\n    transition: 200ms ease-in-out;\\n    border: 1px black;\\n    border-radius: 5px;\\n    z-index: 10;\\n    background-color: rgb(10, 10, 71);\\n    width: 500px;\\n    max-width: 80%;\\n    height: 500px;\\n}\\n\\n.modalDiv.active {\\n    transform: translate(-50%, -50%) scale(1);\\n}\\n\\n.todoform {\\n    display: flex;\\n    flex-direction: column;\\n    width: 60%;\\n}\\n\\n.todoform > label {\\n    flex: 1;\\n    margin: 10px;\\n    color: white;\\n}\\n\\n.todoform > input {\\n    width: 100%;\\n    height: 20px;\\n}\\n\\n.closeModal {\\n    display: flex;\\n    justify-content: flex-end;\\n}\\n\\n.modalOverlay {\\n    position: fixed;\\n    transition: 200ms ease-in-out;\\n    opacity: 0;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background-color: rgba(0,0,0,.5);\\n    pointer-events:none;\\n}\\n\\n.modalOverlay.active {\\n    pointer-events: all;\\n    opacity: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-project/./src/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheet.css":
/*!****************************!*\
  !*** ./src/stylesheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-project/./src/stylesheet.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectConstructor\": () => (/* binding */ projectConstructor),\n/* harmony export */   \"todoConstructor\": () => (/* binding */ todoConstructor)\n/* harmony export */ });\n/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet.css */ \"./src/stylesheet.css\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n// import { loadTodos } from \"./domloader\";\n// todo constructor\nconst todoConstructor = (parentproj,title,description,duedate,priority) => {\n  \n  return {parentproj,title,description,duedate,priority}};\n\n\n// project constructor\nconst projectConstructor = (name) => {\n    let todo = [];\n  \n/*     const pushToArr = () => {\n      projectsArr.push(this);\n    };\n  \n    const delFromArr = () => {\n      const myArray = projectsArr.filter((item) => item.name !== this.name);\n  \n      projectsArr = myArray;\n    }; */\n  \n    return {name, todo, /* pushToArr, delFromArr */};\n  };\n\n//# sourceURL=webpack://todo-list-project/./src/constructors.js?");

/***/ }),

/***/ "./src/domloader.js":
/*!**************************!*\
  !*** ./src/domloader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createUi\": () => (/* binding */ createUi),\n/* harmony export */   \"laodModal\": () => (/* binding */ laodModal),\n/* harmony export */   \"loadTodos\": () => (/* binding */ loadTodos),\n/* harmony export */   \"navDomInteraction\": () => (/* binding */ navDomInteraction),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\n/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet.css */ \"./src/stylesheet.css\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n\n\n\n// eslint-disable-next-line import/extensions\n\n// function to remove all child elements\n// eslint-disable-next-line import/prefer-default-export\n\n// create element & append\nconst createElement = (type, tag, inner, parent) => {\n  let el = document.createElement(type);\n  el.classList.add(tag);\n  el.innerHTML = inner;\n  parent.appendChild(el);\n};\n\n// function removes all child nodes in a div\nconst removeAllChildNodes = (parent) => {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n};\n\n// function loads todos to main panel div\nconst loadTodos = (projname) => {\n  const mainNav = document.querySelector(\".mainPanel\");\n  removeAllChildNodes(mainNav);\n\n  const newArr = _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.filter((item) => item.name.replace(/\\s/g, \"\") === projname)\n    .map((x) => x.todo);\n\n  if (newArr.length > 0) {\n    newArr[0].forEach((item) => {\n\n    createElement(\"div\",`${projname}todo`,null,mainNav);\n    const todoDiv = document.querySelector(`.${projname}todo`);\n \n    // create divs for todo details\n     createElement(\"div\",null,item.title,todoDiv);\n     createElement(\"div\",null,item.duedate,todoDiv);\n     createElement(\"div\",null,item.description,todoDiv);\n     createElement(\"div\",null,item.priority,todoDiv);\n     createElement(\"button\",`delete${item.title}`,\"Delete\",todoDiv);\n \n     const delTodoButton = document.querySelector(`.delete${item.title}`);\n \n     delTodoButton.addEventListener('click',(e) => {\n \n       _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((items) => {\n         if (items.name === e.target.parentElement.classList.value.replace(/todo/,\"\")) {\n           items.todo.forEach((beop) => {\n             if (beop.title === e.target.classList.value.replace(/delete/,\"\")) {\n             items.todo.splice(items.todo.indexOf(beop),1);\n             };\n           })\n           loadTodos(e.target.parentElement.classList.value.replace(/todo/,\"\"));\n           navDomInteraction();\n         }\n\n       });\n     })\n   });\n  };  \n\n  // create addTodo div so user can add divs in each window\n  createElement(\"div\", `${projname}add`, \"Add\", mainNav);\n\n  const addTodoDiv = document.querySelector(`.${projname}add`);\n  createElement(\"button\", \"addTodoButton\", \"+\", addTodoDiv);\n\n  const addTodoButton = document.querySelector(\".addTodoButton\");\n\n  addTodoButton.addEventListener(\"click\", () => {\n    const modalSelector = document.querySelector(\".modalDiv\");\n    modalSelector.classList.add(\"active\");\n\n    const overlaySelector = document.querySelector(\".modalOverlay\");\n    overlaySelector.classList.add(\"active\");\n  });\n};\n\nconst navDomInteraction = () => {\n  // clear projects div\n  removeAllChildNodes(document.querySelector(\".projContainer\"));\n  const projContainer = document.querySelector(\".projContainer\");\n\n  // loads dom objects to nav panel\n  _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((item) => {\n\n    const proj = document.createElement(\"div\");\n    proj.classList.add(item.name.replace(/\\s/g, \"\"));\n\n    proj.innerText = `${item.name}\n        Todo: ${item.todo.length}`;\n\n    projContainer.appendChild(proj);\n\n        // event listener for div to load todos to main nav on click\n        proj.addEventListener(\"click\", (e) => {\n          // load todo's for specific projects on click\n          loadTodos(e.target.className);\n        });\n\n        createElement(\"button\",`projDelButton${item.name}`,\"Del\",proj);\n        const projDelButton = document.querySelector(`.projDelButton${item.name}`);\n\n        projDelButton.addEventListener('click',(e) => {\n\n          _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((item) => {\n            if (item.name === e.target.parentElement.classList.value) {\n              _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.splice(_index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(item),1)\n              navDomInteraction();\n            }\n          });\n        });\n\n  });\n};\n\n\n\n// addTodoModal\nconst laodModal = () => {\n  const mainDiv = document.querySelector(\".content\");\n\n  // overlay whilst modal is open\n  createElement(\"div\", \"modalOverlay\", null, mainDiv);\n\n  // create modal\n  createElement(\"div\", \"modalDiv\", null, mainDiv);\n  const modalDiv = document.querySelector(\".modalDiv\");\n\n  // create button to close modal\n  createElement(\"button\", \"closeModal\", \"X\", modalDiv);\n  const closeModal = document.querySelector(\".closeModal\");\n  closeModal.addEventListener(\"click\", () => {\n    modalDiv.classList.remove(\"active\");\n\n    const modalOverlay = document.querySelector(\".modalOverlay\");\n    modalOverlay.classList.remove(\"active\");\n  });\n\n  // create form\n  createElement(\"form\", \"todoform\", null, modalDiv);\n  const todoform = document.querySelector(\".todoform\");\n\n  // create title input\n  createElement(\"label\", \"todoNameLabel\", \"Name\", todoform);\n  const todoNameLabel = (document.querySelector(\".todoNameLabel\").htmlFor = \"todoName\");\n  createElement(\"input\", \"todoName\", null, todoform);\n  const todoName = document.querySelector(\".todoName\");\n  todoName.type = \"text\";\n\n  // create due date\n  createElement(\"label\", \"todoDateLabel\", \"Due Date\", todoform);\n  const todoDateLabel = (document.querySelector(\".todoDateLabel\").htmlFor = \"todoDate\");\n  createElement(\"input\", \"todoDate\", null, todoform);\n  const todoDate = document.querySelector(\".todoDate\");\n  todoDate.type = \"date\";\n\n  // create description\n  createElement(\"label\", \"todoDescLabel\", \"Description\", todoform);\n  const todoDescLabel = (document.querySelector(\".todoDescLabel\").htmlFor = \"todoDesc\");\n  createElement(\"input\", \"todoDesc\", null, todoform);\n  const todoDesc = document.querySelector(\".todoDesc\");\n  todoDesc.type = \"Text\";\n\n  // load priority\n  createElement(\"label\", \"todoPriorityLabel\", \"Priority\", todoform);\n  const todoPriorityLabel = (document.querySelector(\".todoDescLabel\").htmlFor = \"todoPriority\");\n  createElement(\"input\", \"todoPriority\", null, todoform);\n  const todoPriority = document.querySelector(\".todoPriority\");\n  todoPriority.type = \"Text\";\n\n  // add button to push new todo to relevant project\n  createElement(\"button\", \"addTodo\", \"Add\", modalDiv);\n  const addTodo = document.querySelector(\".addTodo\");\n\n  addTodo.addEventListener(\"click\", () => {\n    let mainNav = document.querySelector(\".mainPanel\").firstChild.classList.value\n    let finishedNav = \"\";\n\n    // if statement for if there are no todos.\n    if (mainNav.slice(-3) === \"add\") {\n      finishedNav = mainNav.replace(/add/,\"\");\n      console.log(finishedNav);\n    } else {\n      finishedNav = mainNav.replace(/todo/,\"\");\n      console.log(finishedNav);\n    };\n\n    let newTodo = (0,_constructors__WEBPACK_IMPORTED_MODULE_2__.todoConstructor)(\n      finishedNav,\n      todoName.value,\n      todoDesc.value,\n      todoDate.value,\n      todoPriority.value\n    );\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((item) => {\n      if (item.name === newTodo.parentproj) {\n        item.todo.push(newTodo);\n      }\n    });\n\n// clear & close modal\ntodoName.value = \"\";\ntodoDesc.value = \"\";\ntodoDate.value = \"\";\ntodoPriority.value = \"\";\n\nconst modal = document.querySelector(\".modalDiv\").classList.remove(\"active\");\nconst modalOverlay = document.querySelector(\".modalOverlay\").classList.remove(\"active\");\n\n// reload projects (for counters)\nnavDomInteraction();\n// reload todos\nloadTodos(finishedNav);\n\n  });\n};\n\nconst createUi = () => {\n  // main divs\n  const mainDiv = document.querySelector(\".content\");\n\n  createElement(\"div\",\"header\",null,mainDiv);\n  createElement(\"div\",\"navPanel\",null,mainDiv);\n  createElement(\"div\",\"mainPanel\",null,mainDiv);\n  createElement(\"div\",\"footer\",null,mainDiv);\n\n  const navPanel = document.querySelector(\".navPanel\");\n\n  // nav div setup\n  createElement(\"div\",\"projContainer\",null,navPanel);\n  const projContainer = document.querySelector(\".projContainer\");\n  createElement(\"button\",\"addButton\",\"Add\",navPanel);\n  const projAddButton = document.querySelector(\".addButton\");\n  createElement(\"input\",\"nameInput\",null,navPanel);\n  const nameInput = document.querySelector(\".nameInput\");\n  nameInput.type = \"text\";\n  nameInput.placeholder = \"project name\";\n\n  // event listener for add button\n  projAddButton.addEventListener(\"click\", () => {\n    if (nameInput.value === \"\") {\n      // eslint-disable-next-line no-alert\n      alert(\"New project needs a name!\");\n    } else {\n      const newProj = (0,_constructors__WEBPACK_IMPORTED_MODULE_2__.projectConstructor)(nameInput.value);\n      _index__WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(newProj);\n      console.log(_index__WEBPACK_IMPORTED_MODULE_1__.projectsArr);\n      removeAllChildNodes(projContainer);\n      navDomInteraction();\n      nameInput.value = null;\n    }\n  });\n};\n\n\n//# sourceURL=webpack://todo-list-project/./src/domloader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsArr\": () => (/* binding */ projectsArr)\n/* harmony export */ });\n/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet.css */ \"./src/stylesheet.css\");\n/* harmony import */ var _domloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domloader */ \"./src/domloader.js\");\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n\n\n\n\n// create array for projects & todo items\n// eslint-disable-next-line import/prefer-default-export, import/no-mutable-exports\nlet projectsArr = [\n  {\n    name: \"tester\",\n    todo: [\n      {\n        parentproj: \"tester\",\n        title: \"test1\",\n        duedate: \"01.01.2023\",\n        description: \"This is a test desctiption of a test todo list item\",\n        priority: \"high\"\n      },\n    ],\n  },\n];\n\n// setup UI for todo page\n(0,_domloader__WEBPACK_IMPORTED_MODULE_1__.createUi)();\n\n// dom loader for projects list & todo's\n(0,_domloader__WEBPACK_IMPORTED_MODULE_1__.navDomInteraction)();\n\n// loads modal\n(0,_domloader__WEBPACK_IMPORTED_MODULE_1__.laodModal)();\n\n\n//# sourceURL=webpack://todo-list-project/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;