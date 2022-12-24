import * as freelancersActions from './freelancers.actions'
const initialState = {
    freelancers: []
}

export default function freelancersReducer(state = initialState, action: freelancersActions.StoreFreelancer) {
    switch (action.type) {
        case freelancersActions.STORE_FREELANCER:
            return {
                ...state,
                freelancers: [...state.freelancers, action.payload]
            }
        default: return 'asd'
    }
}