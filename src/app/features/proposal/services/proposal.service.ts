import { Injectable } from '@angular/core';
import { Proposal } from "../models/proposal.model";

@Injectable()

export class ProposalService {
   private proposals: Proposal[] = [
        new Proposal(
            'An example message 1',
            'antoanparashkevov@gmail.com'
        ),
        new Proposal(
            'An example message 2',
            'tonkata1505@gmail.com'
        )
    ]
  constructor() { }
    
    getProposals() {
       return this.proposals.slice()
    }
}
