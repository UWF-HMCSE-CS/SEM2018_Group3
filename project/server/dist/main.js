(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"debug\">\n  <div class=\"container\"\n    style=\"border:solid; width: 500px\">\n    <input mat-input\n      style=\"width: 90px;\"\n      placeholder=\"Debug options:\"\n      disabled=\"true\">\n    <button mat-button\n      routerLink=\"\">login</button>\n    <button mat-button\n      routerLink=\"user\">user</button>\n    <button mat-button\n      routerLink=\"professional\">professional</button>\n    <button mat-button\n      routerLink=\"/newAccount\">new account</button>\n  </div>\n\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.debug = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/professional/professional.component.ts");
/* harmony import */ var _new_account_new_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-account/new-account.component */ "./src/app/new-account/new-account.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _professional_search_professional_search_professional_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./professional/search-professional/search-professional.component */ "./src/app/professional/search-professional/search-professional.component.ts");
/* harmony import */ var _patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./patient/search-patient/search-patient.component */ "./src/app/patient/search-patient/search-patient.component.ts");
/* harmony import */ var _patient_profile_patient_profile_patient_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./patient/profile-patient/profile-patient.component */ "./src/app/patient/profile-patient/profile-patient.component.ts");
/* harmony import */ var _professional_profile_professional_profile_professional_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./professional/profile-professional/profile-professional.component */ "./src/app/professional/profile-professional/profile-professional.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faNotesMedical"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faUser"]);
var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'newAccount', component: _new_account_new_account_component__WEBPACK_IMPORTED_MODULE_11__["NewAccountComponent"] },
    { path: 'user', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_9__["PatientComponent"] },
    { path: 'professional', component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_10__["ProfessionalComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
    /*   { path: 'hero/:id', component: HeroDetailComponent },
    {
      path: 'heroes',
      component: HeroListComponent,
      data: { title: 'Heroes List' }
    },
    {
      path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent } */
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_9__["PatientComponent"],
                _professional_professional_component__WEBPACK_IMPORTED_MODULE_10__["ProfessionalComponent"],
                _new_account_new_account_component__WEBPACK_IMPORTED_MODULE_11__["NewAccountComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _professional_search_professional_search_professional_component__WEBPACK_IMPORTED_MODULE_21__["SearchProfessionalComponent"],
                _patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_22__["SearchPatientComponent"],
                _patient_profile_patient_profile_patient_component__WEBPACK_IMPORTED_MODULE_23__["ProfilePatientComponent"],
                _professional_profile_professional_profile_professional_component__WEBPACK_IMPORTED_MODULE_24__["ProfileProfessionalComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_25__["AboutUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-auto-columns: 300px 1fr 300px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 40px;\r\n      grid-template-areas: 'logo tabs profile';\r\n}\r\n\r\n.logo {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: logo;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  padding-top: 10px;\r\n}\r\n\r\n.tabs {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  grid-area: tabs;\r\n}\r\n\r\n.profile {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: profile;\r\n  padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n  <div class=\"logo\">\n    <fa-icon class=\"fa-2x\"\n      icon=\"notes-medical\"></fa-icon>&nbsp;\n    <span class=\"mat-typography\"\n      style=\"font-size: 20px;\">TheraStation</span>\n  </div>\n  <div class=\"tabs\">\n    <mat-tab-group>\n      <mat-tab label=\"Search\"> Content 1 </mat-tab>\n      <mat-tab label=\"About\"> Content 2 </mat-tab>\n      <mat-tab label=\"Search\"> Content 3 </mat-tab>\n    </mat-tab-group>\n  </div>\n  <div class=\"profile\">\n    <fa-icon class=\"fa-2x\"\n      icon=\"user\"></fa-icon>&nbsp;\n    <span class=\"mat-typography\"\n      style=\"font-size: 20px;\">name</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 1fr 10px 500px 10px 1fr;\r\n      grid-template-columns: 1fr 500px 1fr;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 200px;\r\n  -ms-grid-rows: auto 10px auto 10px auto;\r\n      grid-template-areas:\r\n  '. . .'\r\n  '. login .'\r\n  '. . .';\r\n}\r\n\r\n.login {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 3;\r\n  grid-area: login;\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n  vertical-align: middle;\r\n  border: solid;\r\n  border-radius: 5%;\r\n  background-color: #e8e8e8;\r\n  box-shadow: 10px 10px 5px grey;\r\n}\r\n\r\n@media only screen and (max-width: 500px) and (max-height: 500px) {\r\n  .login {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n  }\r\n}\r\n\r\n.form-components-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 200px 10px 200px;\r\n      grid-template-columns: 200px 200px;\r\n  grid-gap: 10px;\r\n  -ms-grid-rows: auto 10px auto 10px auto;\r\n      grid-template-areas:\r\n    'login-email    login-email'\r\n    'login-password login-password'\r\n    'login-button   login-new-account';\r\n}\r\n\r\n.login-email {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: login-email;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.login-password {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: login-password;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.login-button {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 1;\r\n  grid-area: login-button;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  background-color: lightgray;\r\n  margin-left: 40%;\r\n  margin-bottom: 10px;\r\n  max-height: 50px;\r\n  max-width: 100px;\r\n}\r\n\r\n.login-new-account {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 3;\r\n  grid-area: login-new-account;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  background-color: lightgray;\r\n  margin-bottom: 10px;\r\n  max-height: 50px;\r\n  max-width: 115px;\r\n}\r\n\r\n@media only screen and (max-width: 500px) and (max-height: 500px) {\r\n  .wrapper {\r\n        grid-template-areas:\r\n      '. login .';\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <div class=\"login\">\n    <form class=\"form-components-wrapper\"\n      #f=\"ngForm\"\n      (ngSubmit)=\"onSubmit()\">\n      <mat-form-field class=\"login-email\">\n        <input matInput\n               name=\"email\"\n               placeholder=\"Email\"\n               type=\"text\"\n               ngModel\n               required\n               email>\n      </mat-form-field>\n      <mat-form-field class=\"login-password\">\n        <input matInput\n               name=\"password\"\n               placeholder=\"Password\"\n               type=\"password\"\n               ngModel\n               required\n               password\n               minlength=\"8\">\n      </mat-form-field>\n      <button mat-button\n              type=\"submit\"\n              [disabled]=\"!f.valid\"\n              class=\"login-button\">Login</button>\n      <button mat-button\n              class=\"login-new-account\"\n              type=\"button\"\n              routerLink=\"/newAccount\">New Account</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function () {
        console.log('form submitted');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-account/new-account.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-account/new-account.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-account-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 1fr 10px 500px 10px 1fr;\r\n      grid-template-columns: 1fr 500px 1fr;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 200px;\r\n  -ms-grid-rows: auto 10px auto 10px auto;\r\n      grid-template-areas:\r\n    '. .           .'\r\n    '. new-account .'\r\n    '. .           .';\r\n}\r\n\r\n.new-account {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 3;\r\n  grid-area: new-account;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n  vertical-align: middle;\r\n  border: solid;\r\n  border-radius: 5%;\r\n  background-color: #e8e8e8;\r\n  box-shadow: 10px 10px 5px grey;\r\n}\r\n\r\n.new-account-form-component-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 200px 10px 200px;\r\n      grid-template-columns: 200px 200px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 45px;\r\n  -ms-grid-rows: auto 10px auto 10px auto 10px auto 10px auto 10px auto;\r\n      grid-template-areas:\r\n    'first-name last-name'\r\n    'address    address'\r\n    'email      password'\r\n    'type       type'\r\n    'type-select type-select'\r\n    'submit     submit';\r\n}\r\n\r\n.new-account-form-component-less {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 200px 10px 200px;\r\n      grid-template-columns: 200px 200px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 45px;\r\n  -ms-grid-rows: auto 10px auto 10px auto 10px auto 10px auto;\r\n      grid-template-areas:\r\n  'first-name last-name'\r\n  'address    address'\r\n  'email      password'\r\n  'type       type'\r\n  'submit     submit';\r\n}\r\n\r\n.first-name {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: first-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n}\r\n\r\n.last-name {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: last-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n}\r\n\r\n.address {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: address;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n}\r\n\r\n.email {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 1;\r\n  grid-area: email;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n}\r\n\r\n.password {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 3;\r\n  grid-area: password;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n}\r\n\r\n.type {\r\n  -ms-grid-row: 7;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: type;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.type-select {\r\n  -ms-grid-row: 9;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: type-select;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 100%;\r\n}\r\n\r\n.submit {\r\n  -ms-grid-row: 9;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: submit;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  background-color: lightgray;\r\n  max-height: 50px;\r\n  max-width: 175px;\r\n  margin-left: 27%;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/new-account/new-account.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-account/new-account.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-account-wrapper\">\n  <div class=\"new-account\">\n    <form [ngClass]=\"patientOrProfessional === 'professional' ? 'new-account-form-component-wrapper' : 'new-account-form-component-less'\"\n      #f=\"ngForm\"\n      (ngSubmit)=\"onSubmit()\">\n      <mat-form-field class=\"first-name\">\n        <input matInput\n               name=\"firstName\"\n               placeholder=\"First Name\"\n               type=\"text\"\n               ngModel\n               required>\n      </mat-form-field>\n      <mat-form-field class=\"last-name\">\n        <input matInput\n               name=\"lastName\"\n               placeholder=\"Last Name\"\n               type=\"text\"\n               ngModel\n               required>\n      </mat-form-field>\n      <mat-form-field class=\"address\">\n        <input matInput\n               name=\"address\"\n               placeholder=\"Address\"\n               type=\"text\"\n               ngModel\n               address>\n      </mat-form-field>\n      <mat-form-field class=\"email\">\n        <input matInput\n               name=\"email\"\n               placeholder=\"Email\"\n               type=\"text\"\n               ngModel\n               required\n               email>\n      </mat-form-field>\n      <mat-form-field class=\"password\">\n        <input matInput\n               name=\"password\"\n               placeholder=\"Password\"\n               type=\"password\"\n               ngModel\n               required\n               password\n               minlength=\"8\">\n      </mat-form-field>\n        <mat-radio-group class=\"type\" layout=\"row\" ngModel [(ngModel)]=\"patientOrProfessional\" name=\"patientOrProfessional\">\n          <mat-radio-button style=\"padding-left: 30px\" type=\"radio\" value=\"patient\">Looking for help</mat-radio-button>\n          <mat-radio-button style=\"padding-left: 30px\" type=\"radio\" value=\"professional\">Looking to help</mat-radio-button>\n        </mat-radio-group>\n      <div *ngIf=\"patientOrProfessional === 'professional'\" >\n        <mat-form-field style=\"padding-left: 60%; margin-bottom: 20px !important; max-width: 150px;\" >\n          <mat-select class=\"type-select\" placeholder=\"Type of Help\" required #select name=\"type\" ngModel>\n            <mat-option *ngFor=\"let professionalType of professionalTypes\"\n                        [value]=\"professionalType\">\n              {{ professionalType }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <button class=\"submit\" mat-button\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Create New Account</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-account/new-account.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-account/new-account.component.ts ***!
  \******************************************************/
/*! exports provided: NewAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountComponent", function() { return NewAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAccountComponent = /** @class */ (function () {
    function NewAccountComponent(router) {
        this.router = router;
        this.patientOrProfessional = 'patient';
        this.professionalTypes = ['Psychologist',
            'Therapist',
            'Psychiatrist',
            'Counselor',
            'Social Worker'];
        this.professionalTypeSelected = '';
    }
    NewAccountComponent.prototype.ngOnInit = function () {
    };
    NewAccountComponent.prototype.onSubmit = function () {
        console.log('new account submitted');
        console.log(this.form);
        var formSubmission = {
            firstName: this.form.value.firstName,
            lastName: this.form.value.lastName,
            address: this.form.value.address,
            email: this.form.value.email,
            password: this.form.value.password,
            type: this.form.value.patientOrProfessional,
        };
        if (this.form.value.patientOrProfessional.includes('professional')) {
            formSubmission.type = this.form.value.type;
        }
        console.log(formSubmission);
        // Take user back to login page
        this.router.navigateByUrl('/login');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NewAccountComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('select'),
        __metadata("design:type", Object)
    ], NewAccountComponent.prototype, "select", void 0);
    NewAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-account',
            template: __webpack_require__(/*! ./new-account.component.html */ "./src/app/new-account/new-account.component.html"),
            styles: [__webpack_require__(/*! ./new-account.component.css */ "./src/app/new-account/new-account.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewAccountComponent);
    return NewAccountComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-auto-columns: 300px 1fr 300px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 40px;\r\n      grid-template-areas: 'logo tabs profile';\r\n}\r\n\r\n.logo {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: logo;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  padding-top: 10px;\r\n}\r\n\r\n.tabs {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  grid-area: tabs;\r\n}\r\n\r\n.profile {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: profile;\r\n  padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n  <div class=\"logo\">\n    <fa-icon class=\"fa-2x\"\n      icon=\"notes-medical\"></fa-icon>&nbsp;\n    <span class=\"mat-typography\"\n      style=\"font-size: 20px;\">TheraStation</span>\n  </div>\n  <div class=\"tabs\">\n    <mat-tab-group>\n      <mat-tab label=\"Search\">\n        <app-search-patient></app-search-patient>\n      </mat-tab>\n      <mat-tab label=\"Profile\">\n        <app-profile-patient></app-profile-patient>\n      </mat-tab>\n      <mat-tab label=\"About Us\">\n        <app-about-us></app-about-us>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n  <div class=\"profile\">\n    <fa-icon class=\"fa-2x\"\n      icon=\"user\"></fa-icon>&nbsp;\n    <span class=\"mat-typography\"\n      style=\"font-size: 20px;\">{{ user.lastName }}, {{ user.firstName }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientComponent = /** @class */ (function () {
    function PatientComponent() {
        this.user = {
            firstName: 'Tony',
            lastName: 'Stark'
        };
    }
    PatientComponent.prototype.ngOnInit = function () { };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/patient/profile-patient/profile-patient.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/patient/profile-patient/profile-patient.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patient/profile-patient/profile-patient.component.html":
/*!************************************************************************!*\
  !*** ./src/app/patient/profile-patient/profile-patient.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-patient works!\n</p>\n"

/***/ }),

/***/ "./src/app/patient/profile-patient/profile-patient.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/patient/profile-patient/profile-patient.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfilePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePatientComponent", function() { return ProfilePatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePatientComponent = /** @class */ (function () {
    function ProfilePatientComponent() {
    }
    ProfilePatientComponent.prototype.ngOnInit = function () {
    };
    ProfilePatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-patient',
            template: __webpack_require__(/*! ./profile-patient.component.html */ "./src/app/patient/profile-patient/profile-patient.component.html"),
            styles: [__webpack_require__(/*! ./profile-patient.component.css */ "./src/app/patient/profile-patient/profile-patient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePatientComponent);
    return ProfilePatientComponent;
}());



/***/ }),

/***/ "./src/app/patient/search-patient/search-patient.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/patient/search-patient/search-patient.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patient/search-patient/search-patient.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/patient/search-patient/search-patient.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-patient works!\n</p>\n"

/***/ }),

/***/ "./src/app/patient/search-patient/search-patient.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/patient/search-patient/search-patient.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPatientComponent", function() { return SearchPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPatientComponent = /** @class */ (function () {
    function SearchPatientComponent() {
    }
    SearchPatientComponent.prototype.ngOnInit = function () {
    };
    SearchPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-patient',
            template: __webpack_require__(/*! ./search-patient.component.html */ "./src/app/patient/search-patient/search-patient.component.html"),
            styles: [__webpack_require__(/*! ./search-patient.component.css */ "./src/app/patient/search-patient/search-patient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchPatientComponent);
    return SearchPatientComponent;
}());



/***/ }),

/***/ "./src/app/professional/professional.component.css":
/*!*********************************************************!*\
  !*** ./src/app/professional/professional.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-auto-columns: 300px 1fr 300px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 40px;\r\n      grid-template-areas: 'logo tabs profile';\r\n}\r\n\r\n.logo {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: logo;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  padding-top: 10px;\r\n}\r\n\r\n.tabs {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  grid-area: tabs;\r\n}\r\n\r\n.profile {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: profile;\r\n  padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/professional/professional.component.html":
/*!**********************************************************!*\
  !*** ./src/app/professional/professional.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n  <div class=\"logo\">\n    <fa-icon class=\"fa-2x\"\n      icon=\"notes-medical\"></fa-icon>&nbsp;\n    <span class=\"mat-typography\"\n      style=\"font-size: 20px;\">TheraStation</span>\n  </div>\n  <div class=\"tabs\">\n    <mat-tab-group>\n      <mat-tab label=\"Search\">\n        <app-search-professional></app-search-professional>\n      </mat-tab>\n      <mat-tab label=\"Profile\">\n        <app-profile-professional></app-profile-professional>\n      </mat-tab>\n      <mat-tab label=\"About Us\">\n        <app-about-us></app-about-us>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n  <div class=\"profile\">\n    <fa-icon class=\"fa-2x\"\n      icon=\"user\"></fa-icon>&nbsp;\n    <span class=\"mat-typography\"\n      style=\"font-size: 20px;\">{{ user.lastName }}, {{ user.firstName }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/professional/professional.component.ts":
/*!********************************************************!*\
  !*** ./src/app/professional/professional.component.ts ***!
  \********************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
        this.user = {
            firstName: 'Oprah',
            lastName: 'Winfrey'
        };
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.css */ "./src/app/professional/professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "./src/app/professional/profile-professional/profile-professional.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/professional/profile-professional/profile-professional.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/professional/profile-professional/profile-professional.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/professional/profile-professional/profile-professional.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-professional works!\n</p>\n"

/***/ }),

/***/ "./src/app/professional/profile-professional/profile-professional.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/professional/profile-professional/profile-professional.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileProfessionalComponent", function() { return ProfileProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileProfessionalComponent = /** @class */ (function () {
    function ProfileProfessionalComponent() {
    }
    ProfileProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfileProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-professional',
            template: __webpack_require__(/*! ./profile-professional.component.html */ "./src/app/professional/profile-professional/profile-professional.component.html"),
            styles: [__webpack_require__(/*! ./profile-professional.component.css */ "./src/app/professional/profile-professional/profile-professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileProfessionalComponent);
    return ProfileProfessionalComponent;
}());



/***/ }),

/***/ "./src/app/professional/search-professional/search-professional.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/professional/search-professional/search-professional.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/professional/search-professional/search-professional.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/professional/search-professional/search-professional.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-professional works!\n</p>\n"

/***/ }),

/***/ "./src/app/professional/search-professional/search-professional.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/professional/search-professional/search-professional.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProfessionalComponent", function() { return SearchProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchProfessionalComponent = /** @class */ (function () {
    function SearchProfessionalComponent() {
    }
    SearchProfessionalComponent.prototype.ngOnInit = function () {
    };
    SearchProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-professional',
            template: __webpack_require__(/*! ./search-professional.component.html */ "./src/app/professional/search-professional/search-professional.component.html"),
            styles: [__webpack_require__(/*! ./search-professional.component.css */ "./src/app/professional/search-professional/search-professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchProfessionalComponent);
    return SearchProfessionalComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Joshu\Desktop\Code\Angular\SEM2018_Group3\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map