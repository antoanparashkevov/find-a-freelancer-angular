import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

//Additional Modules
import { SharedModule } from "../../shared/shared.module";

//Components
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import { ProposalsReceivedComponent } from './pages/proposals-received/proposals-received.component'
import {ProposalRouting} from "./proposal-routing.module";


@NgModule({
    declarations: [
        ProposalItemComponent,
        ProposalsReceivedComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ProposalRouting
    ],
})
export class ProposalModule { }
