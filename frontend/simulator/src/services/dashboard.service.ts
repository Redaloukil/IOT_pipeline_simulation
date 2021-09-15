import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from '../../src/environments/environment'

@Injectable({
    providedIn:'root'
})

export class DashboardService {
    constructor(private httpClient:HttpClient){
        //
    }

    private options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    getSensors(){
        return this.httpClient.get(`${environment.apiUrl}/sensors/`);
    }

    getSensorById(id:string){
        return this.httpClient.get(`${environment.apiUrl}/sensors/`,{
            params:{
                id,
            }
        });
    }
    
    setSensorParams(params:{[key:string]:unknown}){
        return this.httpClient.put(`${environment.apiUrl}/sensors/${params._id}`, `_id=${params._id}&online=${params.online}`, this.options);
    }
}