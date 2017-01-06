import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HelperService} from "../../services/helper/helper.service";
import {LocalStorageService} from "angular-2-local-storage";
import {ConfigService} from "../../services/config/config.service";

@Injectable()
export class AuthGuard implements CanActivate {
  private _localStorage: LocalStorageService;
  private _config: ConfigService;
  private _router: Router;

  constructor(private _helper: HelperService) {
    this._localStorage = this._helper.getLocalStorageService();
    this._config = this._helper.getConfigService();
    this._router = this._helper.getRouter();
  }

  canActivate() {
    if (this._localStorage.get(this._config.getEnv('KEY.TOKEN'))) {
      return Observable.of(true);
    }
    else {
      // this._router.dispose();
      this._router.navigate(['login']);
      return Observable.of(false);
    }
  }
}
