"use strict";
(self["webpackChunkfriendly_time"] = self["webpackChunkfriendly_time"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_food_new_search_new_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-food/new-search/new-search.component */ 4052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: _search_food_new_search_new_search_component__WEBPACK_IMPORTED_MODULE_0__.NewSearchComponent }, // 配置導航到 StockListComponent
    // 如果有其他路由，可以繼續加上
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'friendly-time';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _search_food_search_food_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-food/search-food.module */ 8897);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _search_food_search_food_module__WEBPACK_IMPORTED_MODULE_2__.SearchFoodModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _search_food_search_food_module__WEBPACK_IMPORTED_MODULE_2__.SearchFoodModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule] }); })();


/***/ }),

/***/ 3301:
/*!******************************************!*\
  !*** ./src/app/pipes/empty-info.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyInfoPipe": () => (/* binding */ EmptyInfoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EmptyInfoPipe {
    transform(value) {
        // 如果字串為空，回傳 "暫無資訊"
        return value === '' ? '暫無資訊' : value;
    }
}
EmptyInfoPipe.ɵfac = function EmptyInfoPipe_Factory(t) { return new (t || EmptyInfoPipe)(); };
EmptyInfoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "emptyInfo", type: EmptyInfoPipe, pure: true });


/***/ }),

/***/ 8007:
/*!*************************************!*\
  !*** ./src/app/pipes/round.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundPipe": () => (/* binding */ RoundPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RoundPipe {
    transform(value, precision = 0) {
        // 嘗試將輸入轉換為數字
        const numericValue = parseFloat(value);
        // 檢查是否是有效的數字
        if (isNaN(numericValue)) {
            return value; // 如果不是有效的數字，返回原始輸入
        }
        // 使用 Math.round() 進行四捨五入
        const factor = Math.pow(10, precision); // 計算小數位數
        return Math.round(numericValue * factor) / factor; // 四捨五入到指定的精度
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "round", type: RoundPipe, pure: true });


/***/ }),

/***/ 6047:
/*!********************************************************!*\
  !*** ./src/app/search-food/model/family-mart.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 796:
/*!*********************************************************!*\
  !*** ./src/app/search-food/model/seven-eleven.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6429:
/*!*********************************************************************!*\
  !*** ./src/app/search-food/new-search/display/display.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayComponent": () => (/* binding */ DisplayComponent)
/* harmony export */ });
/* harmony import */ var _model_seven_eleven_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/seven-eleven.model */ 796);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ 6541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_seven_eleven_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/seven-eleven-request.service */ 6325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/round.pipe */ 8007);
/* harmony import */ var _pipes_empty_info_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/empty-info.pipe */ 3301);

 // 根據你的實際路徑導入模型






function DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u65B0\u54C1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u7279\u50F9\u4E2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u50F9\u683C(NT$): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "emptyInfo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "emptyInfo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.getFoodDetail(item_r7).originalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 4, ctx_r10.getFoodDetail(item_r7).discountedPrice, 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u5546\u54C1\u63CF\u8FF0: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, ctx_r10.getFoodDetail(item_r7).content), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u5361\u8DEF\u91CC(kcal): ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 9, ctx_r10.getFoodDetail(item_r7).kcal), "");
} }
function DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u6B64\u5546\u54C1\u7121\u76F8\u95DC\u8CC7\u8A0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 10)(4, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_div_9_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_div_10_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_ng_container_11_Template, 17, 11, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_ng_template_12_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.getFoodDetail(item_r7).image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r6.getFoodDetail(item_r7).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r7.ItemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u5269\u9918\u6578\u91CF: ", item_r7.RemainingQty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.getFoodDetail(item_r7).new === "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.getFoodDetail(item_r7).special_sale === "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.getFoodDetail(item_r7).name)("ngIfElse", _r11);
} }
function DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_li_5_Template, 14, 8, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subCategory_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subCategory_r4.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.itemsBySubCategory[subCategory_r4.Name]);
} }
function DisplayComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DisplayComponent_div_0_ng_container_1_ng_container_3_div_1_Template, 6, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subCategory_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.itemsBySubCategory[subCategory_r4.Name] && ctx_r3.itemsBySubCategory[subCategory_r4.Name].length > 0);
} }
function DisplayComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DisplayComponent_div_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.category.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.subCategories);
} }
function DisplayComponent_div_0_ng_container_2_ng_container_3_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 8)(2, "div", 10)(3, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r19.ItemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u5269\u9918\u6578\u91CF: ", item_r19.RemainingQty, " ");
} }
function DisplayComponent_div_0_ng_container_2_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DisplayComponent_div_0_ng_container_2_ng_container_3_div_1_li_5_Template, 7, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subCategory_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subCategory_r16.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r17.itemsBySubCategory[subCategory_r16.name]);
} }
function DisplayComponent_div_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DisplayComponent_div_0_ng_container_2_ng_container_3_div_1_Template, 6, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subCategory_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.itemsBySubCategory[subCategory_r16.name] && ctx_r15.itemsBySubCategory[subCategory_r16.name].length > 0);
} }
function DisplayComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DisplayComponent_div_0_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.subCategories);
} }
function DisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DisplayComponent_div_0_ng_container_1_Template, 4, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DisplayComponent_div_0_ng_container_2_Template, 4, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.category.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.category.name);
} }
class DisplayComponent {
    constructor(sevenElevenRequestService) {
        this.sevenElevenRequestService = sevenElevenRequestService;
        this.subCategories = [];
        this.itemsBySubCategory = {}; // 儲存每個子分類的商品列表
        this.foodDetails = [];
    }
    ngOnInit() {
        // 初始化的時候讀取存在.json的7-11商品細節
        this.sevenElevenRequestService.getFoodDetails().subscribe((data) => {
            this.foodDetails = data;
            console.log(this.foodDetails);
        });
    }
    ngOnChanges(changes) {
        // 若組件輸入有變化時，重新載入子商品列表
        if (changes['category'] || changes['store']) {
            this.loadSubCategories(); // 重新加載子分類資料
        }
    }
    loadSubCategories() {
        if (this.store && this.category) {
            if (this.store.StoreName) {
                this.subCategories = this.category.Children; // 更新子分類列表
                console.log('subCategories', this.subCategories);
                this.loadItemsBySubCategory(); // 載入子分類下的所有商品資料
            }
            else if (this.store.name) {
                this.subCategories = this.category.categories;
                console.log('subCategories', this.subCategories);
                // 全家直接把商品丟進itemsBySubCategory
                const items = [];
                this.subCategories.forEach((cat) => {
                    console.log('cat', cat);
                    items.push(...cat.products.map((product) => ({
                        ItemName: product.name,
                        RemainingQty: product.qty, // 映射到 RemainingQty
                    })));
                    this.itemsBySubCategory[cat.name] = items || [];
                });
                console.log('itemsBySubCategory', this.itemsBySubCategory);
            }
        }
    }
    loadItemsBySubCategory() {
        if (this.store) {
            this.sevenElevenRequestService.getItemsByStoreNo(this.store.StoreNo).subscribe(response => {
                if (response.isSuccess && response.element.StoreStockItem) {
                    const categoryStockItems = response.element.StoreStockItem.CategoryStockItems;
                    this.subCategories.forEach(subCategory => {
                        const items = [];
                        // 遍歷 CategoryStockItems，根據子分類名稱過濾並提取 ItemList
                        categoryStockItems.forEach(category => {
                            if (category.Name === subCategory.Name) {
                                items.push(...category.ItemList);
                            }
                        });
                        // 把結果保存到 itemsBySubCategory
                        this.itemsBySubCategory[subCategory.Name] = items || [];
                    });
                }
                console.log('itemsBySubCategory', this.itemsBySubCategory);
            });
        }
    }
    // getSubCategoryQty(subCategoryName: string): number {
    //   let qty = 0;
    //   const items = this.itemsBySubCategory[subCategoryName];
    //   if (items) {
    //     items.forEach(item => {
    //       qty += item.RemainingQty;
    //     });
    //   }
    //   return qty;
    // }
    getDiscountedPrice(originalPrice) {
        // 解析原價
        const price = parseFloat(originalPrice.replace('NT$', '').trim());
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let discountedPrice = price;
        // 設定折扣邏輯
        if (currentHour >= 19 && currentHour < 20) {
            discountedPrice *= 0.8; // 19:00~19:59 八折
        }
        else if ((currentHour >= 10 && currentHour < 18) || (currentHour >= 20 || currentHour < 3)) {
            discountedPrice *= 0.65; // 10:00~17:59 以及 20:00~03:00 六五折
        }
        else {
            // 待查清其餘時段是幾折==，目前假設八折
            discountedPrice *= 0.8;
        }
        return discountedPrice.toString();
    }
    getFoodDetail(item) {
        // 設置 Fuse.js 配置選項
        const options = {
            includeScore: true,
            threshold: 0.3,
            keys: ['name'] // 搜尋的欄位是 'name'
        };
        // 初始化 Fuse 進行模糊搜尋
        const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.foodDetails, options);
        // 查找最匹配的項目
        const result = fuse.search(item.ItemName);
        // 如果找到匹配項，則返回最相似的那個
        const foodDetail = result.length > 0 ? result[0].item : {
            category: '',
            content: '',
            image: 'assets/此商品暫無圖片.png',
            kcal: '',
            name: '',
            new: 'False',
            price: '',
            special_sale: 'False'
        };
        // 計算折扣後的價格
        const discountedPrice = this.getDiscountedPrice(foodDetail.price);
        // 將計算結果新增到 foodDetail 物件中
        foodDetail['discountedPrice'] = discountedPrice;
        foodDetail['originalPrice'] = foodDetail.price; // 原價
        return foodDetail;
    }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_seven_eleven_request_service__WEBPACK_IMPORTED_MODULE_1__.SevenElevenRequestService)); };
DisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], inputs: { store: "store", category: "category" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-2xl", "font-bold", "mb-4"], [4, "ngFor", "ngForOf"], ["class", "sub-category-item bg-white border border-gray-300 p-6 mb-8 rounded-lg shadow-lg", 4, "ngIf"], [1, "sub-category-item", "bg-white", "border", "border-gray-300", "p-6", "mb-8", "rounded-lg", "shadow-lg"], [1, "mb-4"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "space-y-6"], [1, "food-item", "flex", "items-start", "p-4", "border", "border-gray-200", "rounded-lg", "shadow-sm", "hover:shadow-md", "transition-shadow"], [1, "object-contain", "rounded-lg", "mr-6", "shadow-md", "w-40", "h-40", 3, "src", "alt"], [1, "flex-1"], [1, "text-xl", "font-semibold", "text-gray-800"], [1, "inline-block", "bg-green-100", "text-green-800", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "flex", "space-x-2", "mb-2"], ["class", "inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full", 4, "ngIf"], ["class", "inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noNameTemplate", ""], [1, "inline-block", "bg-red-100", "text-red-800", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "inline-block", "bg-yellow-100", "text-yellow-800", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "text-base", "font-semibold", "text-gray-800", "mb-3"], [1, "text-gray-800"], [1, "line-through", "text-gray-500"], [1, "text-red-600", "mx-2"], [1, "text-red-600"], [1, "text-sm", "text-gray-500", "mb-2"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DisplayComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.subCategories.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_2__.RoundPipe, _pipes_empty_info_pipe__WEBPACK_IMPORTED_MODULE_3__.EmptyInfoPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4052:
/*!****************************************************************!*\
  !*** ./src/app/search-food/new-search/new-search.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewSearchComponent": () => (/* binding */ NewSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _model_seven_eleven_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/seven-eleven.model */ 796);
/* harmony import */ var _model_family_mart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/family-mart.model */ 6047);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var _services_seven_eleven_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/seven-eleven-request.service */ 6325);
/* harmony import */ var _services_family_mart_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/family-mart-request.service */ 4107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/display.component */ 6429);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/round.pipe */ 8007);




















function NewSearchComponent_mat_option_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const store_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r4.sevenElevenIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", store_r3.name, "\u9580\u5E02");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](store_r3.addr);
} }
function NewSearchComponent_mat_option_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const store_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r5.familyMartIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](store_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](store_r3.addr);
} }
function NewSearchComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewSearchComponent_mat_option_17_div_1_Template, 6, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NewSearchComponent_mat_option_17_div_2_Template, 6, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const store_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", store_r3.label + store_r3.name + "\u9580\u5E02");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", store_r3.label === "7-11");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", store_r3.label === "\u5168\u5BB6");
} }
const _c0 = function (a0) { return { "opacity": a0 }; };
function NewSearchComponent_div_26_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewSearchComponent_div_26_div_1_ng_container_1_div_14_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const category_r14 = restoredCtx.$implicit; const store_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.toggleSubCategoryDetails(store_r9, category_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r14 = ctx.$implicit;
    const store_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("pointer-events-none", ctx_r12.getSubCategoryTotalQty(store_r9, category_r14) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", category_r14.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", category_r14.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, ctx_r12.getSubCategoryTotalQty(store_r9, category_r14) === 0 ? 0.3 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](category_r14.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u6578\u91CF: ", ctx_r12.getSubCategoryTotalQty(store_r9, category_r14), "");
} }
function NewSearchComponent_div_26_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-display", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("store", ctx_r13.selectedStore)("category", ctx_r13.selectedCategory);
} }
function NewSearchComponent_div_26_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 23)(2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 26)(13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, NewSearchComponent_div_26_div_1_ng_container_1_div_14_Template, 6, 9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, NewSearchComponent_div_26_div_1_ng_container_1_div_16_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const store_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r10.sevenElevenIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" 7-11", store_r9.StoreName, "\u9580\u5E02 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u8DDD\u96E2: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 7, store_r9.distance, 1), " \u516C\u5C3A");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u662F\u5426\u71DF\u696D: ", store_r9.IsOperateTime ? "\u662F" : "\u5426", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u7E3D\u5269\u9918\u6578\u91CF: ", store_r9.RemainingQty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](15, 10, ctx_r10.foodCategories, 0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.selectedCategory && ctx_r10.selectedStore === store_r9);
} }
function NewSearchComponent_div_26_div_1_ng_container_2_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewSearchComponent_div_26_div_1_ng_container_2_div_12_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const category_r23 = restoredCtx.$implicit; const store_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.toggleSubCategoryDetails(store_r9, category_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r23 = ctx.$implicit;
    const store_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("pointer-events-none", ctx_r21.getFSubCategoryQty(store_r9, category_r23) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", ctx_r21.getFCatName(category_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r21.getFUrl(category_r23), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, ctx_r21.getFSubCategoryQty(store_r9, category_r23) === 0 ? 0.3 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r21.getFCatName(category_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u6578\u91CF: ", ctx_r21.getFSubCategoryQty(store_r9, category_r23), "");
} }
function NewSearchComponent_div_26_div_1_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-display", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("store", ctx_r22.selectedStore)("category", ctx_r22.selectedCategory);
} }
function NewSearchComponent_div_26_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 23)(2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 26)(11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, NewSearchComponent_div_26_div_1_ng_container_2_div_12_Template, 6, 9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, NewSearchComponent_div_26_div_1_ng_container_2_div_14_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const store_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r11.familyMartIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", store_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u8DDD\u96E2: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 6, store_r9.distance, 1), " \u516C\u5C3A");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u7E3D\u5269\u9918\u6578\u91CF: ", ctx_r11.getFStoreQty(store_r9), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](13, 9, store_r9.info, 0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.selectedCategory && ctx_r11.selectedStore === store_r9);
} }
function NewSearchComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewSearchComponent_div_26_div_1_ng_container_1_Template, 17, 14, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NewSearchComponent_div_26_div_1_ng_container_2_Template, 15, 13, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const store_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", store_r9.label === "7-11");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", store_r9.label === "\u5168\u5BB6");
} }
function NewSearchComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewSearchComponent_div_26_div_1_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.totalStoresShowList);
} }
class NewSearchComponent {
    constructor(http, geolocationService, sevenElevenService, familyMartService) {
        this.http = http;
        this.geolocationService = geolocationService;
        this.sevenElevenService = sevenElevenService;
        this.familyMartService = familyMartService;
        this.searchTerm = '';
        this.selectedStoreName = '';
        this.storeFilter = 'all';
        this.dropDown711List = [];
        this.dropDownFamilyMartList = [];
        this.unifiedDropDownList = [];
        this.sevenElevenIconUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.sevenElevenUrl.icon;
        this.familyMartIconUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.familyMartUrl.icon;
        this.zipcodes = []; // 原始 API 資料
        this.cities = []; // 縣市清單
        this.filteredDistricts = []; // 篩選後的行政區列表
        this.zipcodeList = [];
        this.selectedCity = null; // 選擇的縣市
        this.selectedDistrict = null; // 選擇的行政區
        this.selectedZipcode = null; // 對應的郵遞區號
        this.foodCategories = [];
        this.nearby711Stores = []; // 儲存用現在位置找到的711
        this.nearbyFamilyMartStores = []; // 儲存用現在位置找到的全家
        this.totalStoresShowList = []; //為了方便顯示所以統一
        this.filteredStoresList = []; // 用來儲存篩選後的商店列表
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            selectedStoreName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''), // 控制選中的商店
        });
    }
    ngOnInit() {
        this.init();
    }
    getCityName() {
        const apiUrl = 'https://demeter.5fpro.com/tw/zipcodes.json'; // API URL
        return this.http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)((data) => {
            this.zipcodes = data;
            this.cities = [...new Set(data.map((item) => item.city_name))];
            this.zipcodeList = [...new Set(data.map((item) => item.zipcode))];
        }));
    }
    // 當縣市選擇改變時
    onCityChange(city) {
        // 根據選擇的縣市篩選行政區
        this.filteredDistricts = this.zipcodes.filter((item) => item.city_name === city);
        this.selectedDistrict = null; // 清空選中的行政區
        this.selectedZipcode = null; // 清空郵遞區號
    }
    // 當行政區選擇改變時
    onDistrictChange(zipcode) {
        // 更新選擇的郵遞區號
        this.selectedZipcode = zipcode;
    }
    handleError(error) {
        switch (error.code) {
            case 1:
                return '使用者拒絕位置存取';
            case 2:
                return '無法取得位置資訊';
            case 3:
                return '位置請求逾時';
            default:
                return '未知錯誤';
        }
    }
    init() {
        // // 使用 from 將 Promise 轉換為 Observable
        // this.getCityName();
        //取得所有全家商店名稱資訊
        this.getFamilyMartAllStore();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => {
            return this.sevenElevenService.getAccessToken();
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)((token) => {
            if (token && token.element) {
                sessionStorage.setItem('711Token', token.element);
                console.log('Stored 711Token:', sessionStorage.getItem('711Token'));
                // 如果 token 儲存成功，發送 getFoodCategory 請求
                return this.sevenElevenService.getFoodCategory();
            }
            else {
                // 如果 token 沒有成功返回，返回空陣列
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)((error) => {
            // 錯誤處理邏輯
            console.error('Error:', error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]); // 在出錯時返回空陣列，防止應用崩潰
        })).subscribe((res) => {
            if (res && res.element) {
                this.foodCategories = res.element;
                console.log('Food Categories:', this.foodCategories);
            }
            else {
                console.error('Failed to fetch food categories');
            }
        });
    }
    getFamilyMartAllStore() {
        this.familyMartService.getStores().subscribe((data) => {
            if (data.length > 0) {
                this.dropDownFamilyMartList = data;
            }
        });
    }
    getFoodSubCategoryImage(nodeID) {
        // 查找匹配的子分類
        for (let category of this.foodCategories) {
            const subCategory = category.Children.find(child => child.ID === nodeID);
            if (subCategory) {
                // 找到對應的子分類並返回其對應的分類圖片 URL
                return category.ImageUrl;
            }
        }
        // 如果沒有找到對應的子分類，返回 null
        return null;
    }
    getSubCategoryTotalQty(store, category) {
        let totalQty = 0;
        // 遍歷商店中的所有商品，檢查是否屬於當前分類及子分類
        for (const stockItem of store.CategoryStockItems) {
            // 遍歷每個分類的子項目，檢查是否屬於這個 category
            for (const child of category.Children) {
                if (stockItem.NodeID === child.ID) {
                    totalQty += stockItem.RemainingQty;
                }
            }
        }
        return totalQty;
    }
    // 當用戶點擊某個分類時，切換選中的分類與店鋪
    toggleSubCategoryDetails(store, category) {
        this.selectedCategory = category;
        this.selectedStore = store;
    }
    onSearchStore(event) {
        const input = event.target.value; // 確保這裡的值是有效的
        console.log('輸入的值:', input); // 確認輸入的值是否正確
        if (input.length >= 2) {
            // 假設這是你的API調用邏輯
            this.sevenElevenService.getStoreByAddress(input).subscribe((data) => {
                if (data && data.isSuccess) {
                    this.dropDown711List = data.element;
                    // 刪掉全家兩個字以免使用者誤搜，篩選 unifiedDropDownList，篩選條件是 Name 和 addr 都包含 input
                    const filteredDropDownFamilyMartList = this.dropDownFamilyMartList
                        .map(item => ({
                        ...item,
                        Name: item.Name.replace('全家', '') // 去除 "全家" 字串
                    }))
                        .filter(item => item.Name.includes(input) || item.addr.includes(input));
                    // 統一兩個列表的名稱欄位
                    const normalizedFamilyMartList = filteredDropDownFamilyMartList.map(item => ({
                        name: item.Name,
                        addr: item.addr,
                        label: '全家',
                    }));
                    const normalized711List = this.dropDown711List.map(item => ({
                        name: item.StoreName,
                        addr: item.Address,
                        label: '7-11',
                    }));
                    normalized711List.forEach(item => {
                        if (!this.unifiedDropDownList.some(existingItem => existingItem.name === item.name && existingItem.addr === item.addr)) {
                            this.unifiedDropDownList.push(item); // 同樣的檢查，防止重複
                        }
                    });
                    normalizedFamilyMartList.forEach(item => {
                        if (!this.unifiedDropDownList.some(existingItem => existingItem.name === item.name && existingItem.addr === item.addr)) {
                            this.unifiedDropDownList.push(item); // 只有當 unifedDropDownList 中沒有該元素時才添加
                        }
                    });
                }
            }, (error) => {
                console.error('API 請求錯誤:', error);
            });
        }
        else {
            this.unifiedDropDownList = [];
        }
    }
    onSubmit() {
        console.log('提交的搜索內容:', this.searchTerm);
    }
    onUseCurrentLocation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.from)(this.geolocationService.getCurrentPosition())
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            console.log('Latitude:', lat, 'Longitude:', lng);
            this.latitude = lat;
            this.longitude = lng;
            console.log('已取得位置');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)((res) => {
            if (res) {
                return this.sevenElevenService.getAccessToken();
            }
            else {
                return [];
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)((token) => {
            if (token && token.element) {
                sessionStorage.setItem('711Token', token.element);
                console.log('Stored 711Token:', sessionStorage.getItem('711Token'));
                // 如果 token 儲存成功，發送 getFoodCategory 請求
                return this.sevenElevenService.getFoodCategory();
            }
            else {
                // 如果 token 沒有成功返回，返回空陣列
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
            }
        })).subscribe((res) => {
            if (res) {
                this.combineAndTransformStores();
            }
            else {
                console.error('Failed to fetch food categories');
            }
        });
    }
    transformFStyleTo711() {
        // 清空統一列表，避免重複累加
        this.totalStoresShowList = [];
        // 處理 7-11 商店
        this.nearby711Stores.forEach((store) => {
            const transformedStore = {
                ...store,
                label: '7-11',
                distance: store.Distance // 統一使用 `distance` 字段
            };
            this.totalStoresShowList.push(transformedStore); // 推入統一列表
        });
        // 處理全家商店
        this.nearbyFamilyMartStores.forEach((store) => {
            const transformedStore = {
                ...store,
                label: '全家',
                distance: store.distance // 統一使用 `distance` 字段
            };
            this.totalStoresShowList.push(transformedStore); // 推入統一列表
        });
        // 根據距離排序
        this.totalStoresShowList.sort((a, b) => a.distance - b.distance);
        console.log('totalStoresShowList', this.totalStoresShowList);
    }
    combineAndTransformStores() {
        const locationData711 = {
            CurrentLocation: {
                Latitude: this.latitude,
                Longitude: this.longitude
            },
            SearchLocation: {
                Latitude: this.latitude,
                Longitude: this.longitude
            }
        };
        const locationFamilyMart = {
            Latitude: this.latitude,
            Longitude: this.longitude
        };
        // 結合兩個 API 請求
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)({
            sevenEleven: this.sevenElevenService.getNearByStoreList(locationData711),
            familyMart: this.familyMartService.getNearByStoreList(locationFamilyMart)
        }).subscribe(({ sevenEleven, familyMart }) => {
            // 處理 7-11 資料
            if (sevenEleven && sevenEleven.element && sevenEleven.element.StoreStockItemList) {
                this.nearby711Stores = sevenEleven.element.StoreStockItemList.sort((a, b) => a.Distance - b.Distance);
            }
            // 處理全家資料
            if (familyMart && familyMart.code === 1) {
                this.nearbyFamilyMartStores = familyMart.data.sort((a, b) => a.distance - b.distance);
            }
            // 等兩者完成後合併資料
            this.transformFStyleTo711();
        }, (error) => {
            console.error('Error fetching store data:', error);
        });
    }
    getFStoreQty(store) {
        var totalQty = 0;
        store.info.forEach((cat) => {
            totalQty += cat.qty;
        });
        return totalQty;
    }
    getFUrl(cat) {
        return cat.iconURL;
    }
    getFCatName(cat) {
        return cat.name;
    }
    getFSubCategoryQty(store, cat) {
        return cat.qty;
    }
}
NewSearchComponent.ɵfac = function NewSearchComponent_Factory(t) { return new (t || NewSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_seven_eleven_request_service__WEBPACK_IMPORTED_MODULE_4__.SevenElevenRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_family_mart_request_service__WEBPACK_IMPORTED_MODULE_5__.FamilyMartRequestService)); };
NewSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NewSearchComponent, selectors: [["app-new-search"]], decls: 27, vars: 4, consts: [[1, "container", "mx-auto", "my-8", "p-6", "bg-white", "shadow-lg", "rounded-lg", "max-w-4xl"], [1, "flex", "flex-col", "items-center"], [1, "text-2xl", "font-bold", "text-center", "mb-6"], [1, "text-sm", "text-red-600", "mb-4"], [1, "w-full", 3, "ngSubmit"], [1, "flex", "justify-center", "gap-4", "w-full", "items-center"], [1, "w-3/4", "sm:w-1/2"], ["matSuffix", "", 1, "text-gray-500"], ["matInput", "", "placeholder", "\u8ACB\u8F38\u5165\u5169\u500B\u5B57\u4EE5\u4E0A\u4E4B\u5E97\u540D\u6216\u5730\u5740", "name", "searchTerm", 1, "p-3", "border-2", "border-gray-300", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "matAutocomplete", "ngModel", "ngModelChange", "input"], ["auto", "matAutocomplete"], ["class", "p-2 hover:bg-blue-100 focus:bg-blue-200", 3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "disabled", "true", "mat-raised-button", "", "color", "primary", 1, "ml-4", "px-6", "py-3", "bg-blue-500", "text-white", "rounded-md", "hover:bg-blue-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "flex", "items-center", "gap-2", "text-base", "md:text-sm"], [1, "text-sm"], ["type", "button", "mat-raised-button", "", "color", "warn", 1, "ml-4", "px-6", "py-3", "bg-red-500", "text-white", "rounded-md", "hover:bg-red-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "flex", "items-center", "gap-2", "text-base", "md:text-sm", 3, "click"], [4, "ngIf"], [1, "p-2", "hover:bg-blue-100", "focus:bg-blue-200", 3, "value"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], ["alt", "7-Eleven Icon", 1, "w-4", "h-4", 3, "src"], [1, "text-sm", "text-gray-500"], ["alt", "FamilyMart Icon", 1, "w-4", "h-4", 3, "src"], ["class", "store p-4 border border-gray-300 rounded-lg shadow-md mb-6", 4, "ngFor", "ngForOf"], [1, "store", "p-4", "border", "border-gray-300", "rounded-lg", "shadow-md", "mb-6"], [1, "store-icon", "mr-4"], [1, "text-lg", "font-semibold", "flex", "items-center"], ["alt", "Store Icon", 1, "object-cover", "mr-2", 3, "src"], [1, "food-categories", "mt-4"], [1, "grid", "grid-cols-5", "gap-4"], ["class", "category border p-4 rounded-lg text-center cursor-pointer", 3, "pointer-events-none", "click", 4, "ngFor", "ngForOf"], ["class", "sub-category-details mt-4", 4, "ngIf"], [1, "category", "border", "p-4", "rounded-lg", "text-center", "cursor-pointer", 3, "click"], [1, "w-16", "h-16", "mx-auto", "mb-2", "object-cover", 3, "src", "alt", "ngStyle"], [1, "text-sm", "font-medium"], [1, "text-xs"], [1, "sub-category-details", "mt-4"], [3, "store", "category"]], template: function NewSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u5E97\u540D\u5730\u5740\u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "* \u9810\u8A2D\u986F\u793A\u76EE\u524D\u6240\u5728\u4F4D\u7F6E\u9644\u8FD1\u5546\u5E97");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "* \u5168\u5BB6\u4FBF\u5229\u5546\u5E97\u672A\u63D0\u4F9B\u8A73\u7D30\u5546\u54C1\u8CC7\u8A0A\uFF0C\u56E0\u6B64\u50C5\u986F\u793A\u5546\u54C1\u8207\u6578\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function NewSearchComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 5)(11, "mat-form-field", 6)(12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function NewSearchComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchTerm = $event; })("input", function NewSearchComponent_Template_input_input_14_listener($event) { return ctx.onSearchStore($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-autocomplete", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, NewSearchComponent_mat_option_17_Template, 3, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 11)(19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " \u95DC\u9375\u5B57\u67E5\u8A62\u65BD\u5DE5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewSearchComponent_Template_button_click_22_listener() { return ctx.onUseCurrentLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " \u4F7F\u7528\u76EE\u524D\u4F4D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, NewSearchComponent_div_26_Template, 2, 1, "div", 14);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r0)("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.unifiedDropDownList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalStoresShowList.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _display_display_component__WEBPACK_IMPORTED_MODULE_6__.DisplayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_7__.RoundPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4107:
/*!********************************************************************************!*\
  !*** ./src/app/search-food/new-search/services/family-mart-request.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyMartRequestService": () => (/* binding */ FamilyMartRequestService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/request.service */ 9854);



class FamilyMartRequestService {
    constructor(requestService) {
        this.requestService = requestService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.familyMartUrl.base;
    }
    getStores() {
        const url = 'assets/family_mart_stores.json';
        return this.requestService.get(url);
    }
    getNearByStoreList(location) {
        const url = this.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.familyMartUrl.endpoint.mapProductInfo;
        const body = {
            "ProjectCode": "202106302",
            "OldPKeys": [],
            "PostInfo": "",
            "Latitude": location.Latitude,
            "Longitude": location.Longitude
        };
        return this.requestService.post(url, null, body);
    }
}
FamilyMartRequestService.ɵfac = function FamilyMartRequestService_Factory(t) { return new (t || FamilyMartRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
FamilyMartRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FamilyMartRequestService, factory: FamilyMartRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6325:
/*!*********************************************************************************!*\
  !*** ./src/app/search-food/new-search/services/seven-eleven-request.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SevenElevenRequestService": () => (/* binding */ SevenElevenRequestService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/request.service */ 9854);



class SevenElevenRequestService {
    constructor(requestService) {
        this.requestService = requestService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.base;
    }
    getAccessToken() {
        const url = this.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.endpoint.accessToken;
        const params = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.params;
        return this.requestService.post(url, params);
    }
    getStoreByAddress(keyword) {
        const url = this.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.endpoint.getStoreByAddress;
        const params = {
            'token': sessionStorage.getItem('711Token'),
            'keyword': keyword
        };
        return this.requestService.post(url, params);
    }
    getNearByStoreList(location) {
        const url = this.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.endpoint.getNearbyStoreList;
        const params = {
            'token': sessionStorage.getItem('711Token')
        };
        return this.requestService.post(url, params, location);
    }
    getFoodCategory() {
        const url = this.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.endpoint.getList;
        const params = {
            'token': sessionStorage.getItem('711Token')
        };
        return this.requestService.post(url, params);
    }
    getItemsByStoreNo(storeNo) {
        const url = this.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sevenElevenUrl.endpoint.getStoreDetail;
        const params = {
            'token': sessionStorage.getItem('711Token'),
        };
        const body = {
            storeNo: storeNo,
            CurrentLocation: {
                Latitude: 25.0375197,
                Longitude: 121.5636704
            }
        };
        return this.requestService.post(url, params, body);
    }
    getFoodDetails() {
        const url = 'assets/seven_eleven_products.json';
        return this.requestService.get(url);
    }
}
SevenElevenRequestService.ɵfac = function SevenElevenRequestService_Factory(t) { return new (t || SevenElevenRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
SevenElevenRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SevenElevenRequestService, factory: SevenElevenRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8897:
/*!***************************************************!*\
  !*** ./src/app/search-food/search-food.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFoodModule": () => (/* binding */ SearchFoodModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/round.pipe */ 8007);
/* harmony import */ var _pipes_empty_info_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/empty-info.pipe */ 3301);
/* harmony import */ var _new_search_display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-search/display/display.component */ 6429);
/* harmony import */ var _new_search_new_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-search/new-search.component */ 4052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);

 // 用於雙向綁定 [(ngModel)]

// 导入 Angular Material 模块
 // 用于 form-field
 // 用于下拉選單
 // 用于 mat-option
 // 用于 mat-label 和其他输入框功能

 // 用於 mat-autocomplete
 // 用於 mat-button






class SearchFoodModule {
}
SearchFoodModule.ɵfac = function SearchFoodModule_Factory(t) { return new (t || SearchFoodModule)(); };
SearchFoodModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SearchFoodModule });
SearchFoodModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SearchFoodModule, { declarations: [_new_search_display_display_component__WEBPACK_IMPORTED_MODULE_2__.DisplayComponent,
        _new_search_new_search_component__WEBPACK_IMPORTED_MODULE_3__.NewSearchComponent,
        _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_0__.RoundPipe,
        _pipes_empty_info_pipe__WEBPACK_IMPORTED_MODULE_1__.EmptyInfoPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule] }); })();


/***/ }),

/***/ 4375:
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationService": () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GeolocationService {
    constructor() { }
    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => resolve(position), (error) => reject(error));
            }
            else {
                reject(new Error('瀏覽器不支援地理位置功能'));
            }
        });
    }
}
GeolocationService.ɵfac = function GeolocationService_Factory(t) { return new (t || GeolocationService)(); };
GeolocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeolocationService, factory: GeolocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9854:
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class RequestService {
    constructor(http) {
        this.http = http;
    }
    get(url, params = {}) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
        // 處理 query parameters
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                httpParams = httpParams.set(key, params[key]);
            }
        }
        // 發送 GET 請求
        return this.http.get(url, { params: httpParams });
    }
    post(url, params, body) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
        // 直接將 params 加入 httpParams，不做物件檢查
        if (params) {
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    httpParams = httpParams.set(key, params[key]);
                }
            }
        }
        // 發送 POST 請求
        return this.http.post(url, body || {}, { params: httpParams });
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    familyMartUrl: {
        icon: 'https://www.family.com.tw/NewEnterprise/CSR/images/favicon.ico',
        base: 'https://stamp.family.com.tw/api/maps',
        storeQuery: 'https://family.map.com.tw/famiport/api/dropdownlist/Select_StoreName',
        endpoint: {
            mapClassificationInfo: '/MapClassificationInfo',
            mapProductInfo: '/MapProductInfo'
        }
    },
    sevenElevenUrl: {
        icon: 'https://www.7-11.com.tw/favicon.ico',
        base: 'https://lovefood.openpoint.com.tw/LoveFood/api/',
        endpoint: {
            accessToken: 'Auth/FrontendAuth/AccessToken',
            getList: 'Master/FrontendItemCategory/GetList',
            getStoreByAddress: 'Master/FrontendStore/GetStoreByAddress',
            getNearbyStoreList: 'Search/FrontendStoreItemStock/GetNearbyStoreList',
            getStoreDetail: 'Search/FrontendStoreItemStock/GetStoreDetail'
        },
        params: {
            mid_v: 'W0_DiF4DlgU5OeQoRswrRcaaNHMWOL7K3ra3389ocJQv-rdOWS6Zu4AtGa7-7pjiccl0C5gm0u5UNONXuVUXcJCidRjIv9dsUd8PocNr5moiuJJ8hZla5iV0H3-8dZfASc7GgEm74679LYK2hBB-Sam6D0LAnYK9Lb0DZjaSctnHS5yYugtrYNdWoWk'
        }
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map