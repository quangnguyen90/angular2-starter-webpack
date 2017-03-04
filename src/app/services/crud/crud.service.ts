/**
 * Created by Quang Nguyen Seldat on 3/1/2017.
 */
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
export class CrudService {
  private _baseUrl: string;


  constructor(private _http: Http,
              private _router: Router,
              private _localStorage: LocalStorageService,
              private _slimLoadingBar: SlimLoadingBarService,
              private _notify: NotificationsService,
              private _config: ConfigService) {
    this._baseUrl = this._config.getAppEnv('URL.API');
  }

}
