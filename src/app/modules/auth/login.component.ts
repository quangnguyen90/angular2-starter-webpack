/**
 * Created by Quang Nguyen on 3/21/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
@Component({
  selector: 'home-component',
  templateUrl: './app/login.component.html'
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {

  }

  CheckLogin(value: any) {
    console.log(value);
    if (value.username == "admin" && value.password == "123") {
      this.loginService.SetLogin(true);
      this.router.navigate(['/']);

    }
  }
}
