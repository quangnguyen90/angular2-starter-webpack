"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var HelperService = (function () {
    function HelperService(_localStorageService, _router, _activatedRoute, _apiService, _slimLoadingBarService, _notificationService, _configService, _metaService) {
        this._localStorageService = _localStorageService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._apiService = _apiService;
        this._slimLoadingBarService = _slimLoadingBarService;
        this._notificationService = _notificationService;
        this._configService = _configService;
        this._metaService = _metaService;
    }
    HelperService.prototype.execCallBackAfterRender = function (func) {
        var _this = this;
        var routeState = this._router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; }).map(function () { return _this._activatedRoute; });
        var sub = routeState.subscribe(function (event) {
            func();
            sub.unsubscribe();
        });
    };
    HelperService.prototype.redirectTo = function (nameRoute) {
        this._router.navigate([nameRoute]);
    };
    HelperService.prototype.getLocalStorageService = function () {
        return this._localStorageService;
    };
    HelperService.prototype.getApiService = function () {
        return this._apiService;
    };
    HelperService.prototype.getSlimLoadingBarService = function () {
        return this._slimLoadingBarService;
    };
    HelperService.prototype.getNotificationService = function () {
        return this._notificationService;
    };
    HelperService.prototype.getRouter = function () {
        return this._router;
    };
    HelperService.prototype.getConfigService = function () {
        return this._configService;
    };
    HelperService.prototype.getMetaService = function () {
        return this._metaService;
    };
    HelperService = __decorate([
        core_1.Injectable()
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
