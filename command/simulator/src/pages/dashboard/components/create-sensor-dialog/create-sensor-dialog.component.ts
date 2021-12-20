import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DashboardService } from "src/services/dashboard.service";

@Component({
    selector:'create-sensor-dialog',
    templateUrl:'create-sensor-dialog.component.html',
    styleUrls:['create-sensor-dialog.component.scss'],
})

export class CreateSensorDialogComponent {
    loading = false;

    errors = {};

    sensorForm:FormGroup = this.formBuilder.group({
        name:['',Validators.compose([ Validators.required , Validators.minLength(5)])],
    })
    
    constructor(private formBuilder:FormBuilder, private dashboardService:DashboardService,public dialogRef: MatDialogRef<CreateSensorDialogComponent> ){
        //
    }   
    
    submit():void{
        this.loading = false;
        this.dashboardService.createSensor(this.sensorForm.getRawValue())
            .toPromise()
            .then(() => {
                this.close();
            })
            .catch(() => {
                //
            })
            .finally(() => {
                this.loading =false;
            });
    }

    close(status:boolean = true):void {
        this.dialogRef.close(true);
    }
}