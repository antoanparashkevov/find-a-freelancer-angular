import * as freelancersActions from './freelancers.actions'
import { Freelancer } from "../models/freelancer.model";

export interface freelancerState {
    freelancers: Freelancer[]
}

const initialState: freelancerState = {
    freelancers: [ 
        new Freelancer(
            'Antoan',
            'Parashkevov',
            'description',
            12,
            ['frontend', 'backend', 'pm'],
            'something1'
        ), 
        new Freelancer(
            'Nadezhda',
            'Dolashka',
            'description',
            20,
            ['devops', 'pm', 'qa'],
            'something2'
        ),
    ]
}

export function freelancersReducer(
    state:freelancerState = initialState,
    action: freelancersActions.FreelancerActions): freelancerState {
    switch (action.type) {
        case freelancersActions.STORE_FREELANCER:
            return {
                ...state,
                freelancers: [...state.freelancers, action.payload]
            }
            
        case freelancersActions.EDIT_FREELANCER:
            return {
                ...state,
                freelancers: [...state.freelancers, action.payload]
            }
        default:
            return state
    }
}