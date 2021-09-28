import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "src/shared/shared.module";

import { DashboardComponent } from "./body/dashboard.component";
import { CreateSensorDialogComponent } from "./components/create-sensor-dialog/create-sensor-dialog.component";
import { SensorComponent } from "./components/sensor/sensor.component";
import { DashboardRoutingModule } from "./dashboard.routing";

@NgModule({
    declarations:[DashboardComponent ,SensorComponent, CreateSensorDialogComponent],
    imports:[CommonModule, SharedModule, DashboardRoutingModule,  MatDialogModule],
})

export class DashboardModule {
    //
}