import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

//Components
import { FreelancerRegistrationComponent } from './pages/freelancer-registration/freelancer-registration.component';
import { FreelancerFormComponent } from './components/freelancer-form/freelancer-form.component';
import { FreelancerItemComponent } from './components/freelancer-item/freelancer-item.component';
import { FreelancerFilterComponent } from './components/freelancer-filter/freelancer-filter.component';
import { FreelancerDetailsComponent } from "./pages/freelancer-details/freelancer-details.component";
import { FreelancersListComponent } from "./pages/freelancers-list/freelancers-list.component";
import { SendProposalComponent } from "./pages/send-proposal/send-proposal.component";




@NgModule({
    declarations: [
        FreelancerFilterComponent,
        FreelancerFormComponent,
        FreelancerItemComponent,
        FreelancerDetailsComponent,
        FreelancerRegistrationComponent,
        FreelancersListComponent,
        SendProposalComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        FreelancerFilterComponent,
        FreelancerFormComponent,
        FreelancerItemComponent,
        FreelancerDetailsComponent,
        FreelancerRegistrationComponent,
        FreelancersListComponent,
        SendProposalComponent
    ]
})
export class FreelancerModule { }
