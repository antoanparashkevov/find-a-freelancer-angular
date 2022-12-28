import { Component, OnInit } from '@angular/core';
import { ProposalService } from "../../services/proposal.service";
import { ProposalStorage } from "../../services/proposal-storage.service";
import { Proposal } from "../../models/proposal.model";
import {LoaderService} from "../../../freelancer/services/loader.service";
import { map } from "rxjs/operators";

//Redux
import { Store } from "@ngrx/store";
import * as fromApp from '../../../../store/app.reducer'
@Component({
  selector: 'app-proposals-received',
  templateUrl: './proposals-received.component.html',
  styleUrls: ['./proposals-received.component.scss']
})
export class ProposalsReceivedComponent implements OnInit {
    proposals: Proposal[] = []
    userId: string = localStorage.getItem('userId') || ''
    error: {message: string} | null = null;
    
    constructor(
      private proposalService: ProposalService,
      private proposalStorage: ProposalStorage,
      public loaderService: LoaderService,
      public store: Store<fromApp.GlobalAppState>
    ) { }
    
    ngOnInit(): void {
        if(this.userId) {
            if(this.userId.includes('"')) {
                this.userId = this.userId.slice(1, this.userId.length - 1)
            }
            this.store.select('proposals')
                .pipe(
                    map(proposalState=> proposalState.proposals)
                )
                .subscribe({
                    next: (proposalsData) => {
                        console.log('Proposals from ngRx >>> ', proposalsData)
                        this.proposals = proposalsData
                    },
                    error: (error) => {
                        this.error = error.error
                        console.log('It has an error! >>> ', error);

                    }
                })
            this.proposalStorage.getIndividualProposal(this.userId).subscribe({
                next: (resData)=>{
                    this.proposals = resData
                },
                error: (err) => {
                    this.error = err.error
                    console.log('It has an error! >>> ', err);
                }
            })
        }
        // the old behaviour is still here just for reference
        // this.proposals = this.proposalService.getProposals()
    } 
    
    handleError() {
        this.error = null
    }
    
    hasProposals() {
      return this.proposals && this.proposals.length > 0
    }

}
