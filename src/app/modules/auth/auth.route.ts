/**
 * Created by Quang Nguyen on 3/1/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const AuthRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];
