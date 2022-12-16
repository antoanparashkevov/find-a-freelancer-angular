import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CoreModule } from "./core/core.module";


//Routes
import { FreelancerRouting } from "./features/freelancer/freelancer-routing.module";
import { ProposalRouting } from "./features/proposal/proposal-routing.module";
import { AuthRouting } from "./features/auth/auth-routing.module";


//Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { FreelancerModule } from "./features/freelancer/freelancer.module";
import { ProposalModule } from "./features/proposal/proposal.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./features/auth/auth.module";

//Components
import { AppComponent } from './app.component';
import { AuthInterceptorService } from "./features/auth/auth-interceptor.service";




@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FreelancerRouting,
        ProposalRouting,
        AuthRouting,
        FreelancerModule,
        ProposalModule,
        SharedModule,
        CoreModule,
        AuthModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
