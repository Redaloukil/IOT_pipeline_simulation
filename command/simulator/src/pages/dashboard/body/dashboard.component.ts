import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { DashboardService } from "../../../services/dashboard.service";
import { MatDialog } from '@angular/material/dialog';
import { CreateSensorDialogComponent } from "../components/create-sensor-dialog/create-sensor-dialog.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UntilDestroy } from "@ngneat/until-destroy";
import { Sensor } from "src/models/sensor.model";
import { debounceTime } from "rxjs/operators";

@Component({
    selector:'app-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.scss'],
})

export class DashboardComponent implements OnInit{
    subscription:Subscription = new Subscription();
    loading = false;
    initialSensorsList:Sensor[]= [];
    sensors:Sensor[] = this.initialSensorsList;

    deviceSearch:FormGroup = this.formBuilder.group({
        device:[''],
    })

    constructor(private formBuilder:FormBuilder, private dashboardService:DashboardService, private authService:AuthService, private router:Router, private dialog: MatDialog){
        //
    }

    ngOnInit(){
        this.loading = true
        this.dashboardService.getSensors().toPromise()
            .then((sensors) => {
                this.sensors = this.initialSensorsList =  sensors as Sensor[];
            }).catch(() => {
                //
            }).
            finally(() => {
                this.loading = false;
            });
        
        this.deviceSearch.get('device')?.valueChanges.pipe(debounceTime(500)).subscribe((device) =>  {
            if(device) {
                this.sensors = this.initialSensorsList.filter((sensor) => sensor.name.includes(device));
                return;
            }
            this.sensors = this.initialSensorsList;
        })
    }

    relaod(){
        this.loading = true
        this.dashboardService.getSensors().toPromise()
            .then((sensors) => {
                this.initialSensorsList = sensors as Sensor[];
                this.sensors = (sensors as Sensor[]).filter((sensor) => sensor.name.includes(this.deviceSearch.get('device')?.value));
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