"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState, _helper) {
        this.appState = appState;
        this._helper = _helper;
        // Set our default values
        this.localState = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home` component');
        this._helper.getMetaService().setTitle('This is a route of Home Component');
        this._helper.getMetaService().setTag('description', 'Meta description of Home Component 123132131');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            encapsulation: core_1.ViewEncapsulation.None,
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                platform_browser_1.Title
            ],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            templateUrl: 'home.component.html',
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
