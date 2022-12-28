import * as fromFreelancers from '../features/freelancer/store/freelancers.reducer'
import * as fromAuth from '../features/auth/store/auth.reducer'
import * as fromProposals from '../features/proposal/store/proposal.reducer'
import {ActionReducerMap} from "@ngrx/store";

export interface GlobalAppState {
    freelancers: fromFreelancers.freelancerState,
    auth: fromAuth.AuthState,
    proposals: fromProposals.ProposalState
}

export const reducers: ActionReducerMap<GlobalAppState, any> = {
    freelancers: fromFreelancers.freelancersReducer,
    auth: fromAuth.authReducer,
    proposals: fromProposals.ProposalReducer
}