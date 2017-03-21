/**
 * Created by Quang Nguyen on 3/1/2017.
 */
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {EmployeeListComponent} from "./employee.component";
import {CheckLoginGuard} from '../../guards/auth/check-login.guard';
import {CheckSaveFormGuard} from '../../guards/auth/check-save-form.guard';
import {EmployeeAddComponent} from "./employee-add.component";
import {EmployeeDetailComponent} from "./employee-detail.component";
import {EmployeeEditComponent} from "./employee-edit.component";
import {EmployeeProjectsComponent} from "./employee-projects.component";
import {EmployeeOverviewComponent} from "./employee-overview.component";
import {EmployeeService } from '../../services/employee/employee.service';
import {NgModule} from "@angular/core";
import {ROUTES} from "../../app.routes";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    NgxDatatableModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeProjectsComponent,
    EmployeeOverviewComponent
  ],
  providers: [EmployeeService,CheckLoginGuard,CheckSaveFormGuard],
})
export class EmployeeModule { }
