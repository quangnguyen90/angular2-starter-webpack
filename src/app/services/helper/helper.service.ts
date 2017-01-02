import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Injectable} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {Constants} from '../const/const.service'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {ApiService} from "../api/api.service";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from "angular2-notifications";

declare var $:any;

@Injectable()
export class HelperService {
    constructor(
        private _localStorageService:LocalStorageService,
        private _router:Router,
        private _activatedRoute:ActivatedRoute,
        private _apiService:ApiService,
        private _slimLoadingBarService: SlimLoadingBarService,
        private _notificationService: NotificationsService
    ) {
    }

    checkAuth() {
        if(this._localStorageService.get(Constants.KEY.TOKEN)){
            console.log('Co Auth');
        }
        else{
            console.log('Khong Auth');
            this.redirectTo('login');
        }
    }

    execCallBackAfterRender(func : Function){
        let routeState = this._router.events
            .filter(event => event instanceof NavigationEnd).map(() => this._activatedRoute);
        let sub = routeState.subscribe((event) => {
            func();
            if($.AdminLTE.layout !== undefined){
                $.AdminLTE.layout.activate();
            }
            sub.unsubscribe();
        });
    }

    redirectTo(nameRoute : String) {
        this._router.navigate([nameRoute]);
    }

    getLocalStorage() : LocalStorageService {
        return this._localStorageService;
    }

    getApiService():ApiService {
        return this._apiService;
    }

    getSlimLoadingBar():SlimLoadingBarService{
        return this._slimLoadingBarService;
    }

    getNotification():NotificationsService{
        return this._notificationService;
    }

    getRouter():Router{
        return this._router;
    }
}