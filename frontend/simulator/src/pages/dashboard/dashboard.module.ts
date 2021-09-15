import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { dashboardReducer } from "src/state/reducers/dashboard.reducer";

import { DashboardComponent } from "./body/dashboard.component";
import { SensorComponent } from "./components/sensor/sensor.component";
import { DashboardRoutingModule } from "./dashboard.routing";

@NgModule({
    declarations:[DashboardComponent ,SensorComponent],
    imports:[CommonModule, DashboardRoutingModule, StoreModule.forFeature("dashboard",dashboardReducer)],
})

export class DashboardModule {
    //
}