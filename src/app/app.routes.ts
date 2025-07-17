import { Routes } from '@angular/router';
import {LoginComponent} from '../pages/Login/login';
import {RegisterComponent} from '../pages/Register/register';
import {EmployeesComponent} from '../pages/Employees/employees';
import {ProjectsComponent} from '../pages/Projects/projects';
import {ScheduleComponent} from '../pages/Schedule/schedule';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];
