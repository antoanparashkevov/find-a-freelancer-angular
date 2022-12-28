import { Action } from "@ngrx/store";
import { Proposal } from "../models/proposal.model";

export const SET_INDIVIDUAL_PROPOSALS = '[Proposals] Set Individual Proposals'

export class SetIndividualProposals implements Action {
    readonly type = SET_INDIVIDUAL_PROPOSALS;
    
    constructor(public payload: Proposal[]) {
    }
}

export type ProposalActions = SetIndividualProposals