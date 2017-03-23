"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var ApiService = (function () {
    function ApiService(_http, _router, _localStorage, _slimLoadingBar, _notify, _config) {
        this._http = _http;
        this._router = _router;
        this._localStorage = _localStorage;
        this._slimLoadingBar = _slimLoadingBar;
        this._notify = _notify;
        this._config = _config;
        this._baseUrl = this._config.getAppEnv('URL.API');
    }
    ApiService.prototype.getDefaultHeader = function (headerExt) {
        var header = new http_1.Headers({
            'Content-type': 'application/json'
        });
        var token = this._localStorage.get(this._config.getAppEnv('KEY.TOKEN'));
        if (token) {
            header.append('Authorization', 'Bearer ' + token);
        }
        if (headerExt instanceof http_1.Headers) {
            headerExt.keys().forEach(function (key) {
                header.append(key, headerExt.get(key));
            });
        }
        return header;
    };
    ApiService.prototype.getFullUrl = function (uri) {
        return this._baseUrl + uri;
    };
    ApiService.prototype.sendGet = function (uri, headers) {
        var _this = this;
        var url = this.getFullUrl(uri);
        var httpHeaders = this.getDefaultHeader(headers);
        return this._http.get(url, { headers: httpHeaders })
            .map(function (response) { return response; })
            .catch(function (err) { return _this.handleError(err); });
    };
    ApiService.prototype.sendPost = function (uri, body, headers) {
        var _this = this;
        var url = this.getFullUrl(uri);
        var bodyJson = JSON.stringify(body);
        var httpHeaders = this.getDefaultHeader(headers);
        return this._http.post(url, bodyJson, { headers: httpHeaders })
            .map(function (response) { return response; })
            .catch(function (err) { return _this.handleError(err); });
    };
    ApiService.prototype.sendPostWithFiles = function (uri, postData, files, headers) {
        var _this = this;
        var url = this.getFullUrl(uri);
        var httpHeaders = this.getDefaultHeader(headers);
        httpHeaders.delete('Content-type');
        httpHeaders.append("enctype", "multipart/form-data");
        var formData = new FormData();
        // formData.append('files', files[0], files[0].name);
        // For multiple files
        for (var i = 0; i < files.length; i++) {
            formData.append("files[]", files[i], files[i].name);
        }
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
        }
        return this._http.post(url, formData, { headers: httpHeaders })
            .map(function (response) { return response; })
            .catch(function (err) { return _this.handleError(err); });
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            //console.log(this);
            this._slimLoadingBar.complete();
            this._notify.error('Error', body.msg);
            errMsg = body.msg;
            if (body.logout === true) {
                this._localStorage.remove(this._config.getAppEnv('KEY.TOKEN'));
                this._router.navigate(['login']);
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
