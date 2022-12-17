import { Routes, RouterModule } from '@angular/router'
import { NgModule } from "@angular/core";

//Components
import {FreelancersListComponent} from "./pages/freelancers-list/freelancers-list.component";
import {FreelancerDetailsComponent} from "./pages/freelancer-details/freelancer-details.component";
import {FreelancerRegistrationComponent} from "./pages/freelancer-registration/freelancer-registration.component";
import {FreelancerContactFormComponent} from "./pages/freelancer-contact-form/freelancer-contact-form.component";
import {AuthGuard} from "../auth/auth.guard";
import {FreelancerGuard} from "./freelancer.guard";

const routes: Routes = [
    { path: 'freelancers', component: FreelancersListComponent },
    { 
        path: 'freelancers/:id', 
        component: FreelancerDetailsComponent,
        children: [
            { 
                path: 'contact',
                component: FreelancerContactFormComponent
            }
    
        ]
    },
    { path: 'register', canActivate: [FreelancerGuard, AuthGuard ], component: FreelancerRegistrationComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FreelancerRouting {}