import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DashboardService } from "src/services/dashboard.service";

@Component({
    selector:'app-sensor',
    styleUrls:['sensor.component.scss'],
    templateUrl:'sensor.component.html'
})

export class SensorComponent implements OnInit{
    @Input() sensor:{_id:string,name:string,status:boolean,online:boolean} | null = null;
    @Output() reload:EventEmitter<void> = new EventEmitter();

    constructor(private dashboardService:DashboardService){
        //
    }

    ngOnInit(): void{
        //
    }

    changeStatus(){
        this.dashboardService.setSensorParams({
            _id:this.sensor?._id,
            online:!(!!this.sensor?.online)
        })
        .toPromise()
        .then((sensor) => {
            this.sensor = sensor as {_id:string,name:string,status:boolean;online:boolean};
            this.reload.emit();
        })
        .catch(() => {
            console.error("failed to change sensor status");
        });
    }

    deleteSensor(){
        this.dashboardService.deleteSensor({id:this.sensor?._id})
        .toPromise()
        .then((sensor) => {
            this.reload.emit();
        })
        .catch(() => {
            console.error("failed to delete a sensor");
        });
    }
}   