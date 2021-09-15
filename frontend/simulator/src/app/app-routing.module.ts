import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/helpers/guards/auth.guard';
import { GuestGuard } from 'src/helpers/guards/guest.guard';

const routes: Routes = [
  {
    path:"dashboard",
    loadChildren:() => import('../pages/dashboard/dashboard.module').then((mod) => mod.DashboardModule),
    canActivate:[AuthGuard],
  },
  {
    path:"login",
    loadChildren: () => import('../pages/login/login.module').then((mod) => mod.LoginModule), 
    canActivate:[GuestGuard],
  },
  {
    path:"signup",
    loadChildren: () => import('../pages/signup/signup.module').then((mod) => mod.SignupModule),
    canActivate:[GuestGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
