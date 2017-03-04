import {Routes, RouterModule} from '@angular/router';
import {NoContentComponent} from './modules/no-content/no-content.component';
import {DataResolver} from './app.resolver';
import {HomeRoutes} from './modules/home/home.routes'
import {CrudRoutes} from './modules/crud/crud.routes'


export const ROUTES: Routes = [
  ...HomeRoutes,
  ...CrudRoutes,
  {path: '**', component: NoContentComponent}
];
