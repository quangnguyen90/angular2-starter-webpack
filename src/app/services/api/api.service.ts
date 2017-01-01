import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from '../../../../node_modules/rxjs/Rx.d';

// Import RxJs required methods
import 'rxjs/add/operator/map.d';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    private baseUrl = 'http://5862365a4dad0912007f547d.mockapi.io/api';

    constructor(private _http:Http) {
    }

    getDocs():Observable<any[]> {
        return this._http.get(this.baseUrl + '/docs').map((response:Response)=>response.json());
    }
}