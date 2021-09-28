import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root',
})
export class SensorService {
    private apiURL = environment.apiUrl;

    constructor(private httpClient:HttpClient){

    }

    getSensors(){
        return this.httpClient.get(`${this.apiURL}/sensors/`);
    }
}