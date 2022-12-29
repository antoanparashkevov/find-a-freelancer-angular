import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Proposal} from "../models/proposal.model";
import { environment } from "../../../../environments/environment";

@Injectable()
export class ProposalStorage {
    url: string = environment.app.default_url
    constructor(
        private http: HttpClient) {
    }
    
    postProposal(data: Proposal) {
        // return an observable
        return this.http.post<Proposal>(`${this.url}/proposalsData/proposals`, data)
    }
    
    getIndividualProposal(userId: string) {
        // return an observable
        return this.http.get<Proposal[]>(`${this.url}/proposalsData/proposals/${userId}`)
    }
}