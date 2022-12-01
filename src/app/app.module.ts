import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FreelancersListComponent } from './features/freelancer/components/freelancers-list/freelancers-list.component';
import { FreelancerDetailsComponent } from './features/freelancer/components/freelancer-details/freelancer-details.component';
import { SendProposalComponent } from './features/freelancer/components/send-proposal/send-proposal.component';
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
