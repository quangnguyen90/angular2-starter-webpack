import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {SideBarComponent} from "./sidebar/sidebar.component";
import {NgModule} from "@angular/core";
import {ROUTES} from "../../app.routes";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {HomeDashBoardComponent} from "./dashboard/dashboard.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ],
    declarations: [
        HomeComponent,
        SideBarComponent,
        HomeDashBoardComponent
    ],

})
export class HomeModule { }