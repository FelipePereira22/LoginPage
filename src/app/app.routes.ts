import { Routes } from '@angular/router';
import { FormStudyComponent } from './form-study/form-study.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: FormStudyComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'register', component: FormStudyComponent },
];
