import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {ModelService} from './model.service';
@Injectable({
    providedIn:'root',
})
export class SensorService extends ModelService {
    endpoint = "sensor";

    getSensors(){
        return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/`);
    }

    getModelName(){
        return "Sensor";
    };
}