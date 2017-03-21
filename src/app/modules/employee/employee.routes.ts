/**
 * Created by Quang Nguyen on 3/1/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component'
import { EmployeeOverviewComponent } from './employee-overview.component'
import { EmployeeProjectsComponent } from './employee-projects.component'
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

export const EmployeeRoutes: Routes = [
  /*{ path: '',      component: EmployeeListComponent,
    data: {
      meta: {
        disableUpdate: true
      }
    }
  },*/

  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  {
    path: 'employee-detail/:id', component: EmployeeDetailComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: EmployeeOverviewComponent },
      { path: 'projects', component: EmployeeProjectsComponent }
    ]
  }
];
