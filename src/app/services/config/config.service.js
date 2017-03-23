"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ConfigService = (function () {
    function ConfigService() {
        this._env = process.env;
    }
    ConfigService.prototype.recLookup = function (obj, path) {
        try {
            var parts = path.split(".");
            if (parts.length == 1) {
                return obj[parts[0]];
            }
            return this.recLookup(obj[parts[0]], parts.slice(1).join("."));
        }
        catch (e) {
            return undefined;
        }
    };
    ConfigService.prototype.getEnv = function (path, defaultValue) {
        return this.get(this._env, path, defaultValue);
    };
    ConfigService.prototype.getAppEnv = function (path, defaultValue) {
        if (path == undefined) {
            path = '';
        }
        else {
            path = '.' + path;
        }
        return this.get(this._env, 'APP_ENV' + path, defaultValue);
    };
    ConfigService.prototype.get = function (data, path, defaultValue) {
        if (path === undefined) {
            return data;
        }
        var result = this.recLookup(this._env, path);
        if (result === undefined) {
            result = defaultValue;
        }
        return result;
    };
    ConfigService = __decorate([
        core_1.Injectable()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
