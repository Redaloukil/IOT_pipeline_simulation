import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "src/shared/shared.module";
import { SignupComponent } from "./body/signup.component";
import { SignupRouterModule } from "./signup.routing";

@NgModule({
    declarations:[
        SignupComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        SignupRouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports:[
        SignupComponent
    ],
})

export class SignupModule {
    //
}