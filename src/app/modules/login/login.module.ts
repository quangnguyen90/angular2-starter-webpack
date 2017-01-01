import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {ROUTES} from "../../app.routes";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {LoginComponent} from "./login.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ],
    declarations: [
        LoginComponent
    ],

})
export class LoginModule { }