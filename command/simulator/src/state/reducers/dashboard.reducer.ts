import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { dashboardPageFailed, dashboardPageLoaded, dashboardPageLoading } from "../actions/dashboard.action";
import { initialDashboardState } from "../initial-states/dashboard.state";


export const _dashboardReducer = createReducer(
    initialDashboardState,
    on(dashboardPageLoading,(state) => {
        return {
            ...state,
            loading:true,
            success:false,
            failed:false,
        }
    }),
    on(dashboardPageLoaded,(state,action:{sensors:any}) => {
        return {
            ...state,
            loading:false,
            success:true,
            failed:false,
            sensors: action.sensors
        }
    }),
    on(dashboardPageFailed,(state) => {
        return {
            ...state,
            loading:false,
            success:false,
            failed:true,
        }
    })
)

export function dashboardReducer(state:any,action:any){
    return _dashboardReducer(state,action)
}
