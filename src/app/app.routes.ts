import {Routes, RouterModule} from '@angular/router';
import {NoContentComponent} from './modules/no-content/no-content.component';
import {DataResolver} from './app.resolver';
import {HomeRoutes} from './modules/home/home.routes'
import {EmployeeRoutes} from './modules/employee/employee.routes'


export const ROUTES: Routes = [
  ...HomeRoutes,
  ...EmployeeRoutes,
  {path: '**', component: NoContentComponent}
];
