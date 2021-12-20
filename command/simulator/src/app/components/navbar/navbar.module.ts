import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/shared/shared.module";
import { NavbarComponent } from "./body/navbar.component";

@NgModule({
    declarations:[NavbarComponent],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule,
    ],
    exports:[
        NavbarComponent
    ],
})
export class NavbarModule {

}