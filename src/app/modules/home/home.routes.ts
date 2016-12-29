import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {HomeDashBoardComponent} from "./dashboard/dashboard.component";


export const HomeRoutes: Routes = [
    { path: '',      component: HomeComponent,
        children: [
            { path: '', component:HomeDashBoardComponent },
        ]
    },
];
