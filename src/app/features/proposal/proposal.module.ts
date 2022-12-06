import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Additional Modules
import { SharedModule } from "../../shared/shared.module";

//Components
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import { ProposalsReceivedComponent } from './pages/proposals-received/proposals-received.component'


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
