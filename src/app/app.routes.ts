import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './modules/no-content';
import { DataResolver } from './app.resolver';
import { HomeRoutes } from './modules/home/home.routes'


export const ROUTES: Routes = [
    ...HomeRoutes,
  { path: '**',    component: NoContentComponent }
];
