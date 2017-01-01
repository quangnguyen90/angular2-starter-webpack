import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Injectable} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {Constants} from '../const/const.service'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

declare var $:any;

@Injectable()
export class HelperService {
    constructor(
        private _localStorageService:LocalStorageService,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ) {

    }

    checkAuth() {
        if(this._localStorageService.get(Constants.KEY_TOKEN)){
            console.log('Co Auth');
        }
        else{
            console.log('Khong Auth');
            this.redirectTo('login');
        }
    }

    execCallBackAfterRender(func : Function){
        let routeState = this.router.events
            .filter(event => event instanceof NavigationEnd).map(() => this.activatedRoute);
        let sub = routeState.subscribe((event) => {
            func();
            if($.AdminLTE.layout !== undefined){
                $.AdminLTE.layout.activate();
            }
            sub.unsubscribe();
        });
    }

    redirectTo(nameRoute : String) {
        this.router.navigate([nameRoute]);
    }

    getLocalStorage() : LocalStorageService {
        return this._localStorageService;
    }
}