import { Route, RouterModule } from "@angular/router";
import { SignupComponent } from "./body/signup.component";


const routers: Route[] = [
    {
        path:"",
        component:SignupComponent,
    }
]

export const SignupRouterModule = RouterModule.forChild(routers);