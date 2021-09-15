import { createAction } from "@ngrx/store";

export const appLoading = createAction(
    "[app] loading",
)

export const appLoadingSuccess = createAction(
    "[app] loading success",
)

export const appLoadingFailure = createAction(
    "[app] loading failure",
)