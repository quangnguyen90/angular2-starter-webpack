import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Constants} from "../../services/const/const.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _localStorage: LocalStorageService, private _router:Router) { }

    canActivate() {
        if(this._localStorage.get(Constants.KEY.TOKEN)) {
            return Observable.of(true);
        }
        else {
            // this._router.dispose();
            this._router.navigate(['login']);
            return Observable.of(false);
        }
    }
}