import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/models/user.model";
import { AuthService } from "src/services/auth.service";

@Component({
    selector:'app-signup',
    templateUrl:'signup.component.html',
    styleUrls:['signup.component.scss']
})

export class SignupComponent implements OnInit {
    loading = false;
    
    signupForm = this.formBuilder.group({
        username:['' , Validators.required],
        password:['', Validators.required],
        confirmPassword:['',Validators.required]
    })

    errors:{
        
    } = {

    };
    
    constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router){
        //
    }

    ngOnInit(){
        //
    }


    submit(){
        if(this.signupForm.get('password') === this.signupForm.get('confirmPassword')) {
            return;
        }

        this.authService.signup(this.signupForm.getRawValue())
            .toPromise()
            .then((res) => {
                this.router.navigate(['login']);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}