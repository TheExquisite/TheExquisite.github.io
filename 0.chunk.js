webpackJsonp([0],{

/***/ "../../../../../src/app/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    text-align: center;\r\n}\r\n\r\n.heading{\r\n    padding-top: 10vh;\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"heading\">\n    About page\n  </div>\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/home/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/about/about.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    text-align: center;\r\n}\r\n\r\n.heading{\r\n    padding-top: 10vh;\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}\r\n\r\n.Gform{\r\n    transition: 1s;\r\n}\r\n\r\n.loading{\r\n    z-index: 2;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n<body> \n  <div class=\"heading\">\n    contact works!\n  </div>\n</body>\n!-->\n\n\n<iframe id=\"Gform\" class=\"Gform\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSfhuvJmE7jwij-f0A7-ILU04Ybxy9-dMT3ygnxwjw43gtHl_w/viewform?embedded=true\" width=\"100%\" height=\"1080px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent() {
        console.log("contact us loaded");
    }
    ContactComponent.prototype.ngOnInit = function () {
        var gForm = document.getElementById('Gform');
        gForm.style.paddingTop = "100%";
        gForm.style.cursor = "wait";
        gForm.onload = function () {
            gForm.style.cursor = "auto";
            gForm.style.paddingTop = "0";
        };
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'contact',
        template: __webpack_require__("../../../../../src/app/home/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/contact/contact.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    text-align: center;\r\n}\r\n\r\n.heading{\r\n    padding-top: 10vh;\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    \n  <div class=\"heading\">\n    Home page\n  </div>\n    \n</body>\n    "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing__ = __webpack_require__("../../../../../src/app/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_team_component__ = __webpack_require__("../../../../../src/app/home/team/team.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__home_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_5__team_team_component__["a" /* TeamComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_team_component__ = __webpack_require__("../../../../../src/app/home/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'the-team', component: __WEBPACK_IMPORTED_MODULE_3__team_team_component__["a" /* TeamComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=home.routing.js.map

/***/ }),

/***/ "../../../../../src/app/home/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nbody{\r\n    text-align: center;\r\n    display: block;\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.heading{\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}\r\n\r\n.portraitWrapper{\r\n    text-align: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.portrait{\r\n    text-align: center;\r\n    font-size: 3vh;\r\n    width: 20vw;   \r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none; \r\n    font-family: \"proxima-nova\", sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.bioBox{\r\n    text-align: center;\r\n    bottom: 0px;\r\n    position: fixed;\r\n    right: 15%;\r\n    width: 70%;\r\n    transition: 0.5s;\r\n    background-color: white;\r\n    color: black;\r\n    font-size: 3vh;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    border-radius: 6px;\r\n}\r\n\r\n.bioContent{\r\n    padding-top: 2vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"portraitWrapper\">\n    <div class=\"portrait\" (click)=\"switchBioTrigger(1)\">\n      <img>\n      <div>\n        Susie<br>\n        Co Founder\n      </div>\n    </div>\n    <div class=\"portrait\" (click)=\"switchBioTrigger(2)\">\n      <img>\n      <div>\n        Deborah<br>\n        Co Founder\n      </div>\n    </div>\n    <div class=\"portrait\" (click)=\"switchBioTrigger(3)\">\n      <img>\n      <div>\n        James<br>\n        Developer \n      </div>\n    </div>\n  </div>\n\n  <div id=\"bio\" class=\"bioBox\">\n    <div class=\"bioContent\">{{currentText}}</div>\n  </div>\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/home/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_textStore__ = __webpack_require__("../../../../../src/assets/textStore.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = (function () {
    function TeamComponent() {
        this.currentText = "";
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.closeBio();
    };
    TeamComponent.prototype.ngOnDestroy = function () {
        this.closeBio();
    };
    TeamComponent.prototype.closeBio = function () {
        document.getElementById("bio").style.height = "0px";
        this.currentText = "";
    };
    TeamComponent.prototype.switchBioTrigger = function (currentBio) {
        var _this = this;
        document.getElementById("bio").style.height = "0px";
        if (document.getElementById("bio").clientHeight != 0) {
            setTimeout(function () { return _this.switchBio(currentBio); }, 500);
        }
        else {
            this.switchBio(currentBio);
        }
    };
    TeamComponent.prototype.switchBio = function (currentBio) {
        if (currentBio == 0) {
            document.getElementById("bio").style.height = "300px";
            this.currentText = "";
        }
        if (currentBio == 1) {
            document.getElementById("bio").style.height = "300px";
            this.currentText = __WEBPACK_IMPORTED_MODULE_2__assets_textStore__["a" /* susieBio */];
        }
        if (currentBio == 2) {
            document.getElementById("bio").style.height = "300px";
            this.currentText = __WEBPACK_IMPORTED_MODULE_2__assets_textStore__["b" /* debBio */];
        }
        if (currentBio == 3) {
            document.getElementById("bio").style.height = "300px";
            this.currentText = __WEBPACK_IMPORTED_MODULE_2__assets_textStore__["c" /* jamesBio */];
        }
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/home/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/team/team.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/assets/textStore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return susieBio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return debBio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return jamesBio; });
var susieBio = "This is Susie's bio, ect ect ect";
var debBio = "This is Deborah's bio, ect ect ect";
var jamesBio = "This is James' bio, wow, he really is the best programmer isn't he.";
//# sourceMappingURL=textStore.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map