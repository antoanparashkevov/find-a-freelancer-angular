import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Proposal} from "../models/proposal.model";
import { tap } from "rxjs/operators";


//Redux
import { Store } from "@ngrx/store";
import * as fromApp from '../../../store/app.reducer'
import * as proposalActions from '../store/proposal.actions'
@Injectable()
export class ProposalStorage {
    
    constructor(
        private http: HttpClient,
        private store: Store<fromApp.GlobalAppState>
        ) {
    }
    
    postProposal(data: Proposal) {
        // return an observable
        return this.http.post<Proposal>('http://localhost:3030/proposalsData/proposals', data)
    }
    
    getIndividualProposal(userId: string) {
        // return an observable
        return this.http.get<Proposal[]>('http://localhost:3030/proposalsData/proposals/' + userId)
            .pipe(
                tap( (proposalsData)=> {
                    this.store.dispatch(new proposalActions.SetIndividualProposals(proposalsData))
                })
            )
    }
}