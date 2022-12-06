import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';

//COMPONENT Registrations START
import { AppComponent } from './app.component';
import { FreelancersListComponent } from './features/freelancer/pages/freelancers-list/freelancers-list.component'
import { FreelancerDetailsComponent } from './features/freelancer/pages/freelancer-details/freelancer-details.component'
import { ProposalsReceivedComponent } from './features/proposal/pages/proposals-received/proposals-received.component'
import { FreelancerRegistrationComponent } from './features/freelancer/pages/freelancer-registration/freelancer-registration.component'
import { TheHeaderComponent } from './core/components/the-header/the-header.component'
import {FreelancerItemComponent} from "./features/freelancer/components/freelancer-item/freelancer-item.component";
import {SharedModule} from "./shared/shared.module";
import {ProposalModule} from "./features/proposal/proposal.module";
import {FreelancerFilterComponent} from "./features/freelancer/components/freelancer-filter/freelancer-filter.component";
import {HttpClientModule} from "@angular/common/http";
//COMPONENT Registrations END

const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
    { path: 'freelancers', component: FreelancersListComponent },
    { path: 'freelancers/:id', component: FreelancerDetailsComponent },
    { path: 'proposals', component: ProposalsReceivedComponent },
    { path: 'register', component: FreelancerRegistrationComponent },
    // {path: 'auth', component},
    // {path: ''}//notFound page
]

@NgModule({
    declarations: [
        AppComponent,
        TheHeaderComponent,
        FreelancersListComponent,
        FreelancerDetailsComponent,
        FreelancerRegistrationComponent,
        FreelancerItemComponent,
        FreelancerFilterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        SharedModule,
        ProposalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
