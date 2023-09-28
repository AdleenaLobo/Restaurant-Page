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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n\r\n*\r\n{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding:0;\r\n}\r\n\r\nhtml,body\r\n{\r\n    height:100%;\r\n    overflow: auto;\r\n}\r\n#content\r\n{\r\n    background-color: rgb(111, 243, 111);\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n.header\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #f5cef4;\r\n    gap: 5rem;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.floatingBlock\r\n{\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 3rem;\r\n    gap: 1rem;\r\n    border-radius: 2rem;\r\n    background-color: antiquewhite;\r\n    padding: 2rem;\r\n}\r\n\r\n\r\n.buttoncontainer\r\n{\r\n    margin: 1px;\r\n    display: flex;\r\n    gap: 2rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Homepage.js":
/*!*************************!*\
  !*** ./src/Homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   event: () => (/* binding */ event)\n/* harmony export */ });\n/* harmony import */ var _headingHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headingHome */ \"./src/headingHome.js\");\n/* harmony import */ var _bodyHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodyHome */ \"./src/bodyHome.js\");\n\r\n\r\nlet hcheck;\r\nfunction event()\r\n{\r\n    hcheck='null';\r\n    _headingHome__WEBPACK_IMPORTED_MODULE_0__.buttonHome.addEventListener('click' , homepage);\r\n}\r\n\r\n function homepage()\r\n { _bodyHome__WEBPACK_IMPORTED_MODULE_1__.innerDiv.setAttribute('name', 'Home');\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_1__.innerDiv.textContent=\"random\";\r\n }\r\n\r\n \n\n//# sourceURL=webpack://restaurant-page/./src/Homepage.js?");

/***/ }),

/***/ "./src/Menupage.js":
/*!*************************!*\
  !*** ./src/Menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   event2: () => (/* binding */ event2)\n/* harmony export */ });\n/* harmony import */ var _bodyHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyHome */ \"./src/bodyHome.js\");\n/* harmony import */ var _headingHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headingHome */ \"./src/headingHome.js\");\n\r\n\r\n\r\nfunction event2()\r\n{\r\n    _headingHome__WEBPACK_IMPORTED_MODULE_1__.buttonMenu.addEventListener('click' , Menupage);\r\n}\r\n\r\nfunction Menupage()\r\n{   _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.setAttribute('name', 'Menu');\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent=\"something\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/Menupage.js?");

/***/ }),

/***/ "./src/bodyHome.js":
/*!*************************!*\
  !*** ./src/bodyHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBody: () => (/* binding */ addBody),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   innerDiv: () => (/* binding */ innerDiv),\n/* harmony export */   leftButton: () => (/* binding */ leftButton),\n/* harmony export */   rightButton: () => (/* binding */ rightButton)\n/* harmony export */ });\n\r\nconst container = document.createElement('div');\r\nconst innerDiv = document.createElement('div');\r\nconst leftButton = document.createElement('button');\r\nconst rightButton = document.createElement('button');\r\n\r\nfunction createElem()\r\n{\r\n    leftButton.textContent = \"<\";\r\n    rightButton.textContent = \">\";\r\n    innerDiv.textContent = \"Mary had to make a decision and she knew that whatever decision she made, it would upset someone. It seemed like such a silly reason for people to get upset but she knew the minute that she began to consider doing it that there was no way everyone in her life would be pleased with what she ultimately decided to do. It was simply a question of who she would rather displease most. While this had always been her parents, and especially her mom, in the past that she tried to keep from upsetting, she decided that this time the person she was going to please the most with her decision was herself.\";\r\n\r\n}\r\n\r\nfunction addClass()\r\n{\r\n    container.classList.add('floatingBlock');\r\n    innerDiv.classList.add('inner');\r\n}\r\nfunction addBody()\r\n{\r\n    createElem();\r\n    container.appendChild(leftButton);\r\n    container.appendChild(innerDiv);\r\n    container.appendChild(rightButton);\r\n    addClass();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/bodyHome.js?");

/***/ }),

/***/ "./src/headingHome.js":
/*!****************************!*\
  !*** ./src/headingHome.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpecialFeatures: () => (/* binding */ SpecialFeatures),\n/* harmony export */   addElements: () => (/* binding */ addElements),\n/* harmony export */   buttonHome: () => (/* binding */ buttonHome),\n/* harmony export */   buttonMenu: () => (/* binding */ buttonMenu),\n/* harmony export */   division: () => (/* binding */ division)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_home_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/home.png */ \"./assets/home.png\");\n/* harmony import */ var _assets_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu.png */ \"./assets/menu.png\");\n/* harmony import */ var _assets_features_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/features.png */ \"./assets/features.png\");\n\r\n\r\n\r\n\r\n\r\nlet heading;\r\nlet buttonHome, buttonMenu , SpecialFeatures;\r\nlet division , subDiv;\r\nlet homeimage;\r\nlet menuimage;\r\nconst featuresimage= new Image();\r\n\r\nfunction createElements()\r\n{\r\n    division = document.createElement('div');\r\n    heading = document.createElement('h1');\r\n    heading.textContent = \"Carribean RoofTop Restaurant\";\r\n\r\n    subDiv = document.createElement('div');\r\n    buttonHome = document.createElement('button');\r\n    buttonHome.setAttribute('width', '50px');\r\n    homeimage = document.createElement('img');\r\n    homeimage.src=_assets_home_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    homeimage.setAttribute('height' , '20px');\r\n    homeimage.setAttribute('width' , '20px');\r\n\r\n    buttonMenu = document.createElement('button');\r\n    buttonMenu.setAttribute('width', '50px');\r\n    menuimage=document.createElement('img');\r\n    menuimage.src=_assets_menu_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    menuimage.setAttribute('height' , '20px');\r\n    menuimage.setAttribute('width' , '20px');\r\n\r\n    SpecialFeatures = document.createElement('button');\r\n    SpecialFeatures.setAttribute('width', '50px');\r\n    featuresimage.src=_assets_features_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    featuresimage.setAttribute('height', '20px');\r\n    featuresimage.setAttribute('width', '20px');\r\n\r\n}\r\n\r\n function addclasses()\r\n {\r\n    division.classList.add('header');\r\n    buttonHome.classList.add('Home');\r\n    buttonMenu.classList.add('Menu');\r\n    SpecialFeatures.classList.add('SF');\r\n    subDiv.classList.add('buttoncontainer');\r\n }\r\n\r\nfunction addElements()\r\n{\r\n    \r\n    createElements();\r\n    buttonHome.appendChild(homeimage);\r\n    buttonMenu.appendChild(menuimage);\r\n    SpecialFeatures.appendChild(featuresimage);\r\n\r\n    subDiv.appendChild(buttonHome);\r\n    subDiv.appendChild(buttonMenu);\r\n    subDiv.appendChild(SpecialFeatures);\r\n\r\n    division.appendChild(heading);\r\n    division.appendChild(subDiv);\r\n    \r\n    addclasses();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/headingHome.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n\r\n\r\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconsole.log(\"Hello world\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/leftbutton.js":
/*!***************************!*\
  !*** ./src/leftbutton.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   leftButton: () => (/* reexport safe */ _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton),\n/* harmony export */   leftbun: () => (/* binding */ leftbun)\n/* harmony export */ });\n/* harmony import */ var _bodyHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyHome */ \"./src/bodyHome.js\");\n\r\n\r\n\r\nlet arrhomecontent=['random' , 'random2' , 'random3'];\r\nlet arrmenucontent = ['something' , 'something2' , 'something3'];\r\nlet arrspcontent = ['anything' , 'anything2' , 'anything3'];\r\nfunction leftbun()\r\n{\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.addEventListener('click' , disp);\r\n}\r\n\r\nfunction disp()\r\n{\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled=false;\r\n    \r\n    if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.getAttribute(\"name\") == \"Home\")\r\n    {   let index;\r\n        for (let i =0; i<3 ; i++ )\r\n        {\r\n            if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent == arrhomecontent[i])\r\n            {\r\n                index=i;\r\n            }   \r\n        }\r\n\r\n        if(index == 0)\r\n        {_bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled= true;}\r\n        else\r\n        {\r\n            _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled= false;\r\n            _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent = arrhomecontent[--index];\r\n        }\r\n\r\n    }\r\n    else if (_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.getAttribute(\"name\") == \"Menu\")\r\n    {\r\n        let index;\r\n        {\r\n            for (let i = 0; i<3 ; i++ )\r\n            {\r\n                if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent == arrmenucontent[i])\r\n                {\r\n                    index=i;\r\n                }   \r\n            }\r\n    \r\n            if(index == 0)\r\n            {_bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled= true;}\r\n            else\r\n            {\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled= false;\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent = arrmenucontent[--index];\r\n            }\r\n    \r\n    }}\r\n    else if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.getAttribute(\"name\") == \"SP\")\r\n    {\r\n        let index;\r\n        {\r\n            for (let i = 0; i<3 ; i++ )\r\n            {\r\n                if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent == arrspcontent[i])\r\n                {\r\n                    index=i;\r\n                }   \r\n            }\r\n    \r\n            if(index == 0)\r\n            {\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled= true;\r\n            }\r\n            else\r\n            {\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled= false;\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent = arrspcontent[--index];\r\n            }\r\n        }\r\n}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/leftbutton.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _headingHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headingHome */ \"./src/headingHome.js\");\n/* harmony import */ var _bodyHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bodyHome */ \"./src/bodyHome.js\");\n/* harmony import */ var _Homepage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Homepage.js */ \"./src/Homepage.js\");\n/* harmony import */ var _Menupage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menupage */ \"./src/Menupage.js\");\n/* harmony import */ var _specialFeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specialFeatures */ \"./src/specialFeatures.js\");\n/* harmony import */ var _rightbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightbutton */ \"./src/rightbutton.js\");\n/* harmony import */ var _leftbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leftbutton */ \"./src/leftbutton.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet con;\r\n\r\n    function load ()\r\n    {\r\n        (0,_headingHome__WEBPACK_IMPORTED_MODULE_1__.addElements)();\r\n        (0,_bodyHome__WEBPACK_IMPORTED_MODULE_2__.addBody)();\r\n        con = document.getElementById('content');\r\n        con.appendChild(_headingHome__WEBPACK_IMPORTED_MODULE_1__.division);\r\n        con.appendChild(_bodyHome__WEBPACK_IMPORTED_MODULE_2__.container);\r\n        (0,_Homepage_js__WEBPACK_IMPORTED_MODULE_3__.event)();\r\n        (0,_Menupage__WEBPACK_IMPORTED_MODULE_4__.event2)();\r\n        (0,_specialFeatures__WEBPACK_IMPORTED_MODULE_5__.event3)();\r\n        (0,_leftbutton__WEBPACK_IMPORTED_MODULE_7__.leftbun)();\r\n        (0,_rightbutton__WEBPACK_IMPORTED_MODULE_6__.rightbun)();\r\n    };\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/rightbutton.js":
/*!****************************!*\
  !*** ./src/rightbutton.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rightbun: () => (/* binding */ rightbun)\n/* harmony export */ });\n/* harmony import */ var _bodyHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyHome */ \"./src/bodyHome.js\");\n\r\n\r\nlet arrhomecontent=['random' , 'random2' , 'random3'];\r\nlet arrmenucontent = ['something' , 'something2' , 'something3'];\r\nlet arrspcontent = ['anything' , 'anything2' , 'anything3'];\r\nfunction rightbun()\r\n{\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.addEventListener('click' , disp);\r\n}\r\n\r\nfunction disp()\r\n{\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.leftButton.disabled=false;\r\n    if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.getAttribute(\"name\") == \"Home\")\r\n    {   let index;\r\n        for (let i =0; i<3 ; i++ )\r\n        {\r\n            if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent == arrhomecontent[i])\r\n            {\r\n                index=i;\r\n            }   \r\n        }\r\n\r\n        if(index == 2)\r\n        {_bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled= true;}\r\n        else\r\n        {\r\n            _bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled= false;\r\n            _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent = arrhomecontent[++index];\r\n        }\r\n\r\n    }\r\n    else if (_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.getAttribute(\"name\") == \"Menu\")\r\n    {\r\n        let index;\r\n        {\r\n            for (let i = 0; i<3 ; i++ )\r\n            {\r\n                if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent == arrmenucontent[i])\r\n                {\r\n                    index=i;\r\n                }   \r\n            }\r\n    \r\n            if(index == 2)\r\n            {_bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled= true;}\r\n            else\r\n            {\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled= false;\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent = arrmenucontent[++index];\r\n            }\r\n    \r\n    }}\r\n    else if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.getAttribute(\"name\") == \"SP\")\r\n    {\r\n        let index;\r\n        {\r\n            for (let i = 0; i<3 ; i++ )\r\n            {\r\n                if(_bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent == arrspcontent[i])\r\n                {\r\n                    index=i;\r\n                }   \r\n            }\r\n    \r\n            if(index == 2)\r\n            {_bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled= true;}\r\n            else\r\n            {\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.rightButton.disabled= false;\r\n                _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent = arrspcontent[++index];\r\n            }\r\n        }\r\n}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/rightbutton.js?");

/***/ }),

/***/ "./src/specialFeatures.js":
/*!********************************!*\
  !*** ./src/specialFeatures.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   event3: () => (/* binding */ event3)\n/* harmony export */ });\n/* harmony import */ var _bodyHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyHome */ \"./src/bodyHome.js\");\n/* harmony import */ var _headingHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headingHome */ \"./src/headingHome.js\");\n\r\n\r\n\r\nfunction event3()\r\n{\r\n    _headingHome__WEBPACK_IMPORTED_MODULE_1__.SpecialFeatures.addEventListener('click' , speacialpage);\r\n}\r\n\r\nfunction speacialpage()\r\n{\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.setAttribute('name', 'SP');\r\n    _bodyHome__WEBPACK_IMPORTED_MODULE_0__.innerDiv.textContent=\"anything\";\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/specialFeatures.js?");

/***/ }),

/***/ "./assets/features.png":
/*!*****************************!*\
  !*** ./assets/features.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9777904045e6ea5ea1dd.png\";\n\n//# sourceURL=webpack://restaurant-page/./assets/features.png?");

/***/ }),

/***/ "./assets/home.png":
/*!*************************!*\
  !*** ./assets/home.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d9cbf445f6cf7d06362.png\";\n\n//# sourceURL=webpack://restaurant-page/./assets/home.png?");

/***/ }),

/***/ "./assets/menu.png":
/*!*************************!*\
  !*** ./assets/menu.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"053f6c0d28be9ed3792d.png\";\n\n//# sourceURL=webpack://restaurant-page/./assets/menu.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;