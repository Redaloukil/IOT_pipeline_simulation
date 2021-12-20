import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root',
})
export class AppService {
    private apiURL = environment.apiUrl;

    constructor(private httpClient:HttpClient){
        //
    }

    getApiUrl(){
        return this.apiURL;
    }

    serverHandshake(){
        return this.httpClient.get(this.apiURL);
    }

}