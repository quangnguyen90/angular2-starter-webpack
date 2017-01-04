import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {AuthGuard} from "../../guards/auth/auth.guard";


export const HomeRoutes: Routes = [
    { path: '',      component: HomeComponent,
    },
];
