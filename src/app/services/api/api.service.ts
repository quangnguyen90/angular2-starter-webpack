import { Injectable }     from '@angular/core';
import { Router }     from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {HelperService} from "../helper/helper.service";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from "angular2-notifications";
import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Constants} from "../const/const.service";

@Injectable()
export class ApiService {
    private _baseUrl = 'http://tour.local/api';

    constructor(
        private _http:Http,
        private _slimLoadingBar:SlimLoadingBarService,
        private _notify:NotificationsService,
        private _localStorage:LocalStorageService,
        private _router:Router
    ) {

    }

    protected getDefaultHeader(headerExt?:Headers):Headers {
        let header =  new Headers({
            'Content-type':'application/json'
        });
        let token = this._localStorage.get(Constants.KEY.TOKEN);
        if(token){
            header.append('Authorization', 'Bearer ' + token);

        }
        if(headerExt instanceof Headers){
            headerExt.keys().forEach((key:string) => {
                header.append(key, headerExt.get(key))
            });
        }
        return header;
    }

    protected getFullUrl(uri:string){
        return this._baseUrl + uri;
    }

    public sendGet(uri:string, headers?:Headers) : Observable<Response>{
        let url = this.getFullUrl(uri);
        let httpHeaders = this.getDefaultHeader(headers);
        return this._http.get(url, {headers: httpHeaders})
            .map((response:Response)=>response)
            .catch(err => this.handleError(err));
    }

    public sendPost(uri:string, body:Object, headers?:Headers) : Observable<Response>{
        let url = this.getFullUrl(uri);
        let bodyJson = JSON.stringify(body);
        let httpHeaders = this.getDefaultHeader(headers);

        return this._http.post(url, bodyJson, {headers: httpHeaders})
            .map((response:Response)=>response)
            .catch(err => this.handleError(err));
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            //console.log(this);
            this._slimLoadingBar.complete();
            this._notify.error('Error', body.msg);
            errMsg = body.msg;
            if(body.logout === true){
                this._localStorage.remove(Constants.KEY.TOKEN);
                this._router.navigate(['login']);
            }

        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}