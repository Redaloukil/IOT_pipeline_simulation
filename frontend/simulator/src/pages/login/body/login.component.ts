import { Route } from "@angular/compiler/src/core";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/models/user.model";
import { AuthService } from "src/services/auth.service";

@Component({
    selector:'app-login',
    templateUrl:'login.component.html',
    styleUrls:['login.component.scss'],
    encapsulation:ViewEncapsulation.None
})

export class LoginComponent implements OnInit{
    loginForm:FormGroup = this.formBuilder.group({
        username:['',Validators.compose([Validators.required,Validators.minLength(2)])],
        password:['', Validators.compose([Validators.required, Validators.minLength(8)])],
    })
    constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router, ){
        //
    }

    ngOnInit():void{
        //
    }

    submit(){
        //will include action emiting here
        this.authService.login({username:this.loginForm.get('username')?.value,password:this.loginForm.get('password')?.value})
            .toPromise()
            .then((res) => {
                this.authService.setUser(res as User);
                localStorage.setItem('currentUser', JSON.stringify(res));
                this.router.navigate(["/dashboard"]);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}