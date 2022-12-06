import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import {ProposalsReceivedComponent} from './pages/proposals-received/proposals-received.component'


@NgModule({
    declarations: [
    ProposalItemComponent,
    ProposalsReceivedComponent
    ],
    imports: [
    CommonModule
    ],
    exports: [
    ProposalItemComponent,
    ProposalsReceivedComponent
    ]
})
export class ProposalModule { }
