import { Routes } from '@angular/router';
import { HapydayComponent } from './pages/hapyday/hapyday.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'hapyday',
        pathMatch: 'full'
      },
     
      {
        path: 'hapyday',
        component: HapydayComponent
    }


];
