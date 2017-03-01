/**
 * Created by Quang Nguyen Seldat on 3/1/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud.component';

export const CrudRoutes: Routes = [
  { path: '',      component: CrudComponent,
    data: {
      meta: {
        disableUpdate: true
      }
    }
  },
];
