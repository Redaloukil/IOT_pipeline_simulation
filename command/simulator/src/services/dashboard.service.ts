import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Sensor } from "projects/sensor-simulator/src/models/sensor";
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

    
    // TODO : move sensor related http calls methods in seperated file
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

    createSensor(sensor:Sensor){
        return this.httpClient.post(`${environment.apiUrl}/sensors/`, {
            ...sensor,
        })
    }
    
    setSensorParams(params:{[key:string]:unknown}){
        return this.httpClient.put(`${environment.apiUrl}/sensors/${params._id}`, `_id=${params._id}&online=${params.online}`, this.options);
    }

    deleteSensor(params:{[key:string]:unknown}){
        return this.httpClient.delete(`${environment.apiUrl}/sensors/${params.id}`)
    }
}