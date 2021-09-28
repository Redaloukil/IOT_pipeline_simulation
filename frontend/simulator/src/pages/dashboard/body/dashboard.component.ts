import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { DashboardService } from "../../../services/dashboard.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateSensorDialogComponent } from "../components/create-sensor-dialog/create-sensor-dialog.component";

@Component({
    selector:'app-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.scss'],
})

export class DashboardComponent implements OnInit{
    subscription:Subscription = new Subscription();
    loading = false;
    sensors:any= [];

    constructor(private dashboardService:DashboardService, private authService:AuthService, private router:Router, private dialog: MatDialog){
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

   createSensor(){
        this.dialog.open(CreateSensorDialogComponent,{
            width:"60vw",
        })
        .afterClosed()
        .toPromise()
        .then(()=> {
            this.relaod();
        })
   }
}