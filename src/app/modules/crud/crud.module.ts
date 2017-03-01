/**
 * Created by Quang Nguyen Seldat on 3/1/2017.
 */
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CrudComponent} from "./crud.component";
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
    CrudComponent,
  ],

})
export class CrudModule { }
