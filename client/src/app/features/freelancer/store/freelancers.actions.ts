import {Action} from "@ngrx/store";
import {Freelancer} from "../models/freelancer.model";

export const STORE_FREELANCER: string = 'STORE_FREELANCER'
export const EDIT_FREELANCER: string = 'EDIT_FREELANCER'

//!!! the Action interface forces us only to use type property, not payload. !!!
export class StoreFreelancer implements Action {
    readonly type = STORE_FREELANCER;
   constructor(public payload: Freelancer) {
   }
}

export class EditFreelancer implements Action {
    readonly type = EDIT_FREELANCER;

    constructor(public payload: Freelancer) {}

}

export type FreelancerActions = StoreFreelancer | EditFreelancer