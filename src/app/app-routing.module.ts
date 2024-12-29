import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    title: 'NS Todo' 
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'NS Todo' 
    //canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'NS Todo' 
    //canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'NS Todo'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}