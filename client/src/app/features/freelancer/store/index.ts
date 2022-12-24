import {freelancersReducer, freelancerState} from "./freelancers.reducer";
import {ActionReducerMap} from "@ngrx/store";

export interface globalAppState {
    freelancers: freelancerState
}

export const reducers: ActionReducerMap<globalAppState, any> = {
    freelancers: freelancersReducer
}