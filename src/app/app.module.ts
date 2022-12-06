import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

//Routes
import {FreelancerRouting} from "./features/freelancer/freelancer-routing.module";


//Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { FreelancerModule } from "./features/freelancer/freelancer.module";
import { ProposalModule } from "./features/proposal/proposal.module";
import { SharedModule } from "./shared/shared.module";

//Components
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './core/components/the-header/the-header.component'




@NgModule({
    declarations: [
        AppComponent,
        TheHeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FreelancerRouting,
        FreelancerModule,
        ProposalModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
