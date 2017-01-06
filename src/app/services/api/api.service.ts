import {Injectable}     from '@angular/core';
import {Router}     from '@angular/router';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from "angular2-notifications";
import {LocalStorageService} from "angular-2-local-storage";
import {ConfigService} from "../config/config.service";

@Injectable()
export class ApiService {
  private _baseUrl: string;


  constructor(private _http: Http,
              private _router: Router,
              private _localStorage: LocalStorageService,
              private _slimLoadingBar: SlimLoadingBarService,
              private _notify: NotificationsService,
              private _config: ConfigService) {
    this._baseUrl = this._config.getEnv('URL.API');
  }

  protected getDefaultHeader(headerExt?: Headers): Headers {
    let header = new Headers({
      'Content-type': 'application/json'
    });
    let token = this._localStorage.get(this._config.getEnv('KEY.TOKEN'));
    if (token) {
      header.append('Authorization', 'Bearer ' + token);

    }
    if (headerExt instanceof Headers) {
      headerExt.keys().forEach((key: string) => {
        header.append(key, headerExt.get(key))
      });
    }
    return header;
  }

  protected getFullUrl(uri: string) {
    return this._baseUrl + uri;
  }

  public sendGet(uri: string, headers?: Headers): Observable<Response> {
    let url = this.getFullUrl(uri);
    let httpHeaders = this.getDefaultHeader(headers);
    return this._http.get(url, {headers: httpHeaders})
      .map((response: Response) => response)
      .catch(err => this.handleError(err));
  }

  public sendPost(uri: string, body: Object, headers?: Headers): Observable<Response> {
    let url = this.getFullUrl(uri);
    let bodyJson = JSON.stringify(body);
    let httpHeaders = this.getDefaultHeader(headers);

    return this._http.post(url, bodyJson, {headers: httpHeaders})
      .map((response: Response) => response)
      .catch(err => this.handleError(err));
  }

  public sendPostWithFiles(uri: string, postData: Object, files: File[], headers?: Headers) {
    let url = this.getFullUrl(uri);

    let httpHeaders = this.getDefaultHeader(headers);
    httpHeaders.delete('Content-type');
    httpHeaders.append("enctype", "multipart/form-data");
    let formData: FormData = new FormData();

    // formData.append('files', files[0], files[0].name);
    // For multiple files
    for (let i = 0; i < files.length; i++) {
      formData.append(`files[]`, files[i], files[i].name);
    }
    if (postData !== "" && postData !== undefined && postData !== null) {
      for (var property in postData) {
        if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
        }
      }
    }

    return this._http.post(url, formData, {headers: httpHeaders})
      .map((response: Response) => response)
      .catch(err => this.handleError(err));
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      //console.log(this);
      this._slimLoadingBar.complete();
      this._notify.error('Error', body.msg);
      errMsg = body.msg;
      if (body.logout === true) {
        this._localStorage.remove(this._config.getEnv('KEY.TOKEN'));
        this._router.navigate(['login']);
      }

    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
