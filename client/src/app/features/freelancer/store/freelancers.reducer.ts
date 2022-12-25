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
            const freelancer = state.freelancers.find(f=>f._id === action.payload.index)
            const index = state.freelancers.findIndex(f=>f._id === action.payload.index)
            const updatedFreelancer = {
                ...freelancer,
                ...action.payload.freelancer
            }
            const allFreelancers = [...state.freelancers]
            allFreelancers[index] = updatedFreelancer
            
            return {
                ...state,
                freelancers: allFreelancers
            }
        case freelancersActions.DELETE_FREELANCER:
            
            return {
                ...state,
                freelancers: state.freelancers.filter(f=> {
                    return f._id !== action.payload
                })
            }
        default:
            return state
    }
}