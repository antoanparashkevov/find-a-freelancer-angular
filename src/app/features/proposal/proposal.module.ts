import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import {ProposalsReceivedComponent} from './pages/proposals-received/proposals-received.component'
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
    ProposalItemComponent,
    ProposalsReceivedComponent
    ],
    imports: [
    CommonModule,
    SharedModule
    ],
    exports: [
    ProposalItemComponent,
    ProposalsReceivedComponent
    ]
})
export class ProposalModule { }
