import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Applicationstate } from "../types/state.model";

export const getDashboardState = createFeatureSelector<Applicationstate>('dashboard');
 
export const getFeatureDashboard = createSelector(
  getDashboardState,
  (state) => state.dashboard
);