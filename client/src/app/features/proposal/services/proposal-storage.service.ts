import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Proposal} from "../models/proposal.model";

@Injectable()
export class ProposalStorage {
    
    constructor(
        private http: HttpClient,
        private router: Router) {
    }
    
    postProposal(data: Proposal) {
        // return an observable
        return this.http.post<Proposal>('http://localhost:3030/proposalsData/proposals', data)
    }
    
    getIndividualProposal(userId: string) {
        // return an observable
        return this.http.get<Proposal[]>('http://localhost:3030/proposalsData/proposals/' + userId)
    }
}