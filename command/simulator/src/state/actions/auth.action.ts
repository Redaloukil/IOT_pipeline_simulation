import { createAction } from "@ngrx/store";

export const authRequestLoading = createAction(
    "[auth] auth request loading",
)

export const authRequestSuccess = createAction(
    "[auth] auth request success",
)

export const authRequestFailed = createAction(
    "[auth] auth request failed",
)