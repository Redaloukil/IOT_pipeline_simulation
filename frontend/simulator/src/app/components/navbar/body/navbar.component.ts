import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/user.model";
import { AuthService } from "src/services/auth.service";

@Component({
    selector:'app-navbar',
    styleUrls:['navbar.component.scss'],
    templateUrl:'navbar.component.html',
})

export class NavbarComponent implements OnInit{
    title = "Simulation"
    currentUser:User|null = null;
    
    constructor(private authService:AuthService,private router:Router) {
        //
    }

    ngOnInit(){
        this.currentUser = this.authService.getUser()
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}