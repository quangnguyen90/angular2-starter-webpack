import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Injectable} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Constants} from '../const/const.service'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {ApiService} from "../api/api.service";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from "angular2-notifications";
import {ConfigService} from "../config/config.service";

@Injectable()
export class HelperService {
  constructor(private _localStorageService: LocalStorageService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _apiService: ApiService,
              private _slimLoadingBarService: SlimLoadingBarService,
              private _notificationService: NotificationsService,
              private _configService: ConfigService) {
  }

  execCallBackAfterRender(func: Function) {
    let routeState = this._router.events
      .filter(event => event instanceof NavigationEnd).map(() => this._activatedRoute);
    let sub = routeState.subscribe((event) => {
      func();
      sub.unsubscribe();
    });
  }

  redirectTo(nameRoute: String) {
    this._router.navigate([nameRoute]);
  }

  getLocalStorageService(): LocalStorageService {
    return this._localStorageService;
  }

  getApiService(): ApiService {
    return this._apiService;
  }

  getSlimLoadingBarService(): SlimLoadingBarService {
    return this._slimLoadingBarService;
  }

  getNotificationService(): NotificationsService {
    return this._notificationService;
  }

  getRouter(): Router {
    return this._router;
  }

  getConfigService(): ConfigService {
    return this._configService;
  }
}
