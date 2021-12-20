import { Sensor } from "projects/sensor-simulator/src/models/sensor";
import { Model } from "./model";

export class Event extends Model {
    sensor:Sensor;
    status:string;
}