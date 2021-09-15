import {createAction,props} from '@ngrx/store';

export const signupActions = {
    signupRequestPending: createAction(
        '[Signup Page] Signup Request Pending',
        props<{ username: string; password: string }>()
    ),
    signupRequestSuccess: createAction(
        '[Signup Page] Signup Request Success',
        props<{ username: string; password: string }>()
    ),
    signupRequestError: createAction(
        '[Signup Page] Signup Request Error',
        props<{ username: string; password: string }>()
    ),
    signupFormError: createAction (
        '[Signup Page] Signup Error',
        props<{ [key:string]: string }>()
    ),
} 

