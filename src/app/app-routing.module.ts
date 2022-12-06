import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

//Components
import {ProposalsReceivedComponent} from "./features/proposal/pages/proposals-received/proposals-received.component";
import {FreelancerRegistrationComponent} from "./features/freelancer/pages/freelancer-registration/freelancer-registration.component";

const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
    { path: 'proposals', component: ProposalsReceivedComponent },
    { path: 'register', component: FreelancerRegistrationComponent },
    // {path: 'auth', component},
    // {path: ''}//notFound page
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
