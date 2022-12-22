import { NgModule } from '@angular/core';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// Components
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {FreelancersListComponent} from "./features/freelancer/pages/freelancers-list/freelancers-list.component";
import {FreelancerDetailsComponent} from "./features/freelancer/pages/freelancer-details/freelancer-details.component";
import {FreelancerContactFormComponent} from "./features/freelancer/pages/freelancer-contact-form/freelancer-contact-form.component";
import {FreelancerGuard} from "./features/freelancer/freelancer.guard";
import {AuthGuard} from "./features/auth/auth.guard";
import {FreelancerRegistrationComponent} from "./features/freelancer/pages/freelancer-registration/freelancer-registration.component";


const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
    { path: 'freelancers', component: FreelancersListComponent, data: { animation: 'isLeft' } },
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
    { path: 'proposals', loadChildren: ()=> import('./features/proposal/proposal.module').then(m=>m.ProposalModule) },
    { path: 'profile', loadChildren: ()=> import('./features/profile/profile.module').then(m=>m.ProfileModule) },
    { path: 'auth', loadChildren: ()=> import('./features/auth/auth.module').then(m=>m.AuthModule) },
    { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page you are looking for is not found!'} },
    { path: '**', redirectTo: 'not-found' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [
        RouterModule, 
    ]
})
export class AppRoutingModule { }
