import * as freelancersActions from './freelancers.actions'
import { Freelancer } from "../models/freelancer.model";

const initialState = {
    freelancers: [ new Freelancer
        (
            'Antoan',
            'Parashkevov',
            'description',
            12,
            ['type1', 'type2', 'type3'],
            'something1'
        ),
        new Freelancer
        (
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
    state = initialState,
    action: freelancersActions.StoreFreelancer) {
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