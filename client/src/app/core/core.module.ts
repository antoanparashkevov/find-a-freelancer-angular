import {NgModule} from "@angular/core";

//Services
import {FreelancerService} from "../features/freelancer/services/freelancer.service";
import {FreelancerStorage} from "../features/freelancer/services/freelancer-storage.service";
import {ProposalService} from "../features/proposal/services/proposal.service";
import {TheHeaderComponent} from "./components/the-header/the-header.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
      TheHeaderComponent  
    ],
    imports: [
      SharedModule,
      CommonModule,
      RouterModule  
    ],
    providers: [
        FreelancerService,
        ProposalService,
        FreelancerStorage
    ],
    exports: [
        TheHeaderComponent,
        SharedModule,
        CommonModule,
        RouterModule,
    ]
})

export class CoreModule {}