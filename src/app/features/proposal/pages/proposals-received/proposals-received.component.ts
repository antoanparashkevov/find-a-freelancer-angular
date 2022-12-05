import { Component, OnInit } from '@angular/core';
import {Proposal} from "../../models/proposal.model";

@Component({
  selector: 'app-proposals-received',
  templateUrl: './proposals-received.component.html',
  styleUrls: ['./proposals-received.component.scss']
})
export class ProposalsReceivedComponent implements OnInit {
    proposals: Proposal[] = [
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

  ngOnInit(): void {
  }

}
