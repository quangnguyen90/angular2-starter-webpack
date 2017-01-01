import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            name: 'LoginPage'
        }
    },
];
