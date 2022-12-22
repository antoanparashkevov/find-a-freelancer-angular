import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";

//Components
import { FreelancerRegistrationComponent } from './pages/freelancer-registration/freelancer-registration.component';
import { FreelancerFormComponent } from './components/freelancer-form/freelancer-form.component';
import { FreelancerItemComponent } from './components/freelancer-item/freelancer-item.component';
import { FreelancerFilterComponent } from './components/freelancer-filter/freelancer-filter.component';
import { FreelancerDetailsComponent } from "./pages/freelancer-details/freelancer-details.component";
import { FreelancersListComponent } from "./pages/freelancers-list/freelancers-list.component";
import { FreelancerContactFormComponent } from './pages/freelancer-contact-form/freelancer-contact-form.component';
import {FreelancerRouting} from "./freelancer-routing.module";




@NgModule({
    declarations: [
        FreelancerFilterComponent,
        FreelancerFormComponent,
        FreelancerItemComponent,
        FreelancerDetailsComponent,
        FreelancerRegistrationComponent,
        FreelancersListComponent,
        FreelancerContactFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule,
        FreelancerRouting
    ],
    exports: [
        FreelancerFilterComponent,
        FreelancerFormComponent,
        FreelancerItemComponent,
        FreelancerDetailsComponent,
        FreelancerRegistrationComponent,
        FreelancersListComponent,
    ]
})
export class FreelancerModule { }
