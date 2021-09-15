import { createReducer, on } from "@ngrx/store";
import { authRequestFailed, authRequestLoading, authRequestSuccess } from "../actions/auth.action";
import { initialAuthState } from "../initial-states/auth.state";

export const AuthReducer = createReducer(
    initialAuthState,
    on(authRequestLoading, (state) => {
        return {
            ...state,
        }
    }),
    on(authRequestSuccess,(state,action) => {
        return {
            ...state,
        }
    }),
    on(authRequestFailed, (state,action) => {
        return {
            ...state,
        }}
    )
)