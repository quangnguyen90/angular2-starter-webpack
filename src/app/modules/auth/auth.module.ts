/**
 * Created by Quang Nguyen on 3/1/2017.
 */
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login.component'
import {LoginService} from '../../services/auth/login.service';
import {CheckLoginGuard} from '../../guards/auth/check-login.guard';
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
    LoginComponent,
  ],
  providers: [LoginService,CheckLoginGuard],
})
export class AuthModule { }
