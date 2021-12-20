import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/services/auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService,private router:Router){
        //
    }

    canActivate():boolean{
        const currentUser = this.authService.getUser();
        console.log(currentUser);
        if (currentUser) {
            return true;
        }
        
        this.router.navigate(['/login']);
        return false;
    }
}