webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		0
	],
	"./opps/opps.module": [
		"../../../../../src/app/opps/opps.module.ts",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://use.typekit.net/njs3dfl.css);", ""]);

// module
exports.push([module.i, "header{\r\n    margin: 0;\r\n}\r\n\r\nhtml, body, .contentWrapper {\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    position: fixed;\r\n    padding: 0;\r\n    z-index: 0;\r\n    margin: 0;\r\n    padding-bottom: 0 !important;\r\n    padding-top: 0 !important;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.contentWrapper{\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    background-color: orange;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.menuIcon {\r\n    font-size: 6vh;\r\n    transition: 0.5s;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n    color: gray;\r\n    position: fixed;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    font-weight: bold;\r\n} \r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 20px;\r\n    text-decoration: none;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n      padding-top: 15px;\r\n    }\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.navHeading{\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.route{\r\n    padding-left: 35px !important;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    font-size: 30px;\r\n}\r\n\r\n.footer {\r\n    position: fixed;\r\n    display: inline;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: gray;\r\n    color: black;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    font-size: 12px;\r\n}\r\n\r\n.footerLine {\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: black;\r\n    z-index: 3;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentWrapper\">\n  <router-outlet> \n  </router-outlet>\n</div>\n\n<span id=\"menuIcon\" class=\"menuIcon\" (click)=\"toggleNav()\">&#9776;</span>\n\n<div id=\"sideNav\" class=\"sidenav\">\n  <a class=\"navHeading\" routerLink=\"/home\" routerLinkActive=\"active\" style=\"padding-top:30px;\">Home</a>\n  <a class=\"route\" routerLink=\"/home/about\" routerLinkActive=\"active\">About&nbsp;Us</a>\n  <a class=\"route\" routerLink=\"/home/the-team\" routerLinkActive=\"active\">The&nbsp;Team</a>\n  <a class=\"route\" routerLink=\"/home/contact-us\" routerLinkActive=\"active\">Contact&nbsp;Us</a>\n  <a class=\"navHeading\" routerLink=\"/opportunities\" routerLinkActive=\"active\">Opportunities</a>\n  <a class=\"route\" routerLink=\"/opportunities/apprentices\" routerLinkActive=\"active\">Apprentices</a>\n  <a class=\"route\" routerLink=\"/opportunities/mentors\" routerLinkActive=\"active\">Mentors</a>\n  <a class=\"route\" routerLink=\"/opportunities/businesses\" routerLinkActive=\"active\">Businesses</a>\n  <a class=\"navHeading\" routerLink=\"/stories\" routerLinkActive=\"active\">Stories</a>\n</div>\n\n\n\n<div class=\"footer\">\n  <span style=\"float: left; padding-left: 15px; cursor: default; user-select: none\">Impact Dynamics Global</span>\n  <a style=\"float: right; padding-right: 15px; cursor: pointer\">Privacy Statement</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'app works!';
        this.navOpen = false;
        console.log("Website Author: James Clare");
        console.log("Iteration: 1.0.8");
        router.events.subscribe(function (val) {
            _this.closeNav();
            console.log(val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]);
        });
    }
    AppComponent.prototype.openNav = function () {
        document.getElementById("sideNav").style.width = "250px";
        document.getElementById("menuIcon").style.transform = "rotate(90deg)";
        this.navOpen = true;
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("menuIcon").style.transform = "rotate(0deg)";
        this.navOpen = false;
    };
    AppComponent.prototype.toggleNav = function () {
        if (this.navOpen) {
            this.closeNav();
        }
        else {
            this.openNav();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.custom-preloading.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPreloading; });

var CustomPreloading = (function () {
    function CustomPreloading() {
    }
    CustomPreloading.prototype.preload = function (route, load) {
        return route.data && route.data.preload ? load() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__["of"])(null);
    };
    return CustomPreloading;
}());

//# sourceMappingURL=app.custom-preloading.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_custom_preloading__ = __webpack_require__("../../../../../src/app/app.custom-preloading.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stories_stories_component__ = __webpack_require__("../../../../../src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stories_stories_component__["a" /* StoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__["a" /* BlogComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["b" /* routes */], { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_7__app_custom_preloading__["a" /* CustomPreloading */] })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__app_custom_preloading__["a" /* CustomPreloading */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stories_stories_component__ = __webpack_require__("../../../../../src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule', data: { preload: true } },
    { path: 'opportunities', loadChildren: './opps/opps.module#OppsModule' },
    { path: 'stories', component: __WEBPACK_IMPORTED_MODULE_2__stories_stories_component__["a" /* StoriesComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_3_app_blog_blog_component__["a" /* BlogComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, {
    useHash: true
});
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    text-align: center;\r\n}\r\n\r\n.heading{\r\n    padding-top: 10vh;\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGeniusApprenticeProgramme%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\" width=\"500\" height=\"1000\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n</body>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: \"Proxima Nova\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/ProximaNova-Regular.woff") + ") format(\"woff\"),\r\n   }\r\n\r\nbody{\r\n    text-align: center;\r\n}\r\n\r\n.fourohfour{\r\n    padding-top: 10vh;\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.notFound{\r\n    font-size: 6vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"fourohfour\">\n    404\n  </div>\n  <div class=\"notFound\">\n    Sorry, that page doesn't exist  \n  </div>   \n</body>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* style */])({ transform: 'translateX(100%)', position: 'fixed' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* animate */])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* style */])({ transform: 'translateX(0%)', position: 'fixed' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* animate */])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-top: 8vh;\r\n}\r\n\r\n.itemWrapper{\r\n    vertical-align: center;\r\n    background-color: white;\r\n    padding: 3vh;\r\n    width: 70vw;\r\n    height: 70vh;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contentWrapper {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: center;\r\n}\r\n\r\n.heading{\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}\r\n\r\n.youtube{\r\n    border-radius: 4px;\r\n    display: inline;\r\n    transition: 1s;\r\n    padding-left: 20px;\r\n    width: 30vw;\r\n    height: 35vh;\r\n}\r\n\r\n.facebook{\r\n    transition: 1s;\r\n    height: 60vh;\r\n}\r\n\r\n@media screen and (max-aspect-ratio: 1/1){\r\n    \r\n    .itemWrapper{\r\n        padding-top: 0;\r\n        display: block;\r\n        text-align: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        overflow-y: scroll;\r\n        overflow-x: hidden;\r\n        height: 98vh;\r\n    }\r\n\r\n    .contentWrapper{\r\n        padding-top: 0;\r\n        display: block;\r\n        text-align: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .facebook{\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .youtube{\r\n        width: 60vw;\r\n        padding-bottom: 30vh;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"itemWrapper\">\n      <div class=\"heading\">\n          Our Stories\n      </div>\n\n    <div class=\"contentWrapper\">\n      <iframe id=\"facebook\" class=\"facebook\" src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGeniusApprenticeProgramme%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n      <iframe id=\"youtube\" class=\"youtube\" src=\"https://www.youtube.com/embed/MrX3_ql7Z0M\"  frameborder=\"0\"></iframe>\n    </div>\n  </div>\n\n</body>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoriesComponent = (function () {
    function StoriesComponent() {
    }
    StoriesComponent.prototype.ngOnInit = function () {
        var facebook = document.getElementById('facebook');
        var youtube = document.getElementById('youtube');
        facebook.style.opacity = "0";
        facebook.style.cursor = "wait";
        facebook.onload = function () {
            facebook.style.cursor = "auto";
            facebook.style.opacity = "1";
        };
        youtube.style.opacity = "0";
        youtube.style.cursor = "wait";
        youtube.onload = function () {
            youtube.style.cursor = "auto";
            youtube.style.opacity = "1";
        };
    };
    return StoriesComponent;
}());
StoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-stories',
        template: __webpack_require__("../../../../../src/app/stories/stories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stories/stories.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], StoriesComponent);

//# sourceMappingURL=stories.component.js.map

/***/ }),

/***/ "../../../../../src/assets/ProximaNova-Regular.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ProximaNova-Regular.0f7cb3d197e5a46d03ad.woff";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map