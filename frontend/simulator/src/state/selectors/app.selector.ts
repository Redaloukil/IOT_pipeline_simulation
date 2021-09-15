import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Applicationstate } from "../types/state.model";

export const getAppState = createFeatureSelector<Applicationstate>('app');
 
export const getFeatureApp = createSelector(
  getAppState,
  state => state.app
);
