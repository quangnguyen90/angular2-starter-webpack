import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {SideBarComponent} from "./sidebar/sidebar.component";
import {NgModule} from "@angular/core";
import {ROUTES} from "../../app.routes";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {HomeDashBoardComponent} from "./dashboard/dashboard.component";
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
        HomeComponent,
        SideBarComponent,
        HomeDashBoardComponent
    ],

})
export class HomeModule { }