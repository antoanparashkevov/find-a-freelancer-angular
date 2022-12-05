import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';



@NgModule({
    declarations: [
    ProposalItemComponent
    ],
    imports: [
    CommonModule
    ],
    exports: [
    ProposalItemComponent
    ]
})
export class ProposalModule { }
