import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './body/dashboard.component';

const routes: Routes = [
    {
        path:"",component:DashboardComponent,
    }
];

export const DashboardRoutingModule = RouterModule.forChild(routes)
