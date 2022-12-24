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
            ['type1', 'type2', 'type3'],
            'something1'
        ), 
        new Freelancer(
            'Nadezhda',
            'Dolashka',
            'description',
            20,
            ['type1', 'type2', 'type3'],
            'something1'
        ),
    ]
}

export function freelancersReducer(
    state:freelancerState = initialState,
    action: freelancersActions.StoreFreelancer): freelancerState {
    switch (action.type) {
        case freelancersActions.STORE_FREELANCER:
            return {
                ...state,
                freelancers: [...state.freelancers, action.payload]
            }
        default:
            return state
    }
}