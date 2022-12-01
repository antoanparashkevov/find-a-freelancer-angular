import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FreelancersListComponent } from './freelancer/freelancers-list/freelancers-list.component';
import { FreelancerDetailsComponent } from './freelancer/freelancer-details/freelancer-details.component';
import { SendProposalComponent } from './freelancer/send-proposal/send-proposal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TheHeaderComponent } from './core/components/the-header/the-header.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FreelancersListComponent,
    FreelancerDetailsComponent,
    SendProposalComponent,
    NotFoundComponent,
    TheHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
