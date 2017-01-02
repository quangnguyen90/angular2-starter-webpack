import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    private baseUrl = 'http://tour.local/api';

    constructor(private _http:Http) {
    }

    protected applyHeader(headers:Headers){
        headers.append('Content-type','application/json')
    }

    postLogin(email: string, password: string): any {
        let data = {
            "email": email,
            "password": password
        };
        let body = JSON.stringify(data);
        let headers = new Headers();
        this.applyHeader(headers);
        return this._http.post(this.baseUrl + '/login', body, {headers: headers}).map((response:Response)=>response);
    }
}