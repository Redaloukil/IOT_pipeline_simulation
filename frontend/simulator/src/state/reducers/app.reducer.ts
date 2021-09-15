import { createReducer, on, State } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { appLoading, appLoadingFailure, appLoadingSuccess } from "../actions/app.action";
import { initialState } from "../initial-states/app.state";

export const _appReducer = createReducer(
    initialState,
    on(appLoading, (state) => {
        return {
            ...state,
            loading:true,
            loaded:false,
            failed:false,
        }
    }),
    on(appLoadingSuccess,(state) => {
        return {
            ...state,
            loading:false,
            loaded:true,
            failed:false,
        }
    }),
    on(appLoadingFailure, (state) => {
        return {
            ...state,
            loading:false,
            loaded:false,
            failed:true,
        }}
    )
)

export function appReducer(state:any,action:any){
    return _appReducer(state,action)
}