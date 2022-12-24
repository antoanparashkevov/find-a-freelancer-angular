import {Action} from "@ngrx/store";
import {Freelancer} from "../models/freelancer.model";

export const STORE_FREELANCER: string = 'STORE_FREELANCER'

//!!! the Action interface forces us only to use type property, not payload. !!!
export class StoreFreelancer implements Action {
    readonly type = STORE_FREELANCER;
   constructor(public payload: Freelancer) {
   }
}