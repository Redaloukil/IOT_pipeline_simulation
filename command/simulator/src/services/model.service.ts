import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export abstract class ModelService {
    apiUrl:string = environment.apiUrl;
    abstract endpoint:string;

    constructor(protected httpClient:HttpClient){
        //
    }


    abstract getModelName():string;
}