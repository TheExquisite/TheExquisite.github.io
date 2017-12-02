webpackJsonp([0],{

/***/ "../../../../../src/app/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    vertical-align: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.contentWrapper{\r\n    vertical-align: center;\r\n    background-color: white;\r\n    padding: 3vh;\r\n    width: 60vw;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n\r\n.heading{\r\n    font-size: 5vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    padding-bottom: 3vh;\r\n}\r\n\r\n.subtext{\r\n    font-size: 3vh;\r\n    width: 70vw;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-aspect-ratio: 1/1){\r\n    .contentWrapper{\r\n        overflow-y: scroll;\r\n        height: 90vh;\r\n        width: 80vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"contentWrapper\">\n\n      <div class=\"heading\">\n          What is The Genius Apprentice Program?\n      </div>\n\n      A 12 month educational Earn as you Learn Social Entrepreneurial Apprenticeship aimed to grow business whilst developing future generations \n      to have the opportunities to develop skills to improve their knowledge and understanding of the future of entrepreneurial business, which is crucial for \n      the ever changing market <br><br>\n\n      Created by Entrepreneurs Institute and Impacts Dynamics Global, we are passionate about equipping the future generation of social entrepreneurs in all \n      economies with the skills, experience and inspiration to thrive and thus positively impact in their communities.   \n      A catalyst for sustainable change and empowerment, we are in a time where we have the power to create the world we desire. \n      \n\n  </div>\n\n\n</body>\n"

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
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* routerTransition */])()],
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
exports.push([module.i, "body{\r\n    text-align: center;\r\n    overflow: scroll;\r\n}\r\n\r\n.heading{\r\n    padding-top: 10vh;\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}\r\n\r\n.Gform{\r\n    transition: 1s;\r\n    height: 100vh;\r\n}\r\n\r\n.loading{\r\n    z-index: 2;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n<body> \n  <div class=\"heading\">\n    contact works!\n  </div>\n</body>\n!-->\n\n\n<iframe id=\"Gform\" class=\"Gform\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSfhuvJmE7jwij-f0A7-ILU04Ybxy9-dMT3ygnxwjw43gtHl_w/viewform?embedded=true\" width=\"100%\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"

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
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* routerTransition */])()],
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
exports.push([module.i, "body{\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    vertical-align: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.contentWrapper{\r\n    vertical-align: center;\r\n    background-color: white;\r\n    padding: 3vh;\r\n    width: 60vw;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    font-size: 1.2vw;\r\n}\r\n\r\n\r\n.heading{\r\n    font-size: 8vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    padding-bottom: 3vh;\r\n}\r\n\r\n.subtext{\r\n    font-size: 3vh;\r\n    width: 70vw;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.buttonWrapper{\r\n  -ms-flex-line-pack: center;\r\n      align-content: center; \r\n  -webkit-box-pack: center; \r\n      -ms-flex-pack: center; \r\n          justify-content: center; \r\n  width: 100vw;\r\n}\r\n\r\n.button {\r\n    padding: 15px 25px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #111;\r\n    border: none;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 9px #999;\r\n    transition: 0.4s;\r\n    position: absolute;\r\n    width: 10vw;\r\n  }\r\n\r\n  span {\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .button span:after {\r\n    content: '\\BB';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -10px;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .button:hover span {\r\n    padding-right: 1vw;\r\n  }\r\n  \r\n  .button:hover span:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\r\n  \r\n  .button:active {\r\n    background-color:  #505050;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\n\r\n@media screen and (max-aspect-ratio: 1/1){\r\n    .contentWrapper{\r\n        overflow-y: scroll;\r\n        height: 90vh;\r\n        width: 80vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    \n  <div class=\"contentWrapper\">\n\n    <div class=\"heading\">\n        The Genius Apprentice Program \n    </div>\n    \n    With 1 in 2 current job titles estimated to disappear in the next decade , \n    what better way to impact our world than matching experienced entrepreneurs with aspiring young adults to create amazing things together.<br><br>\n    \n    The Genius Apprentice Programme cultivates the next generation of socially-minded entrepreneurs, to bring solutions to the world’s pressing problems.<br><br>\n    \n    Paid Education providing Real Life experiences, \n    whether that be in an Office, out On Country or sailing the High Seas, \n    we believe we can create sustainable change if we all share together. \n\n    <!-- <div class=\"buttonWrapper\">\n      <a class=\"button\" routerLink=\"contact-us\" route=\"active\"><span>Apply Now</span></a>\n    </div> -->\n    \n  </div>\n\n\n\n</body>\n    "

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
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* routerTransition */])()],
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
exports.push([module.i, ":host{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nbody{\r\n    text-align: center;\r\n    padding: 0;\r\n    top: 0;\r\n    display: block;\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.heading{\r\n    font-size: 10vh;\r\n    font-weight: bold;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n}\r\n\r\n.subtext{\r\n    font-size: 6vh;\r\n}\r\n\r\n.portraitWrapper{\r\n    padding-top: 6vh;\r\n    text-align: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.portrait{\r\n    transition: 0.5s;\r\n    text-align: center;\r\n    font-size: 3vh;\r\n    width: 20vw;   \r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none; \r\n    font-family: \"proxima-nova\", sans-serif;\r\n    font-weight: bold;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    padding: 1vh;\r\n    vertical-align: center;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.portrait:hover{\r\n    width: 21vw;\r\n}\r\n\r\n.portrait:active{\r\n    background-color: rgb(145, 141, 141);\r\n}\r\n\r\n.profilePic{\r\n    width: 19vw;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.bioBox{\r\n    text-align: center;\r\n    bottom: 0;\r\n    position: fixed;\r\n    right: 13%;\r\n    width: 70%;\r\n    transition: 0.5s;\r\n    background-color: white;\r\n    color: black;\r\n    font-size: 1.2vw;\r\n    font-family: \"proxima-nova\", sans-serif;\r\n    border-radius: 6px;\r\n    padding-right: 2vh;\r\n    padding-left: 2vh;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.bioContent{\r\n    padding-top: 2vh;\r\n}\r\n\r\n.spacer{\r\n    padding: 1vw;\r\n}\r\n\r\n@media screen and (max-aspect-ratio: 1/1){\r\n    .portraitWrapper{\r\n        padding-top: 20vh;\r\n        height: 80vw;\r\n        width: 100vw;\r\n        text-align: center;\r\n        display: -webkit-inline-box;\r\n        display: -ms-inline-flexbox;\r\n        display: inline-flex;\r\n        overflow-x: scroll;\r\n        overflow-y: fixed;\r\n    }\r\n\r\n    .portrait{\r\n        height: 50vw;\r\n        width: 60vw;\r\n        font-size: 5vw;\r\n        padding-right: 20vw;\r\n        padding-left: 20vw;\r\n    }\r\n\r\n    .portrait:hover{\r\n        height: 50vh;\r\n        width: 60vw;\r\n    }\r\n\r\n    .profilePic{\r\n        width: 30vw;\r\n    }\r\n\r\n    .bioContent{\r\n        height: 250px;\r\n        display: block;\r\n        font-size: 4vw;\r\n        overflow-y: scroll;\r\n    }\r\n\r\n    .outerSpacer{\r\n        padding-right: 20vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"portraitWrapper\">\n    <div class=\"outerSpacer\"></div>\n    <div class=\"portrait\" (click)=\"switchBioTrigger(1)\">\n      <img class=\"profilePic\" src=\"../../../assets/susieProfilePicture.jpg\">\n      <div>\n        Susie Hutchison<br>\n        Co Founder\n      </div>\n    </div>\n    <div class=\"spacer\"></div>\n    <div class=\"portrait\" (click)=\"switchBioTrigger(2)\">\n      <img class=\"profilePic\" src=\"../../../assets/debProfilePicture.jpg\">\n      <div>\n        Deborah Harris<br>\n        Co Founder\n      </div>\n    </div>\n    <div class=\"spacer\"></div>\n    <div class=\"portrait\" (click)=\"switchBioTrigger(3)\">\n      <img class=\"profilePic\" src=\"../../../assets/jamesProfilePicture.jpg\">\n      <div>\n        James Clare<br>\n        Web Developer \n      </div>\n    </div>\n    <div class=\"outerSpacer\"></div>\n  </div>\n\n  <div id=\"bio\" class=\"bioBox\">\n    <div class=\"bioContent\">{{currentText}}</div>\n  </div>\n\n</body>"

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
        document.getElementById("bio").style.height = "80px";
        this.currentText = "Select a team member to learn more";
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
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* routerTransition */])()],
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
var susieBio = "Our youth hold many of the keys for a sustainable future, let’s support them, sharing our wisdom so they can in turn share theirs. An experienced entrepreneur, passionate about Reducing Inequalities across the globe.  Susie believes that by equipping the future generation of social entrepreneurs in all economies with the skills, experience, empowerment and inspiration to thrive - would really allow us all to feel the question of how we contribute to sustainable change. Susie visions a future in which each of us understands our power to create the world we desire.";
var debBio = "As a mother of five young adults, Deb is passionate about making sure there is opportunities and a sustainable planet for the future generations. Known as ‘The Organiser’,  you want her on your team. Deb mentors businesses to interpret financial data in a way that makes simple, practical  sense.  Deborah supports many purposeful causes herself in her spare time and through B1G1, and her favourite entrepreneurs to work with are ones who are equally purposeful.";
var jamesBio = "This is James' bio, ect ect ect";
//# sourceMappingURL=textStore.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map