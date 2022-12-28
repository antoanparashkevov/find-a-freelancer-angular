import { Proposal } from "../models/proposal.model";
import * as ProposalActions from './proposal.actions'
export interface ProposalState {
    proposals: Proposal[]
}

const initialState: ProposalState = {
    proposals: []
}

export function ProposalReducer(
    state = initialState,
    action: ProposalActions.ProposalActions
) {
    switch (action.type) {
        case ProposalActions.SET_INDIVIDUAL_PROPOSALS:
            return {
                ...state,
                proposals: [...action.payload]
            }
        default:
            return state
    }
}