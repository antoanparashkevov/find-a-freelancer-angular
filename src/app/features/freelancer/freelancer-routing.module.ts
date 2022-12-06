import { Routes, RouterModule } from '@angular/router'
import { NgModule } from "@angular/core";

//Components
import {FreelancersListComponent} from "./pages/freelancers-list/freelancers-list.component";
import {FreelancerDetailsComponent} from "./pages/freelancer-details/freelancer-details.component";
import {FreelancerRegistrationComponent} from "./pages/freelancer-registration/freelancer-registration.component";

const routes: Routes = [
    { path: 'freelancers', component: FreelancersListComponent },
    { path: 'freelancers/:id', component: FreelancerDetailsComponent },
    { path: 'register', component: FreelancerRegistrationComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FreelancerRouting {}