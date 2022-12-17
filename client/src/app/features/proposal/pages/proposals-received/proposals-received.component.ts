import { Component, OnInit } from '@angular/core';
import { ProposalService } from "../../services/proposal.service";
import { ProposalStorage } from "../../services/proposal-storage.service";
import { Proposal } from "../../models/proposal.model";

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
      private proposalStorage: ProposalStorage
  ) { }

  ngOnInit(): void {
        if(this.userId) {
            if(this.userId.includes('"')) {
                this.userId = this.userId.slice(1, this.userId.length - 1)
            }
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

}
