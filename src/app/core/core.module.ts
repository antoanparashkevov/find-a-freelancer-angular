import {NgModule} from "@angular/core";

//Services
import {FreelancerService} from "../features/freelancer/services/freelancer.service";
import {ProposalService} from "../features/proposal/services/proposal.service";

@NgModule({
    providers: [
        FreelancerService,
        ProposalService
    ]
})

export class CoreModule {}