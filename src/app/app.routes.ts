import { Routes } from '@angular/router';
import { FormStudyComponent } from './form-study/form-study.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

  {path: '', component: FormStudyComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: FormStudyComponent}
];
