import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Injectable} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class HelperService {
    constructor(private _localStorageService : LocalStorageService, private router: Router, private activatedRoute: ActivatedRoute) {

    }

    checkAuth() {
        if(this._localStorageService.get('phucdaica')){
            console.log('Co Auth')
        }
        else{
            console.log('Khong Auth')
            this.redirectTo('LoginPage');
        }
    }

    execCallBackAfterRender(func : Function){
        let routeState = this.router.events
            .filter(event => event instanceof NavigationEnd).map(() => this.activatedRoute);
        let sub = routeState.subscribe((event) => {
            func();
            sub.unsubscribe();
        });
    }

    redirectTo(nameRoute : String) {
        this.router.navigate([nameRoute]);
    }
}