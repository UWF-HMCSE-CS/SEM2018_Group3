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

module.exports = ".about-us-text {\r\n  font-size: 18px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-left: 10px; margin-right: 10px;\">\r\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere. Iaculis eu non diam phasellus. Eget duis at tellus at urna condimentum mattis pellentesque id. Viverra orci sagittis eu volutpat odio facilisis mauris. Varius vel pharetra vel turpis nunc. Suspendisse interdum consectetur libero id faucibus. Sem fringilla ut morbi tincidunt augue interdum velit. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Commodo quis imperdiet massa tincidunt nunc pulvinar. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Faucibus et molestie ac feugiat sed. Nunc pulvinar sapien et ligula. Adipiscing elit pellentesque habitant morbi tristique senectus. Adipiscing commodo elit at imperdiet dui. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.\r\n</p>\r\n<p style=\"margin-left: 10px; margin-right: 10px;\">\r\n  Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Viverra adipiscing at in tellus integer feugiat. Purus sit amet luctus venenatis lectus magna fringilla. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Faucibus nisl tincidunt eget nullam non nisi. Placerat orci nulla pellentesque dignissim enim sit amet. Nulla aliquet porttitor lacus luctus accumsan. Enim lobortis scelerisque fermentum dui faucibus. At quis risus sed vulputate.\r\n</p>\r\n<p style=\"margin-left: 10px; margin-right: 10px;\">\r\n  Orci dapibus ultrices in iaculis nunc sed augue. Tempus urna et pharetra pharetra massa. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elementum curabitur vitae nunc sed. Adipiscing elit duis tristique sollicitudin nibh sit. Arcu ac tortor dignissim convallis aenean et. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Tristique senectus et netus et malesuada fames ac turpis egestas. Quisque id diam vel quam elementum pulvinar etiam non. Suspendisse sed nisi lacus sed viverra tellus. Congue eu consequat ac felis donec. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Scelerisque eu ultrices vitae auctor eu augue ut. Phasellus egestas tellus rutrum tellus pellentesque. Nullam ac tortor vitae purus. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. In cursus turpis massa tincidunt dui ut ornare lectus sit.\r\n</p>\r\n"

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

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/professional/professional.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patient/search-patient/search-patient.component */ "./src/app/patient/search-patient/search-patient.component.ts");
/* harmony import */ var _patient_profile_patient_profile_patient_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patient/profile-patient/profile-patient.component */ "./src/app/patient/profile-patient/profile-patient.component.ts");
/* harmony import */ var _professional_profile_professional_profile_professional_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./professional/profile-professional/profile-professional.component */ "./src/app/professional/profile-professional/profile-professional.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _login_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login-dialog/login-dialog.component */ "./src/app/login/login-dialog/login-dialog.component.ts");
/* harmony import */ var _login_new_account_dialog_new_account_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/new-account-dialog/new-account-dialog.component */ "./src/app/login/new-account-dialog/new-account-dialog.component.ts");
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
/* harmony import */ var _appointments_professional_cancellation_dialog_professional_cancellation_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./appointments/professional-cancellation-dialog/professional-cancellation-dialog.component */ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faNotesMedical"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAngleLeft"]);
var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'user', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_8__["PatientComponent"] },
    { path: 'professional', component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_9__["ProfessionalComponent"] },
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
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_8__["PatientComponent"],
                _professional_professional_component__WEBPACK_IMPORTED_MODULE_9__["ProfessionalComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_14__["SearchPatientComponent"],
                _patient_profile_patient_profile_patient_component__WEBPACK_IMPORTED_MODULE_15__["ProfilePatientComponent"],
                _professional_profile_professional_profile_professional_component__WEBPACK_IMPORTED_MODULE_16__["ProfileProfessionalComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__["AboutUsComponent"],
                _login_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_20__["LoginDialogComponent"],
                _login_new_account_dialog_new_account_dialog_component__WEBPACK_IMPORTED_MODULE_21__["NewAccountDialogComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_22__["AppointmentsComponent"],
                _appointments_professional_cancellation_dialog_professional_cancellation_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ProfessionalCancellationDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"]
            ],
            entryComponents: [_login_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_20__["LoginDialogComponent"], _login_new_account_dialog_new_account_dialog_component__WEBPACK_IMPORTED_MODULE_21__["NewAccountDialogComponent"], _appointments_professional_cancellation_dialog_professional_cancellation_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ProfessionalCancellationDialogComponent"]],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointments/appointments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/appointments/appointments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"mat-typography requested-appointments-text\">\r\n  &nbsp;Requested Appointments\r\n</p>\r\n<table mat-table\r\n  [dataSource]=\"dataSourceTop\">\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[0] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">\r\n      {{ element.name.firstName }} {{ element.name.lastName }}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[1] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">{{ element.date }}</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"About\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[2] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\"\r\n      matTooltip=\"{{ element.about.bio }}\">\r\n      {{ element.about.text }}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"isPatient\"\r\n    matColumnDef=\"Modify\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[3] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">\r\n      <button class=\"cancel-button\"\r\n        mat-button\r\n        (click)=\"updateAppointment(element.modify, false)\">\r\n        Cancel\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!isPatient\"\r\n    matColumnDef=\"Modify\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[3] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">\r\n      <button class=\"approve-button\"\r\n        mat-button\r\n        (click)=\"updateAppointment(element.modify, true, false)\">\r\n        Approve\r\n      </button>\r\n      <button class=\"cancel-button\"\r\n        mat-button\r\n        (click)=\"updateAppointment(element.modify, false, false)\">\r\n        Deny\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row\r\n    style=\"height: 30px !important;\"\r\n    *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row\r\n    style=\"height: 30px !important;\"\r\n    *matRowDef=\"let row; columns: columns\"></tr>\r\n</table>\r\n\r\n<p class=\"mat-typography\"\r\n  style=\"font-size: 20px; position: relative; bottom: 4px;\">\r\n  &nbsp;Approved Appointments\r\n</p>\r\n<table mat-table\r\n  [dataSource]=\"dataSourceBottom\">\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[0] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">\r\n      {{ element.name.firstName }} {{ element.name.lastName }}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[1] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">{{ element.date }}</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"About\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[2] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\"\r\n      matTooltip=\"{{ element.about.bio }}\">\r\n      {{ element.about.text }}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Modify\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[3] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">\r\n      <button class=\"cancel-button\"\r\n        mat-button\r\n        (click)=\"updateAppointment(element.modify, false, true)\">\r\n        Cancel\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row\r\n    style=\"height: 30px !important;\"\r\n    *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row\r\n    style=\"height: 30px !important;\"\r\n    *matRowDef=\"let row; columns: columns\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/appointments/appointments.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/appointments/appointments.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 100%; }\n\n.requested-appointments-text {\n  font-size: 20px;\n  position: relative;\n  bottom: 4px;\n  padding-top: 10px; }\n\n.cancel-button {\n  display: -ms-grid;\n  display: grid;\n  border: solid;\n  border-radius: 20%;\n  border-color: red;\n  color: red;\n  background-color: white;\n  height: 35px; }\n\n.approve-button {\n  display: -ms-grid;\n  display: grid;\n  border: solid;\n  border-radius: 20%;\n  border-color: green;\n  color: green;\n  background-color: white;\n  height: 35px; }\n"

/***/ }),

/***/ "./src/app/appointments/appointments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/appointments/appointments.component.ts ***!
  \********************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _professional_cancellation_dialog_professional_cancellation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professional-cancellation-dialog/professional-cancellation-dialog.component */ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_account_type_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/account-type.model */ "./src/app/models/account-type.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(data, dialog) {
        this.data = data;
        this.dialog = dialog;
        this.columns = ['Name', 'Date', 'About', 'Modify'];
        this.loggedInUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.allProfessionals = [];
        this.allPatients = [];
        this.accountTypes = new _models_account_type_model__WEBPACK_IMPORTED_MODULE_5__["AccountType"]();
        this.requestedDone = false;
        this.approvedDone = false;
        this.isPatient = true;
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLoggedInUser().subscribe(function (user) {
            if (user.type !== undefined) {
                _this.loggedInUser = user;
                if (_this.loggedInUser.type.includes(_this.accountTypes.PATIENT)) {
                    _this.isPatient = true;
                }
                else {
                    _this.isPatient = false;
                }
                (_this.requestedDone = false), (_this.approvedDone = false);
                if (_this.loggedInUser.type.includes(_this.accountTypes.PATIENT)) {
                    if (_this.allProfessionals.length > 0) {
                        _this.setRequestedAppointents(_this.accountTypes.PATIENT);
                        _this.setApprovedAppointments(_this.accountTypes.PATIENT);
                    }
                }
                else {
                    if (_this.allPatients.length > 0) {
                        _this.setRequestedAppointents('Professional');
                        _this.setApprovedAppointments('Professional');
                    }
                }
            }
        });
        if (this.loggedInUser.type !== undefined &&
            this.loggedInUser.type.includes(this.accountTypes.PATIENT)) {
            this.data.getAllProfessionals().subscribe(function (allProfs) {
                _this.allProfessionals = allProfs;
                if (_this.allProfessionals.length > 0) {
                    _this.setRequestedAppointents(_this.accountTypes.PATIENT);
                    _this.setApprovedAppointments(_this.accountTypes.PATIENT);
                }
            });
        }
        else {
            this.data.getAllPatients().subscribe(function (allPatients) {
                _this.allPatients = allPatients;
                if (_this.allPatients.length > 0) {
                    _this.setRequestedAppointents('Professional');
                    _this.setApprovedAppointments('Professional');
                }
            });
        }
    };
    AppointmentsComponent.prototype.setRequestedAppointents = function (type) {
        var _this = this;
        var requestedAppointments = [];
        if (type.includes(this.accountTypes.PATIENT) &&
            this.allProfessionals.length > 0 &&
            !this.requestedDone) {
            this.loggedInUser.requestedAppointments.forEach(function (appt) {
                appt.dateTime = new Date(appt.dateTime);
                var hours = appt.dateTime.getHours();
                var timeString;
                if (hours > 12) {
                    hours = hours - 12;
                    timeString = hours.toString() + 'pm';
                }
                else {
                    timeString = hours.toString() + 'am';
                }
                _this.allProfessionals.forEach(function (prof) {
                    if (appt.id === prof._id) {
                        var requestedAppointment = {
                            _id: prof._id,
                            name: { firstName: prof.firstName, lastName: prof.lastName },
                            date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
                            about: { text: 'Scroll over for bio!', bio: prof.bio },
                            modify: appt
                        };
                        requestedAppointments.push(requestedAppointment);
                    }
                });
            });
            this.requestedDone = true;
            this.dataSourceTop = requestedAppointments;
        }
        else if (!type.includes(this.accountTypes.PATIENT) &&
            this.allPatients.length > 0 &&
            !this.requestedDone) {
            this.loggedInUser.requestedAppointments.forEach(function (appt) {
                appt.dateTime = new Date(appt.dateTime);
                var hours = appt.dateTime.getHours();
                var timeString;
                if (hours > 12) {
                    hours = hours - 12;
                    timeString = hours.toString() + 'pm';
                }
                else {
                    timeString = hours.toString() + 'am';
                }
                _this.allPatients.forEach(function (patient) {
                    if (appt.id === patient._id) {
                        var requestedAppointment = {
                            _id: patient._id,
                            name: {
                                firstName: patient.firstName,
                                lastName: patient.lastName
                            },
                            date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
                            about: { text: 'Scroll over for bio!', bio: patient.bio },
                            modify: appt
                        };
                        requestedAppointments.push(requestedAppointment);
                    }
                });
            });
            this.requestedDone = true;
            this.dataSourceTop = requestedAppointments;
        }
    };
    AppointmentsComponent.prototype.setApprovedAppointments = function (type) {
        var _this = this;
        var approvedAppointments = [];
        if (type.includes(this.accountTypes.PATIENT) &&
            this.allProfessionals.length > 0 &&
            !this.approvedDone) {
            this.loggedInUser.approvedAppointments.forEach(function (appt) {
                appt.dateTime = new Date(appt.dateTime);
                var hours = appt.dateTime.getHours();
                var timeString;
                if (hours > 12) {
                    hours = hours - 12;
                    timeString = hours.toString() + 'pm';
                }
                else {
                    timeString = hours.toString() + 'am';
                }
                _this.allProfessionals.forEach(function (prof) {
                    if (appt.id === prof._id) {
                        var approvedAppointment = {
                            _id: prof._id,
                            name: { firstName: prof.firstName, lastName: prof.lastName },
                            date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
                            about: { text: 'Scroll over for bio!', bio: prof.bio },
                            modify: appt
                        };
                        approvedAppointments.push(approvedAppointment);
                    }
                });
            });
            this.approvedDone = true;
            this.dataSourceBottom = approvedAppointments;
        }
        else if (!type.includes(this.accountTypes.PATIENT) &&
            this.allPatients.length > 0 &&
            !this.approvedDone) {
            this.loggedInUser.approvedAppointments.forEach(function (appt) {
                appt.dateTime = new Date(appt.dateTime);
                var hours = appt.dateTime.getHours();
                var timeString;
                if (hours > 12) {
                    hours = hours - 12;
                    timeString = hours.toString() + 'pm';
                }
                else {
                    timeString = hours.toString() + 'am';
                }
                _this.allPatients.forEach(function (patient) {
                    if (appt.id === patient._id) {
                        var approvedAppointment = {
                            _id: patient._id,
                            name: {
                                firstName: patient.firstName,
                                lastName: patient.lastName
                            },
                            date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
                            about: { text: 'Scroll over for bio!', bio: patient.bio },
                            modify: appt
                        };
                        approvedAppointments.push(approvedAppointment);
                    }
                });
            });
            this.approvedDone = true;
            this.dataSourceBottom = approvedAppointments;
        }
    };
    AppointmentsComponent.prototype.updateAppointment = function (appt, approval, fromApprovedList) {
        var _this = this;
        var appointmentToUpdate = { patient: '', professional: '', date: new Date(), accountType: '' };
        if (this.loggedInUser.type.includes(this.accountTypes.PATIENT)) {
            appointmentToUpdate.patient = this.loggedInUser._id;
            appointmentToUpdate.professional = appt.id;
            appointmentToUpdate.date = new Date(appt.dateTime);
            appointmentToUpdate.accountType = this.loggedInUser.type;
        }
        else {
            appointmentToUpdate.patient = appt.id;
            appointmentToUpdate.professional = this.loggedInUser._id;
            appointmentToUpdate.date = new Date(appt.dateTime);
            appointmentToUpdate.accountType = this.loggedInUser.type;
        }
        if (approval) {
            this.data.approveAppointment(appointmentToUpdate);
        }
        else {
            var dialogRef_1 = this.dialog.open(_professional_cancellation_dialog_professional_cancellation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCancellationDialogComponent"], {
                width: '500px',
                height: '310px',
                data: appointmentToUpdate,
            });
            dialogRef_1.afterClosed().subscribe(function (result) {
                if (dialogRef_1.componentInstance.message.text.length > 20) {
                    if (fromApprovedList) {
                        _this.data.cancelApprovedAppointment(appointmentToUpdate);
                    }
                    else {
                        _this.data.cancelRequestedAppointment(appointmentToUpdate);
                    }
                }
            });
            /*       if (fromApprovedList) {
                    this.data.cancelApprovedAppointment(appointmentToUpdate);
                  } else {
                    this.data.cancelRequestedAppointment(appointmentToUpdate);
                  } */
        }
    };
    AppointmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-appointments',
            template: __webpack_require__(/*! ./appointments.component.html */ "./src/app/appointments/appointments.component.html"),
            styles: [__webpack_require__(/*! ./appointments.component.scss */ "./src/app/appointments/appointments.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ }),

/***/ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure?</h2>\r\n<mat-dialog-content>\r\n  <form class=\"form-components-wrapper\"\r\n    #f=\"ngForm\"\r\n    (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field class=\"message-text\">\r\n      <textarea matInput\r\n        name=\"message-text\"\r\n        placeholder=\"Please provide a reason for the cancellation\"\r\n        type=\"text\"\r\n        [(ngModel)]=\"message.text\"\r\n        matTextareaAutosize\r\n        matAutosizeMinRows=4\r\n        required\r\n        minlength=\"20\"></textarea>\r\n    </mat-form-field>\r\n    <button mat-button\r\n      type=\"submit\"\r\n      [disabled]=\"!f.valid\"\r\n      class=\"confirm-button\">Confirm</button>\r\n    <button mat-button\r\n      class=\"cancel-button\"\r\n      type=\"button\"\r\n      mat-dialog-close>Cancel</button>\r\n  </form>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-components-wrapper {\n  display: grid;\n  grid-template-columns: 220px 220px;\n  grid-gap: 10px;\n  /* autoprefixer: off */\n  grid-auto-rows: 45px;\n  grid-template-areas: 'message-text    message-text'\r 'message-text    message-text'\r 'message-text    message-text'\r 'confirm-button  cancel-button'; }\n\n.message-text {\n  grid-area: message-text;\n  width: 96%;\n  height: 100%;\n  padding-left: 15px;\n  padding-top: 5px;\n  display: -ms-grid;\n  display: grid;\n  border: solid;\n  border-radius: 5%; }\n\n.cancel-button {\n  grid-area: cancel-button;\n  display: -ms-grid;\n  display: grid;\n  border: solid;\n  border-radius: 20%;\n  border-color: red;\n  color: red;\n  background-color: white;\n  height: 35px; }\n\n.confirm-button {\n  grid-area: confirm-button;\n  display: -ms-grid;\n  display: grid;\n  border: solid;\n  border-radius: 20%;\n  border-color: green;\n  color: green;\n  background-color: white;\n  height: 35px; }\n"

/***/ }),

/***/ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProfessionalCancellationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalCancellationDialogComponent", function() { return ProfessionalCancellationDialogComponent; });
/* harmony import */ var _models_account_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/account-type.model */ "./src/app/models/account-type.model.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProfessionalCancellationDialogComponent = /** @class */ (function () {
    function ProfessionalCancellationDialogComponent(data) {
        this.data = data;
        this.message = new _models_message_model__WEBPACK_IMPORTED_MODULE_1__["Message"]();
        this.accountTypes = new _models_account_type_model__WEBPACK_IMPORTED_MODULE_0__["AccountType"]();
    }
    ProfessionalCancellationDialogComponent.prototype.ngOnInit = function () {
        if (this.data.accountType.includes(this.accountTypes.PATIENT)) {
            this.message.from = this.data.patient;
            this.message.to = this.data.professional;
        }
        else {
            this.message.from = this.data.professional;
            this.message.to = this.data.patient;
        }
    };
    ProfessionalCancellationDialogComponent.prototype.onSubmit = function () {
        this.message.dateTime = new Date();
    };
    ProfessionalCancellationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-professional-cancellation-dialog',
            template: __webpack_require__(/*! ./professional-cancellation-dialog.component.html */ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./professional-cancellation-dialog.component.scss */ "./src/app/appointments/professional-cancellation-dialog/professional-cancellation-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ProfessionalCancellationDialogComponent);
    return ProfessionalCancellationDialogComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _models_account_type_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/account-type.model */ "./src/app/models/account-type.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var DataService = /** @class */ (function () {
    function DataService(http, snackBar, router, dialog) {
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.accountTypes = new _models_account_type_model__WEBPACK_IMPORTED_MODULE_5__["AccountType"]();
        this.loggedInUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]());
        this.allProfessionals = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.allPatients = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    DataService.prototype.getLoggedInUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.loggedInUser.next(user);
        }
        return this.loggedInUser;
    };
    DataService.prototype.logout = function () {
        this.loggedInUser.next(new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]());
        localStorage.removeItem('user');
    };
    DataService.prototype.saveUserLocally = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    DataService.prototype.createNewAccount = function (form) {
        var _this = this;
        this.http
            .put('api/newAccount', JSON.stringify(form), httpOptions)
            .subscribe(function (data) {
            _this.loggedInUser.next(data);
            if (data) {
                _this.saveUserLocally(data);
                if (data.type.includes(_this.accountTypes.PATIENT)) {
                    _this.router.navigateByUrl('user');
                }
                else {
                    _this.router.navigateByUrl('professional');
                }
                _this.dialog.closeAll();
            }
            _this.snackBar.open('New Account Created Successfully.', '', {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snackBarStyle'
            });
        }, function (err) {
            console.log(err);
            _this.snackBar.open('An Error Has Occurred. Please try again.', '', {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snackBarStyleError'
            });
        });
        return this.loggedInUser;
    };
    DataService.prototype.login = function (email, password) {
        var _this = this;
        this.http
            .post('api/login', JSON.stringify({ email: email, password: password }), httpOptions)
            .subscribe(function (data) {
            _this.loggedInUser.next(data);
            if (data === null) {
                var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
                user.email = email;
                _this.loggedInUser.next(user);
            }
            else {
                _this.saveUserLocally(data);
            }
        }, function (err) {
            console.log(err);
            _this.snackBar.open('An Error Has Occurred. Please try again.', '', {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snackBarStyleError'
            });
        });
        return this.loggedInUser;
    };
    DataService.prototype.updateUser = function (originalEmail, user) {
        var _this = this;
        this.http
            .put('api/updateUser', JSON.stringify({ originalEmail: originalEmail, user: user }), httpOptions)
            .subscribe(function (data) {
            _this.loggedInUser.next(data);
            _this.saveUserLocally(data);
            _this.snackBar.open('Account Updated Successfully.', '', {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snackBarStyle'
            });
        }, function (err) {
            console.log(err);
            _this.snackBar.open('An Error Has Occurred. Please try again.', '', {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snackBarStyleError'
            });
        });
        return this.loggedInUser;
    };
    DataService.prototype.updateUserLocally = function (user) {
        this.saveUserLocally(user);
        this.loggedInUser.next(user);
    };
    DataService.prototype.getAllProfessionals = function () {
        var _this = this;
        this.http
            .get('api/allProfessionals', httpOptions)
            .subscribe(function (professionals) {
            _this.allProfessionals.next(professionals);
        });
        return this.allProfessionals;
    };
    DataService.prototype.getAllPatients = function () {
        var _this = this;
        this.http
            .get('api/allPatients', httpOptions)
            .subscribe(function (patients) {
            _this.allPatients.next(patients);
        });
        return this.allPatients;
    };
    DataService.prototype.requestAppointment = function (appt) {
        var _this = this;
        // This method stringifies the date, changing the time to ZULU time
        // The offset between ZULU and Central is +5 hours
        // Converting the date back to a Date type changes the time back correctly
        this.http
            .post('api/requestAppointment', JSON.stringify(appt), httpOptions)
            .subscribe(function (returnedUser) {
            _this.loggedInUser.next(returnedUser);
            _this.saveUserLocally(returnedUser);
            if (returnedUser !== null) {
                _this.snackBar.open('Appointment requested!', '', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snackBarStyle'
                });
            }
        });
        return this.loggedInUser;
    };
    DataService.prototype.cancelRequestedAppointment = function (appt) {
        var _this = this;
        this.http
            .post('api/cancelRequestedAppointment', JSON.stringify(appt), httpOptions)
            .subscribe(function (returnedUser) {
            _this.loggedInUser.next(returnedUser);
            _this.saveUserLocally(returnedUser);
            if (returnedUser !== null) {
                _this.snackBar.open('Appointment canceled!', '', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snackBarStyle'
                });
            }
        });
        return this.loggedInUser;
    };
    DataService.prototype.cancelApprovedAppointment = function (appt) {
        var _this = this;
        this.http
            .post('api/cancelApprovedAppointment', JSON.stringify(appt), httpOptions)
            .subscribe(function (returnedUser) {
            _this.loggedInUser.next(returnedUser);
            _this.saveUserLocally(returnedUser);
            if (returnedUser !== null) {
                _this.snackBar.open('Appointment canceled!', '', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snackBarStyle'
                });
            }
        });
        return this.loggedInUser;
    };
    DataService.prototype.approveAppointment = function (appt) {
        var _this = this;
        this.http
            .post('api/approveAppointment', JSON.stringify(appt), httpOptions)
            .subscribe(function (returnedUser) {
            _this.loggedInUser.next(returnedUser);
            _this.saveUserLocally(returnedUser);
            if (returnedUser !== null) {
                _this.snackBar.open('Approved appointment!', '', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snackBarStyle'
                });
            }
        });
        return this.loggedInUser;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n  display: grid;\r\n  /* autoprefixer: off */\r\n  grid-auto-columns: 300px 1fr 300px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 40px;\r\n  grid-template-areas: 'logo tabs profile';\r\n}\r\n\r\n.logo {\r\n  grid-area: logo;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  padding-top: 10px;\r\n}\r\n\r\n.tabs {\r\n  grid-area: tabs;\r\n}\r\n\r\n.profile {\r\n  grid-area: profile;\r\n  padding-top: 10px;\r\n}\r\n"

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

/***/ "./src/app/login/login-dialog/login-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/login/login-dialog/login-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-components-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 200px 10px 200px;\r\n      grid-template-columns: 200px 200px;\r\n  grid-gap: 10px;\r\n  -ms-grid-rows: auto 10px auto 10px auto;\r\n      grid-template-areas:\r\n    'login-email    login-email'\r\n    'login-password login-password'\r\n    'login-button   cancel-button';\r\n}\r\n\r\n.login-email {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: login-email;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.login-password {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: login-password;\r\n  width: 90%;\r\n  padding-left: 15px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.login-button {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 1;\r\n  grid-area: login-button;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  border-color: green;\r\n  color: green;\r\n  background-color: white;\r\n  margin-left: 40%;\r\n  max-height: 50px;\r\n  max-width: 100px;\r\n}\r\n\r\n.cancel-button {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 3;\r\n  grid-area: cancel-button;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  border-color: red;\r\n  color: red;\r\n  background-color: white;\r\n  margin-right: 40%;\r\n  max-height: 50px;\r\n  max-width: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login-dialog/login-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/login/login-dialog/login-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Login</h2>\r\n<mat-dialog-content>\r\n  <form class=\"form-components-wrapper\"\r\n    #f=\"ngForm\"\r\n    (ngSubmit)=\"onSubmit(f)\">\r\n    <mat-form-field class=\"login-email\">\r\n      <input matInput\r\n        name=\"email\"\r\n        placeholder=\"Email\"\r\n        type=\"text\"\r\n        [(ngModel)]=\"loggedInUser.email\"\r\n        required\r\n        email>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"login-password\">\r\n      <input matInput\r\n        name=\"password\"\r\n        placeholder=\"Password\"\r\n        type=\"password\"\r\n        ngModel\r\n        required\r\n        password\r\n        minlength=\"8\">\r\n    </mat-form-field>\r\n    <button mat-button\r\n      type=\"submit\"\r\n      [disabled]=\"!f.valid\"\r\n      class=\"login-button\">Login</button>\r\n    <button mat-button\r\n      class=\"cancel-button\"\r\n      type=\"button\"\r\n      mat-dialog-close>Cancel</button>\r\n  </form>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/login/login-dialog/login-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/login/login-dialog/login-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(data, router, snackBar, dialog) {
        this.data = data;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.loggedInUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.closeMe = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    LoginDialogComponent.prototype.ngOnInit = function () { };
    LoginDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.data.login(form.value.email, form.value.password).subscribe(function (user) {
            if (user === null) {
                user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
                user.email = form.value.email;
                _this.snackBar.open('Password incorrect or account not found.', '', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snackBarStyle'
                });
            }
            else if (user.type !== undefined) {
                user = user;
                if (user.type.includes('Patient')) {
                    _this.router.navigateByUrl('/user');
                }
                else {
                    _this.router.navigateByUrl('/professional');
                }
                _this.dialog.closeAll();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], LoginDialogComponent.prototype, "closeMe", void 0);
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/login/login-dialog/login-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-dialog.component.css */ "./src/app/login/login-dialog/login-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <div class=\"logo\">\r\n    <span>Thera</span>\r\n    <fa-icon class=\"fa-2x\"\r\n      style=\"margin-left: 10px; margin-right: 10px; align-content: center\"\r\n      icon=\"notes-medical\"></fa-icon>\r\n    <span>Station</span>\r\n  </div>\r\n  <div class=\"about-us\">\r\n    <p style=\"margin-left: 10px; margin-right: 10px;\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua.\r\n    </p>\r\n    <p style=\"margin-left: 10px; margin-right: 10px;\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n    </p>\r\n\r\n    <p style=\"margin-left: 10px; margin-right: 10px;\">\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </p>\r\n  </div>\r\n  <div class=\"login-button\">\r\n    <button mat-button\r\n      (click)=\"openLoginDialog()\">Login</button>\r\n  </div>\r\n\r\n  <div class=\"login-new-account\">\r\n    <button mat-button\r\n      (click)=\"openNewAccountDialog()\">New Account</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n  /* autoprefixer: off */\n  grid-auto-rows: 150px;\n  grid-template-areas: '. logo logo .'\r '. about-us about-us  .'\r '. about-us about-us  .'\r '. login-button login-new-account .'; }\n\n.logo {\n  grid-area: logo;\n  font-family: 'backyard';\n  font-size: 50px;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  vertical-align: bottom;\n  background-color: inherit; }\n\n.about-us {\n  grid-area: about-us;\n  font-family: 'backyard';\n  font-size: 15px;\n  max-width: 600px;\n  -ms-grid-row-align: center;\n      align-self: center;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  vertical-align: middle;\n  border: solid;\n  border-radius: 5%;\n  background-color: inherit;\n  box-shadow: 10px 10px 5px grey; }\n\n.login-button {\n  grid-area: login-button;\n  border: solid;\n  border-radius: 20%;\n  border-color: green;\n  color: green;\n  font-family: 'backyard' !important;\n  background-color: white;\n  -ms-grid-column-align: end;\n      justify-self: end;\n  margin-right: 20px;\n  max-height: 35px;\n  max-width: 125px; }\n\n.login-new-account {\n  grid-area: login-new-account;\n  border: solid;\n  border-radius: 20%;\n  border-color: blue;\n  color: blue;\n  font-family: 'backyard' !important;\n  background-color: white;\n  margin-left: 20px;\n  max-height: 35px;\n  max-width: 135px; }\n"

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
/* harmony import */ var _new_account_dialog_new_account_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-account-dialog/new-account-dialog.component */ "./src/app/login/new-account-dialog/new-account-dialog.component.ts");
/* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-dialog/login-dialog.component */ "./src/app/login/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function LoginComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.loggedInUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.openLoginDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__["LoginDialogComponent"], {
            width: '450px',
            height: '315px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigateByUrl('user');
        });
    };
    LoginComponent.prototype.openNewAccountDialog = function () {
        this.dialog.open(_new_account_dialog_new_account_dialog_component__WEBPACK_IMPORTED_MODULE_0__["NewAccountDialogComponent"], {
            width: '650px',
            height: '425px'
        });
    };
    LoginComponent.prototype.onNewAccount = function () {
        this.router.navigateByUrl('/newAccount');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/new-account-dialog/new-account-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/login/new-account-dialog/new-account-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-account-form-component-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 10px;\r\n  /* autoprefixer: off */\r\n  grid-auto-rows: 45px;\r\n  grid-template-areas:\r\n    'first-name last-name'\r\n    'address    address'\r\n    'email      password'\r\n    'type       type'\r\n    'type-select type-select'\r\n    'submit-new-account-button     cancel-button';\r\n}\r\n\r\n.new-account-form-component-less {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 10px;\r\n  /* autoprefixer: off */\r\n  grid-auto-rows: 45px;\r\n  grid-template-areas:\r\n    'first-name last-name'\r\n    'address    address'\r\n    'email      password'\r\n    'type       type'\r\n    'submit-new-account-button     cancel-button';\r\n}\r\n\r\n.first-name {\r\n  grid-area: first-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n  padding-left: 20px;\r\n}\r\n\r\n.last-name {\r\n  grid-area: last-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n}\r\n\r\n.address {\r\n  grid-area: address;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n  padding-left: 20px;\r\n}\r\n\r\n.email {\r\n  grid-area: email;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n  padding-left: 20px;\r\n}\r\n\r\n.password {\r\n  grid-area: password;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 90%;\r\n}\r\n\r\n.type {\r\n  grid-area: type;\r\n  width: 90%;\r\n  padding-top: 20px;\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n  max-width: 400px;\r\n}\r\n\r\n.type-select {\r\n  grid-area: type-select;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n\r\n  width: 100%;\r\n}\r\n\r\n.submit-new-account-button {\r\n  grid-area: submit-new-account-button;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  border-color: green;\r\n  background-color: white;\r\n  color: green;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  margin-top: 5px;\r\n  max-height: 50px;\r\n  max-width: 90px;\r\n}\r\n\r\n.cancel-button {\r\n  grid-area: cancel-button;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  border-color: red;\r\n  color: red;\r\n  background-color: white;\r\n  margin-top: 5px;\r\n  max-height: 50px;\r\n  max-width: 90px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/new-account-dialog/new-account-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/login/new-account-dialog/new-account-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Create New Account</h2>\r\n<mat-dialog-content>\r\n  <form [ngClass]=\"patientOrProfessional === 'Professional' ? 'new-account-form-component-wrapper' : 'new-account-form-component-less'\"\r\n    #f=\"ngForm\"\r\n    (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field class=\"first-name\">\r\n      <input matInput\r\n        name=\"firstName\"\r\n        placeholder=\"First Name\"\r\n        type=\"text\"\r\n        ngModel\r\n        required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"last-name\">\r\n      <input matInput\r\n        name=\"lastName\"\r\n        placeholder=\"Last Name\"\r\n        type=\"text\"\r\n        ngModel\r\n        required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"address\">\r\n      <input matInput\r\n        name=\"address\"\r\n        placeholder=\"Address\"\r\n        type=\"text\"\r\n        ngModel\r\n        address>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"email\">\r\n      <input matInput\r\n        name=\"email\"\r\n        placeholder=\"Email\"\r\n        type=\"text\"\r\n        ngModel\r\n        required\r\n        email>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"password\">\r\n      <input matInput\r\n        name=\"password\"\r\n        placeholder=\"Password\"\r\n        type=\"password\"\r\n        ngModel\r\n        required\r\n        password\r\n        minlength=\"8\">\r\n    </mat-form-field>\r\n    <mat-radio-group class=\"type\"\r\n      layout=\"row\"\r\n      ngModel\r\n      [(ngModel)]=\"patientOrProfessional\"\r\n      name=\"patientOrProfessional\">\r\n      <mat-radio-button type=\"radio\"\r\n        value=\"Patient\">Looking for help</mat-radio-button>\r\n      <mat-radio-button style=\"padding-left: 30px\"\r\n        type=\"radio\"\r\n        value=\"Professional\">Looking to help</mat-radio-button>\r\n    </mat-radio-group>\r\n    <div *ngIf=\"patientOrProfessional === 'Professional'\"\r\n      class=\"type-select\">\r\n      <mat-form-field style=\"max-width: 200px;\">\r\n        <mat-select placeholder=\"&nbsp;&nbsp;&nbsp;Type of Help\"\r\n          required\r\n          #select\r\n          name=\"type\"\r\n          ngModel>\r\n          <mat-option *ngFor=\"let professionalType of professionalTypes\"\r\n            required\r\n            [value]=\"professionalType\">\r\n            {{ professionalType }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <button class=\"submit-new-account-button\"\r\n      mat-button\r\n      type=\"submit\"\r\n      [disabled]=\"!f.valid\">Create</button>\r\n    <button class=\"cancel-button\"\r\n      mat-button\r\n      type=\"button\"\r\n      mat-dialog-close>Cancel</button>\r\n  </form>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/login/new-account-dialog/new-account-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/login/new-account-dialog/new-account-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewAccountDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountDialogComponent", function() { return NewAccountDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_account_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/account-type.model */ "./src/app/models/account-type.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewAccountDialogComponent = /** @class */ (function () {
    function NewAccountDialogComponent(router, data, dialog) {
        this.router = router;
        this.data = data;
        this.dialog = dialog;
        this.accountTypes = new _models_account_type_model__WEBPACK_IMPORTED_MODULE_1__["AccountType"]();
        this.patientOrProfessional = this.accountTypes.PATIENT;
        this.professionalTypes = this.accountTypes.getProfessionalTypesArray();
        this.professionalTypeSelected = '';
    }
    NewAccountDialogComponent.prototype.ngOnInit = function () {
    };
    NewAccountDialogComponent.prototype.onSubmit = function () {
        var newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        newUser.firstName = this.form.value.firstName;
        newUser.lastName = this.form.value.lastName;
        newUser.address = this.form.value.address;
        newUser.email = this.form.value.email;
        newUser.password = this.form.value.password;
        if (this.patientOrProfessional.includes(this.accountTypes.PATIENT)) {
            newUser.type = this.patientOrProfessional;
        }
        else {
            newUser.type = this.form.value.type;
        }
        this.data.createNewAccount(newUser);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], NewAccountDialogComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('select'),
        __metadata("design:type", Object)
    ], NewAccountDialogComponent.prototype, "select", void 0);
    NewAccountDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-account-dialog',
            template: __webpack_require__(/*! ./new-account-dialog.component.html */ "./src/app/login/new-account-dialog/new-account-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-account-dialog.component.css */ "./src/app/login/new-account-dialog/new-account-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], NewAccountDialogComponent);
    return NewAccountDialogComponent;
}());



/***/ }),

/***/ "./src/app/models/account-type.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/account-type.model.ts ***!
  \**********************************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType = /** @class */ (function () {
    function AccountType() {
        this.PATIENT = 'Patient';
        this.PSYCHOLOGIST = 'Psychologist';
        this.THERAPIST = 'Therapist';
        this.PSYCHIATRIST = 'Psychiatrist';
        this.COUNSELOR = 'Counselor';
        this.SOCIAL_WORKER = 'Social Worker';
    }
    // others?
    AccountType.prototype.getProfessionalTypesArray = function () {
        return [
            this.PSYCHOLOGIST,
            this.THERAPIST,
            this.PSYCHIATRIST,
            this.COUNSELOR,
            this.SOCIAL_WORKER
        ];
    };
    AccountType.prototype.getAllTypesArray = function () {
        return [
            this.PATIENT,
            this.PSYCHOLOGIST,
            this.THERAPIST,
            this.PSYCHIATRIST,
            this.COUNSELOR,
            this.SOCIAL_WORKER
        ];
    };
    return AccountType;
}());



/***/ }),

/***/ "./src/app/models/message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n  display: grid;\r\n  /* autoprefixer: off */\r\n  grid-auto-columns: 300px 1fr 300px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 40px;\r\n  grid-template-areas:\r\n    '. . .'\r\n    'logo tabs profile';\r\n}\r\n\r\n.logo {\r\n  grid-area: logo;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  padding-top: 10px;\r\n}\r\n\r\n.tabs {\r\n  grid-area: tabs;\r\n}\r\n\r\n.profile {\r\n  grid-area: profile;\r\n  padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\r\n  <div class=\"logo\">\r\n    <span class=\"mat-typography\"\r\n      style=\"font-size: 20px;\">Thera&nbsp;&nbsp;</span>\r\n    <fa-icon class=\"fa-2x\"\r\n      icon=\"notes-medical\"></fa-icon>&nbsp;\r\n    <span class=\"mat-typography\"\r\n      style=\"font-size: 20px;\">Station</span>\r\n  </div>\r\n  <div class=\"tabs\">\r\n    <mat-tab-group [dynamicHeight]=\"true\">\r\n      <mat-tab label=\"Search\">\r\n        <app-search-patient></app-search-patient>\r\n      </mat-tab>\r\n      <mat-tab label=\"Profile\">\r\n        <app-profile-patient></app-profile-patient>\r\n      </mat-tab>\r\n      <mat-tab label=\"About Us\">\r\n        <app-about-us></app-about-us>\r\n      </mat-tab>\r\n      <mat-tab label=\"Appointments\"\r\n        *ngIf=\"(user.requestedAppointments !== null &&\r\n            user.requestedAppointments !== undefined &&\r\n            user.requestedAppointments.length > 0) ||\r\n          (user.approvedAppointments !== null &&\r\n            user.approvedAppointments !== undefined &&\r\n            user.approvedAppointments.length > 0)\">\r\n        <app-appointments></app-appointments>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  <div class=\"profile\">\r\n    <span class=\"noButtonLook pointer\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <fa-icon class=\"fa-2x\"\r\n        icon=\"user\"></fa-icon>&nbsp;\r\n      <span class=\"mat-typography\"\r\n        style=\"font-size: 20px;\">{{ user.lastName }}, {{ user.firstName }}&nbsp;</span>\r\n      <i class=\"fa fa-caret-down blueText\"></i>\r\n    </span>\r\n    <mat-menu #menu=\"matMenu\"\r\n      [overlapTrigger]=\"false\"\r\n      xPosition=\"after\">\r\n      <button mat-menu-item\r\n        (click)=\"logout()\"\r\n        [routerLink]=\"['/login']\">\r\n        <i class=\"fa fa-user-o\"></i>&nbsp;&nbsp; <span>Logout</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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
    function PatientComponent(data, router) {
        this.data = data;
        this.router = router;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLoggedInUser().subscribe(function (user) {
            _this.user = user;
            if (_this.user.email === undefined) {
                _this.router.navigateByUrl('/login');
            }
        });
    };
    PatientComponent.prototype.logout = function () {
        this.data.logout();
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
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

module.exports = ".profile-form-component-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 200px 200px 1fr;\r\n  grid-gap: 10px;\r\n  padding-top: 20px;\r\n  /* autoprefixer: off */\r\n  grid-auto-rows: 45px;\r\n  grid-template-areas:\r\n    'first-name  first-name  bio'\r\n    'last-name   last-name   bio'\r\n    'address     address     bio'\r\n    'profile-email       profile-email       bio'\r\n    'type-select type-select bio'\r\n    '.           .           .'\r\n    'submit      submit      submit';\r\n}\r\n\r\n.first-name {\r\n  grid-area: first-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.last-name {\r\n  grid-area: last-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.address {\r\n  grid-area: address;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.profile-email {\r\n  grid-area: profile-email;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.password {\r\n  grid-area: password;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.type-select {\r\n  grid-area: type-select;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.bio {\r\n  grid-area: bio;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  padding-top: 5px;\r\n  border: solid;\r\n  border-radius: 5%;\r\n}\r\n\r\n.submit {\r\n  grid-area: submit;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  background-color: lightgray;\r\n  max-height: 50px;\r\n  max-width: 175px;\r\n  margin-left: 40%;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/patient/profile-patient/profile-patient.component.html":
/*!************************************************************************!*\
  !*** ./src/app/patient/profile-patient/profile-patient.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"profile-form-component-wrapper\"\r\n  #f=\"ngForm\"\r\n  (ngSubmit)=\"onSubmit()\">\r\n  <mat-form-field class=\"first-name\">\r\n    <input matInput\r\n      name=\"firstName\"\r\n      placeholder=\"First Name\"\r\n      type=\"text\"\r\n      [(ngModel)]=\"loggedInUser.firstName\"\r\n      required>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"last-name\">\r\n    <input matInput\r\n      name=\"lastName\"\r\n      placeholder=\"Last Name\"\r\n      type=\"text\"\r\n      [(ngModel)]=\"loggedInUser.lastName\"\r\n      required>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"address\">\r\n    <input matInput\r\n      name=\"address\"\r\n      placeholder=\"Address\"\r\n      type=\"text\"\r\n      [(ngModel)]=\"loggedInUser.address\"\r\n      required\r\n      address>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"profile-email\">\r\n    <input matInput\r\n      name=\"email\"\r\n      placeholder=\"Email\"\r\n      type=\"text\"\r\n      [(ngModel)]=\"loggedInUser.email\"\r\n      required\r\n      email>\r\n  </mat-form-field>\r\n  <!--   <mat-form-field class=\"password\">\r\n    <input matInput\r\n      name=\"password\"\r\n      placeholder=\"Password\"\r\n      type=\"password\"\r\n      [(ngModel)]=\"loggedInUser.password\"\r\n      required\r\n      password\r\n      minlength=\"8\">\r\n  </mat-form-field> -->\r\n  <mat-form-field class=\"type-select\">\r\n    <mat-select placeholder=\"Account Type\"\r\n      required\r\n      name=\"type\"\r\n      [(ngModel)]=\"loggedInUser.type\">\r\n      <mat-option *ngFor=\"let professionalType of professionalTypes\"\r\n        [value]=\"professionalType\">\r\n        {{ professionalType }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"bio\">\r\n    <textarea matInput\r\n      name=\"bio\"\r\n      placeholder=\"Describe yourself and any issues you are having.\"\r\n      type=\"text\"\r\n      matTextareaAutosize\r\n      matAutosizeMinRows=8\r\n      [(ngModel)]=\"loggedInUser.bio\"></textarea>\r\n  </mat-form-field>\r\n  <button class=\"submit\"\r\n    mat-button\r\n    type=\"submit\"\r\n    [disabled]=\"!f.valid\">Update</button>\r\n</form>\r\n"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_account_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/account-type.model */ "./src/app/models/account-type.model.ts");
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
    function ProfilePatientComponent(data) {
        this.data = data;
        this.loggedInUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.professionalTypes = new _models_account_type_model__WEBPACK_IMPORTED_MODULE_3__["AccountType"]().getAllTypesArray();
    }
    ProfilePatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLoggedInUser().subscribe(function (user) {
            if (user.firstName !== undefined) {
                _this.loggedInUser = user;
                _this.originalEmail = _this.loggedInUser.email;
            }
        });
    };
    ProfilePatientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data
            .updateUser(this.originalEmail, this.loggedInUser)
            .subscribe(function (updatedUser) {
            _this.loggedInUser = updatedUser;
        });
    };
    ProfilePatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile-patient',
            template: __webpack_require__(/*! ./profile-patient.component.html */ "./src/app/patient/profile-patient/profile-patient.component.html"),
            styles: [__webpack_require__(/*! ./profile-patient.component.css */ "./src/app/patient/profile-patient/profile-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
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

module.exports = "table {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.selected-professional-wrapper {\r\n  display: grid;\r\n  padding: 10px;\r\n  /* autoprefixer: off */\r\n  grid-auto-columns: 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  grid-template-areas:\r\n    'back . .'\r\n    '. . .'\r\n    'professional-info appointment-date appointment-time'\r\n    '. request-appointment .'\r\n    '. submit-button .';\r\n}\r\n\r\n.back {\r\n  grid-area: back;\r\n  -ms-grid-column-align: left;\r\n      justify-self: left;\r\n}\r\n\r\n.professional-info {\r\n  grid-area: professional-info;\r\n  font-size: 17px;\r\n  padding-left: 20px;\r\n  align-items: center;\r\n  justify-content: right;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.appointment-date {\r\n  grid-area: appointment-date;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.appointment-time {\r\n  grid-area: appointment-time;\r\n  width: 250px;\r\n}\r\n\r\n.request-appointment {\r\n  grid-area: request-appointment;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.submit-button {\r\n  grid-area: submit-button;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  border-color: green;\r\n  color: green;\r\n  background-color: white;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/patient/search-patient/search-patient.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/patient/search-patient/search-patient.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table\r\n  [dataSource]=\"dataSource\"\r\n  class=\"mat-elevation-z8 pointer\"\r\n  *ngIf=\"chosenProf === undefined\">\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[0] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">\r\n      {{ element.name.firstName }} {{ element.name.lastName }}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Type\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[1] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">{{ element.type }}</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"About\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[2] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\"\r\n      matTooltip=\"{{ element.about.bio }}\">\r\n      {{ element.about.text }}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Availability\">\r\n    <th mat-header-cell\r\n      *matHeaderCellDef>{{ columns[3] }}</th>\r\n    <td mat-cell\r\n      *matCellDef=\"let element\">{{ element.availability }}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row\r\n    *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row\r\n    *matRowDef=\"let row; columns: columns\"\r\n    (click)=\"chooseProfessional(row)\"></tr>\r\n</table>\r\n\r\n<div *ngIf=\"chosenProf !== undefined\"\r\n  class=\"selected-professional-wrapper\">\r\n  <div class=\"back pointer\"\r\n    (click)=\"backToProfessionalsTable()\">\r\n    <i class=\"fa fa-angle-left fa-2x\"> </i>\r\n    <span class=\"mat-typography\"\r\n      style=\"font-size: 20px; position: relative; bottom: 4px;\">&nbsp;Back to Professionals\r\n    </span>\r\n  </div>\r\n  <div class=\"professional-info mat-typography\">\r\n    <p>Name: {{ chosenProf.name.firstName }} {{ chosenProf.name.lastName }}</p>\r\n    <p>Type: {{ chosenProf.type }}</p>\r\n  </div>\r\n  <div class=\"appointment-date\">\r\n    <mat-form-field>\r\n      <input matInput\r\n        readonly\r\n        name=\"date\"\r\n        placeholder=\"Choose a date\"\r\n        [matDatepickerFilter]=\"weekendFilter\"\r\n        [min]=\"today\"\r\n        [matDatepicker]=\"picker\"\r\n        (dateInput)=\"assignDate($event.value)\" />\r\n      <mat-datepicker-toggle matSuffix\r\n        [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker disabled=\"false\"\r\n        #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"appointment-time\">\r\n    <div *ngIf=\"chosenDateAndTime !== undefined\">\r\n      <mat-form-field style=\"width: 250px\">\r\n        <mat-select placeholder=\"Choose a time\"\r\n          name=\"time\"\r\n          (selectionChange)=\"assignTime($event.value)\"\r\n          required>\r\n          <mat-option *ngFor=\"let time of appointmentTimes\"\r\n            [value]=\"time.hour\"\r\n            [disabled]=\"time.disabled\">\r\n            {{ time.time }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"request-appointment\">\r\n    <div *ngIf=\"\r\n        chosenDateAndTime !== undefined && chosenDateAndTime.getHours() > 0\r\n      \"\r\n      style=\"display: grid;\">\r\n      <button class=\"submit-button\"\r\n        (click)=\"requestAppointment()\"\r\n        mat-button>\r\n        Request Appointment\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
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
    function SearchPatientComponent(data) {
        this.data = data;
        this.today = new Date();
        this.appointmentTimes = [
            {
                time: '9:00am - 9:45am',
                hour: 9,
                disabled: false
            },
            {
                time: '10:00am - 10:45am',
                hour: 10,
                disabled: false
            },
            {
                time: '11:00am - 11:45am',
                hour: 11,
                disabled: false
            },
            {
                time: '1:00pm - 1:45pm',
                hour: 13,
                disabled: false
            },
            {
                time: '2:00pm - 2:45pm',
                hour: 14,
                disabled: false
            },
            {
                time: '3:00pm - 3:45pm',
                hour: 15,
                disabled: false
            },
            {
                time: '4:00pm - 4:45pm',
                hour: 16,
                disabled: false
            }
        ];
        this.columns = ['Name', 'Type', 'About', 'Availability'];
        this.weekendFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    SearchPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLoggedInUser().subscribe(function (user) {
            _this.loggedInUser = user;
        });
        this.today.setDate(this.today.getDate() + 1);
        this.data.getAllProfessionals().subscribe(function (professionals) {
            var profArray = [];
            if (professionals) {
                professionals.forEach(function (prof) {
                    var newProf = {
                        _id: prof._id,
                        name: { firstName: prof.firstName, lastName: prof.lastName },
                        type: prof.type,
                        about: { text: 'Scroll over for bio!', bio: prof.bio },
                        availability: 'Click to select a date and time.'
                    };
                    profArray.push(newProf);
                });
            }
            _this.dataSource = profArray;
        });
    };
    SearchPatientComponent.prototype.assignDate = function (date) {
        this.chosenDateAndTime = date;
    };
    SearchPatientComponent.prototype.chooseProfessional = function (prof) {
        this.chosenProf = prof;
    };
    SearchPatientComponent.prototype.backToProfessionalsTable = function () {
        this.chosenProf = undefined;
    };
    SearchPatientComponent.prototype.assignTime = function (hour) {
        this.chosenDateAndTime.setHours(hour);
    };
    SearchPatientComponent.prototype.requestAppointment = function () {
        var _this = this;
        var appt = {
            patient: this.loggedInUser._id,
            professional: this.chosenProf._id,
            appointment: this.chosenDateAndTime
        };
        this.data.updateUserLocally(this.loggedInUser);
        this.data.requestAppointment(appt).subscribe(function (user) {
            if (user !== null) {
                _this.chosenDateAndTime = undefined;
                _this.chosenProf = undefined;
            }
        });
    };
    SearchPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-patient',
            template: __webpack_require__(/*! ./search-patient.component.html */ "./src/app/patient/search-patient/search-patient.component.html"),
            styles: [__webpack_require__(/*! ./search-patient.component.css */ "./src/app/patient/search-patient/search-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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

module.exports = ".header-wrapper {\r\n  display: grid;\r\n  /* autoprefixer: off */\r\n  grid-auto-columns: 300px 1fr 300px;\r\n  grid-gap: 10px;\r\n  grid-auto-rows: 40px;\r\n  grid-template-areas:\r\n    '. . .'\r\n    'logo tabs profile';\r\n}\r\n\r\n.logo {\r\n  grid-area: logo;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n  padding-top: 10px;\r\n}\r\n\r\n.tabs {\r\n  grid-area: tabs;\r\n}\r\n\r\n.profile {\r\n  grid-area: profile;\r\n  padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/professional/professional.component.html":
/*!**********************************************************!*\
  !*** ./src/app/professional/professional.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\r\n  <div class=\"logo\">\r\n    <span class=\"mat-typography\"\r\n      style=\"font-size: 20px;\">Thera&nbsp;&nbsp;</span>\r\n    <fa-icon class=\"fa-2x\"\r\n      icon=\"notes-medical\"></fa-icon>&nbsp;\r\n    <span class=\"mat-typography\"\r\n      style=\"font-size: 20px;\">Station</span>\r\n  </div>\r\n  <div class=\"tabs\">\r\n    <mat-tab-group [dynamicHeight]=\"true\">\r\n      <mat-tab label=\"Appointments\">\r\n        <app-appointments></app-appointments>\r\n      </mat-tab>\r\n      <mat-tab label=\"Profile\">\r\n        <app-profile-professional></app-profile-professional>\r\n      </mat-tab>\r\n      <mat-tab label=\"About Us\">\r\n        <app-about-us></app-about-us>\r\n      </mat-tab>\r\n      <mat-tab label=\"Appointments\"\r\n        *ngIf=\"(user.requestedAppointments !== null &&\r\n            user.requestedAppointments !== undefined &&\r\n            user.requestedAppointments.length > 0) ||\r\n          (user.approvedAppointments !== null &&\r\n            user.approvedAppointments !== undefined &&\r\n            user.approvedAppointments.length > 0)\">\r\n        <app-appointments></app-appointments>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  <div class=\"profile\">\r\n    <span class=\"noButtonLook pointer\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <fa-icon class=\"fa-2x\"\r\n        icon=\"user\"></fa-icon>&nbsp;\r\n      <span class=\"mat-typography\"\r\n        style=\"font-size: 20px;\">{{ user.lastName }}, {{ user.firstName }}&nbsp;</span>\r\n      <i class=\"fa fa-caret-down blueText\"></i>\r\n    </span>\r\n    <mat-menu #menu=\"matMenu\"\r\n      [overlapTrigger]=\"false\"\r\n      xPosition=\"after\">\r\n      <button mat-menu-item\r\n        (click)=\"logout()\"\r\n        [routerLink]=\"['/login']\">\r\n        <i class=\"fa fa-user-o\"></i>&nbsp;&nbsp; <span>Logout</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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
    function ProfessionalComponent(data, router) {
        this.data = data;
        this.router = router;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLoggedInUser().subscribe(function (user) {
            _this.user = user;
            if (_this.user.email === undefined) {
                _this.router.navigateByUrl('/login');
            }
        });
    };
    ProfessionalComponent.prototype.logout = function () {
        this.data.logout();
    };
    ProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.css */ "./src/app/professional/professional.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
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

module.exports = ".profile-form-component-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 200px 200px 1fr;\r\n  grid-gap: 10px;\r\n  padding-top: 20px;\r\n  /* autoprefixer: off */\r\n  grid-auto-rows: 45px;\r\n  grid-template-areas:\r\n    'first-name  first-name  bio'\r\n    'last-name   last-name   bio'\r\n    'address     address     bio'\r\n    'profile-email       profile-email       bio'\r\n    'type-select type-select bio'\r\n    '.           .           .'\r\n    'submit      submit      submit';\r\n}\r\n\r\n.first-name {\r\n  grid-area: first-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.last-name {\r\n  grid-area: last-name;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.address {\r\n  grid-area: address;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.profile-email {\r\n  grid-area: profile-email;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.password {\r\n  grid-area: password;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.type-select {\r\n  grid-area: type-select;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n}\r\n\r\n.bio {\r\n  grid-area: bio;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border: solid;\r\n  border-radius: 5%;\r\n}\r\n\r\n.submit {\r\n  grid-area: submit;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  border: solid;\r\n  border-radius: 20%;\r\n  background-color: lightgray;\r\n  max-height: 50px;\r\n  max-width: 175px;\r\n  margin-left: 40%;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/professional/profile-professional/profile-professional.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/professional/profile-professional/profile-professional.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"profile-form-component-wrapper\"\n  #f=\"ngForm\"\n  (ngSubmit)=\"onSubmit()\">\n  <mat-form-field class=\"first-name\">\n    <input matInput\n      name=\"firstName\"\n      placeholder=\"First Name\"\n      type=\"text\"\n      [(ngModel)]=\"loggedInUser.firstName\"\n      required>\n  </mat-form-field>\n  <mat-form-field class=\"last-name\">\n    <input matInput\n      name=\"lastName\"\n      placeholder=\"Last Name\"\n      type=\"text\"\n      [(ngModel)]=\"loggedInUser.lastName\"\n      required>\n  </mat-form-field>\n  <mat-form-field class=\"address\">\n    <input matInput\n      name=\"address\"\n      placeholder=\"Address\"\n      type=\"text\"\n      [(ngModel)]=\"loggedInUser.address\"\n      required\n      address>\n  </mat-form-field>\n  <mat-form-field class=\"profile-email\">\n    <input matInput\n      name=\"email\"\n      placeholder=\"Email\"\n      type=\"text\"\n      [(ngModel)]=\"loggedInUser.email\"\n      required\n      email>\n  </mat-form-field>\n  <!--   <mat-form-field class=\"password\">\n    <input matInput\n      name=\"password\"\n      placeholder=\"Password\"\n      type=\"password\"\n      [(ngModel)]=\"loggedInUser.password\"\n      required\n      password\n      minlength=\"8\">\n  </mat-form-field> -->\n  <mat-form-field class=\"type-select\">\n    <mat-select placeholder=\"Account Type\"\n      required\n      name=\"type\"\n      [(ngModel)]=\"loggedInUser.type\">\n      <mat-option *ngFor=\"let professionalType of professionalTypes\"\n        [value]=\"professionalType\">\n        {{ professionalType }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"bio\">\n    <textarea matInput\n      name=\"bio\"\n      placeholder=\"Describe yourself to potential patients!\"\n      type=\"text\"\n      matTextareaAutosize\n      matAutosizeMinRows=13\n      [(ngModel)]=\"loggedInUser.bio\"></textarea>\n  </mat-form-field>\n  <button class=\"submit\"\n    mat-button\n    type=\"submit\"\n    [disabled]=\"!f.valid\">Update</button>\n</form>\n"

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
/* harmony import */ var _models_account_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/account-type.model */ "./src/app/models/account-type.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
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
    function ProfileProfessionalComponent(data) {
        this.data = data;
        this.loggedInUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.professionalTypes = new _models_account_type_model__WEBPACK_IMPORTED_MODULE_0__["AccountType"]().getAllTypesArray();
    }
    ProfileProfessionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLoggedInUser().subscribe(function (user) {
            if (user.firstName !== undefined) {
                _this.loggedInUser = user;
                _this.originalEmail = _this.loggedInUser.email;
            }
        });
    };
    ProfileProfessionalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data
            .updateUser(this.originalEmail, this.loggedInUser)
            .subscribe(function (updatedUser) {
            _this.loggedInUser = updatedUser;
        });
    };
    ProfileProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile-professional',
            template: __webpack_require__(/*! ./profile-professional.component.html */ "./src/app/professional/profile-professional/profile-professional.component.html"),
            styles: [__webpack_require__(/*! ./profile-professional.component.css */ "./src/app/professional/profile-professional/profile-professional.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProfileProfessionalComponent);
    return ProfileProfessionalComponent;
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