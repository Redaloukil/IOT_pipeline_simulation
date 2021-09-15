export interface Applicationstate {
    app: AppState;
    auth:AuthState;
    dashboard:DashboardState;
}

export interface AppState {
    loading:boolean;
    loaded:boolean;
    failed:boolean;
}

export interface AuthState {
    loading:boolean,
    success:boolean,
    failed:boolean,
    message:{[key:string]:unknown},
}

export interface DashboardState {
    loading:boolean,
    success:boolean,
    failed:boolean,
    sensors:any[],
}