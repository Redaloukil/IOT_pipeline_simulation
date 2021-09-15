import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { DashboardState } from "src/state/types/state.model";
import { DashboardService } from "../../../services/dashboard.service";

@Component({
    selector:'app-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.scss'],
})

export class DashboardComponent implements OnInit{
    subscription:Subscription = new Subscription();
    loading = false;
    sensors:any= [];

    constructor(private dashboardService:DashboardService, private authService:AuthService, private router:Router){
        //
    }

    ngOnInit(){
        this.loading = true
        this.dashboardService.getSensors().toPromise()
            .then((sensors) => {
                this.sensors = sensors;
            }).catch(() => {
                //
            }).
            finally(() => {
                this.loading = false;
            });
    }

    relaod(){
        this.loading = true
        this.dashboardService.getSensors().toPromise()
            .then((sensors) => {
                this.sensors = sensors;
            }).catch(() => {
                //
            }).
            finally(() => {
                this.loading = false;
            });
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}