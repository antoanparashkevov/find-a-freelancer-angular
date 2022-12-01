import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalsReceivedComponent } from './pages/proposals-received/proposals-received.component';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';



@NgModule({
  declarations: [
    ProposalsReceivedComponent,
    ProposalItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProposalModule { }
