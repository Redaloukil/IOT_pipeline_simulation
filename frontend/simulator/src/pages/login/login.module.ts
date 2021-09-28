import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./body/login.component";
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { LoginRouterModule } from "./login.routing";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "src/shared/shared.module";

@NgModule({
    declarations:[
        LoginComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        LoginRouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    
})

export class LoginModule {
    //
}