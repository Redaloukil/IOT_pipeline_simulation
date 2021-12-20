import { createAction, props } from "@ngrx/store";

export const dashboardPageLoading = createAction(
    "[dashboard] dashboard page loading",
)

export const dashboardPageLoaded = createAction(
    "[dashboard] dashboard page loaded",
    props<{ sensors:any[] }>()
)

export const dashboardPageFailed = createAction(
    "[dashboard] dashboard request failed",
)