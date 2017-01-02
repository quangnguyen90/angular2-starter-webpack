import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Constants} from "../../services/const/const.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _localStorage: LocalStorageService) { }

    canActivate() {
        if(this._localStorage.get(Constants.KEY.TOKEN)) {
            return true;
        }
        else {
            return false;
        }
    }
}