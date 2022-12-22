import {Component, Input, OnInit} from '@angular/core';
import {Proposal} from "../../models/proposal.model";

@Component({
  selector: 'app-proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.scss']
})
export class ProposalItemComponent implements OnInit {
    @Input() proposal!: Proposal;
    @Input('i') index!: number;
    
    constructor() { }
    
    ngOnInit(): void {
    }

}
