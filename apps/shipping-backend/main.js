(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

/***/ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ngfactory.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/vaan/fedtest/ng-assessment/libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ngfactory.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: RenderType_SharedUiComponentExampleComponent, View_SharedUiComponentExampleComponent_0, View_SharedUiComponentExampleComponent_Host_0, SharedUiComponentExampleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SharedUiComponentExampleComponent", function() { return RenderType_SharedUiComponentExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SharedUiComponentExampleComponent_0", function() { return View_SharedUiComponentExampleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SharedUiComponentExampleComponent_Host_0", function() { return View_SharedUiComponentExampleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUiComponentExampleComponentNgFactory", function() { return SharedUiComponentExampleComponentNgFactory; });
/* harmony import */ var _shared_ui_component_example_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-ui-component-example.component.scss.shim.ngstyle */ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_ui_component_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-ui-component-example.component */ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_SharedUiComponentExampleComponent = [_shared_ui_component_example_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SharedUiComponentExampleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SharedUiComponentExampleComponent, data: {} });

function View_SharedUiComponentExampleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" shared-ui-component-example works!\n"]))], null, null); }
function View_SharedUiComponentExampleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ss-shared-ui-component-example", [], null, null, null, View_SharedUiComponentExampleComponent_0, RenderType_SharedUiComponentExampleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_ui_component_example_component__WEBPACK_IMPORTED_MODULE_2__["SharedUiComponentExampleComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SharedUiComponentExampleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ss-shared-ui-component-example", _shared_ui_component_example_component__WEBPACK_IMPORTED_MODULE_2__["SharedUiComponentExampleComponent"], View_SharedUiComponentExampleComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.scss.shim.ngstyle.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/vaan/fedtest/ng-assessment/libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpLWNvbXBvbmVudHMvc3JjL2xpYi9zaGFyZWQtdWktY29tcG9uZW50LWV4YW1wbGUvc2hhcmVkLXVpLWNvbXBvbmVudC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/vaan/fedtest/ng-assessment/libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SharedUiComponentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUiComponentExampleComponent", function() { return SharedUiComponentExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class SharedUiComponentExampleComponent {
    constructor() { }
    ngOnInit() { }
}


/***/ }),

/***/ "../../libs/ui-components/src/lib/ui-components.module.ts":
/*!********************************************************************************************!*\
  !*** /Users/vaan/fedtest/ng-assessment/libs/ui-components/src/lib/ui-components.module.ts ***!
  \********************************************************************************************/
/*! exports provided: UiComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponentsModule", function() { return UiComponentsModule; });
class UiComponentsModule {
}


/***/ }),

/***/ "../../node_modules/@angular/router/router.ngfactory.js":
/*!******************************************************************************************!*\
  !*** /Users/vaan/fedtest/ng-assessment/node_modules/@angular/router/router.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_0, View_ɵangular_packages_router_router_l_Host_0, ɵangular_packages_router_router_lNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵangular_packages_router_router_l", function() { return RenderType_ɵangular_packages_router_router_l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_0", function() { return View_ɵangular_packages_router_router_l_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_Host_0", function() { return View_ɵangular_packages_router_router_l_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_lNgFactory", function() { return ɵangular_packages_router_router_lNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵangular_packages_router_router_lNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });

function View_ɵangular_packages_router_router_l_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵangular_packages_router_router_l_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], [], null, null)], null, null); }
var ɵangular_packages_router_router_lNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app-shell/app-shell.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/app-shell/app-shell.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3NoaXBwaW5nL3NyYy9hcHAvYXBwLXNoZWxsL2FwcC1zaGVsbC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app-shell/app-shell.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/app-shell/app-shell.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_AppShellComponent, View_AppShellComponent_0, View_AppShellComponent_Host_0, AppShellComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppShellComponent", function() { return RenderType_AppShellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppShellComponent_0", function() { return View_AppShellComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppShellComponent_Host_0", function() { return View_AppShellComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellComponentNgFactory", function() { return AppShellComponentNgFactory; });
/* harmony import */ var _app_shell_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-shell.component.css.shim.ngstyle */ "./src/app/app-shell/app-shell.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-shell.component */ "./src/app/app-shell/app-shell.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppShellComponent = [_app_shell_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppShellComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppShellComponent, data: {} });

function View_AppShellComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" app-shell works!\n"]))], null, null); }
function View_AppShellComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ship-app-shell", [], null, null, null, View_AppShellComponent_0, RenderType_AppShellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_shell_component__WEBPACK_IMPORTED_MODULE_2__["AppShellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppShellComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ship-app-shell", _app_shell_component__WEBPACK_IMPORTED_MODULE_2__["AppShellComponent"], View_AppShellComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app-shell/app-shell.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/app-shell.component.ts ***!
  \**************************************************/
/*! exports provided: AppShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellComponent", function() { return AppShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class AppShellComponent {
    constructor() { }
    ngOnInit() { }
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_ui_components_src_lib_shared_ui_component_example_shared_ui_component_example_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ngfactory */ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ngfactory.js");
/* harmony import */ var _libs_ui_components_src_lib_shared_ui_component_example_shared_ui_component_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component */ "../../libs/ui-components/src/lib/shared-ui-component-example/shared-ui-component-example.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Welcome to ", "!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"], ["width", "450"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" This is an Angular app built with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["href", "https://nx.dev"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nx"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \uD83D\uDD0E **Nx is a set of Angular CLI power-ups for modern development.**\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quick Start & Documentation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "a", [["href", "https://nx.dev/getting-started/what-is-nx"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["30-minute video showing all Nx features"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "a", [["href", "https://nx.dev/tutorial/01-create-application"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Interactive tutorial"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "ss-shared-ui-component-example", [], null, null, null, _libs_ui_components_src_lib_shared_ui_component_example_shared_ui_component_example_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SharedUiComponentExampleComponent_0"], _libs_ui_components_src_lib_shared_ui_component_example_shared_ui_component_example_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SharedUiComponentExampleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _libs_ui_components_src_lib_shared_ui_component_example_shared_ui_component_example_component__WEBPACK_IMPORTED_MODULE_3__["SharedUiComponentExampleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 21, 0); _ck(_v, 23, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ship-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ship-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3NoaXBwaW5nL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'shipping';
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _app_shell_app_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-shell/app-shell.component.ngfactory */ "./src/app/app-shell/app-shell.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-shell/app-shell.component */ "./src/app/app-shell/app-shell.component.ts");
/* harmony import */ var _libs_ui_components_src_lib_ui_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../libs/ui-components/src/lib/ui-components.module */ "../../libs/ui-components/src/lib/ui-components.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_17__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"], _app_shell_app_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AppShellComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"]], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_server_platform_server_f"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_13__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_h"](p1_0, p1_1, p1_2), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p2_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p3_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[], [{ path: "shell", component: _app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_14__["AppShellComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _libs_ui_components_src_lib_ui_components_module__WEBPACK_IMPORTED_MODULE_15__["UiComponentsModule"], _libs_ui_components_src_lib_ui_components_module__WEBPACK_IMPORTED_MODULE_15__["UiComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_16__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_16__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_17__["ModuleMapLoaderModule"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_17__["ModuleMapLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-shell/app-shell.component */ "./src/app/app-shell/app-shell.component.ts");


const routes = [
    { path: 'shell', component: _app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_1__["AppShellComponent"] }
];
class AppServerModule {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    hmr: false
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vaan/fedtest/ng-assessment/apps/shipping/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map