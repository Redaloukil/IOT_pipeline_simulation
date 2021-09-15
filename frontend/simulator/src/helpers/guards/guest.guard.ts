import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";


@Injectable({
    providedIn:'root',
})
export class GuestGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){
        //
    }

    canActivate():boolean{
        const currentUser = this.authService.getUser();

        if (!currentUser) {
            return true;
        }
        
        this.router.navigate(['/dashboard']);
        return false;
    }
}