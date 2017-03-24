/**
 * Created by Quang Nguyen Seldat on 3/23/2017.
 */
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../../services/auth/login.service'
@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(private loginService: LoginService) {

  }
  canActivate() {

    let status = this.loginService.IsLogged();
    if (status == false)
      alert('You don\'t have permission access to this page. Please login');

    return status;
  }
}
