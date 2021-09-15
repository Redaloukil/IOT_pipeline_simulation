import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./body/login.component";


const routers: Route[] = [
    {
        path:"",
        component:LoginComponent
    }
]

export const LoginRouterModule = RouterModule.forChild(routers);