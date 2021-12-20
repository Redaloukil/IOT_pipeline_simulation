import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  Applicationstate } from "../types/state.model";

export const getAuthState = createFeatureSelector<Applicationstate>('auth');
 
export const getFeatureAuth = createSelector(
  getAuthState,
  (state) => state.auth
);
