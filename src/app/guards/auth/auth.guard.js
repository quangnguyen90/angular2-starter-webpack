"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var AuthGuard = (function () {
    function AuthGuard(_helper) {
        this._helper = _helper;
        this._localStorage = this._helper.getLocalStorageService();
        this._config = this._helper.getConfigService();
        this._router = this._helper.getRouter();
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._localStorage.get(this._config.getEnv('KEY.TOKEN'))) {
            return Observable_1.Observable.of(true);
        }
        else {
            // this._router.dispose();
            this._router.navigate(['login']);
            return Observable_1.Observable.of(false);
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
