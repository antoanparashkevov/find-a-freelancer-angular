import {freelancersReducer, freelancerState} from "./freelancers.reducer";
import {ActionReducerMap} from "@ngrx/store";

export const rootReducer = {}

export interface appState {
    freelancers: freelancerState
}

export const reducers: ActionReducerMap<appState, any> = {
    freelancers: freelancersReducer
}