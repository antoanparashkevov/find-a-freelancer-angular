import {Action} from "@ngrx/store";
import {Freelancer} from "../models/freelancer.model";

export const STORE_FREELANCER: string = 'STORE_FREELANCER'
export const EDIT_FREELANCER: string = 'EDIT_FREELANCER'
export const DELETE_FREELANCER: string = 'DELETE_FREELANCER'

//!!! the Action interface forces us only to use type property, not payload. !!!
export class StoreFreelancer implements Action {
    readonly type = STORE_FREELANCER;
   constructor(public payload: Freelancer | any) {
   }
}

export class EditFreelancer implements Action {
    readonly type = EDIT_FREELANCER;

    constructor(public payload: {
        index: string,
        freelancer: Freelancer
    } | any) {}

}

export class DeleteFreelancer implements Action {
    readonly type = DELETE_FREELANCER;

    constructor(public payload: string | any) {}

}

export type FreelancerActions = StoreFreelancer | EditFreelancer | DeleteFreelancer