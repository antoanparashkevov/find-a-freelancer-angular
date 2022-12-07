import { Component, OnInit } from '@angular/core';
import { Proposal } from "../../models/proposal.model";
import { ProposalService } from "../../services/proposal.service";

@Component({
  selector: 'app-proposals-received',
  templateUrl: './proposals-received.component.html',
  styleUrls: ['./proposals-received.component.scss']
})
export class ProposalsReceivedComponent implements OnInit {
    proposals: Proposal[] = []
  constructor(private proposalService: ProposalService) { }

  ngOnInit(): void {
        this.proposals = this.proposalService.getProposals()
  }

}
