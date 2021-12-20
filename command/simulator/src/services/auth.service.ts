import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "src/models/user.model";

@Injectable({
    providedIn:'root',
})

export class AuthService {
    
    constructor(private httpClient:HttpClient){
        if(localStorage.getItem('currentUser')) {
            this.user = JSON.parse(localStorage.getItem('currentUser') as string) as User; 
        }
    }

    private apiURL = environment.apiUrl;
    private user:User | null = null;
    private options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    getUser(){
        return this.user;
    }

    setUser(user:User){
        this.user = user;
    }

    signup(credentials:{username:string;password:string}){
        return this.httpClient.post(`${this.apiURL}/users/`, {
            ...credentials,
        },this.options);
    }

    login(credentials:{username:string;password:string}){
        return this.httpClient.post(`${this.apiURL}/users/authenticate`, {
            ...credentials,
        },this.options);
    }

    logout():void{
        localStorage.removeItem('currentUser');
        this.user = null;
    }
}