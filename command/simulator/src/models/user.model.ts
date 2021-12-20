import {Model} from './model';
export class User extends Model {
    username:string;
    token:string;
    authenticated:Date;
}