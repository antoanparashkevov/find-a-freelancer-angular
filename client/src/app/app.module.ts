import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store'

//Routes
import { ProposalRouting } from "./features/proposal/proposal-routing.module";
import { AuthRouting } from "./features/auth/auth-routing.module";
import { ProfileRouting } from "./features/profile/profile-routing.module";


//Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { FreelancerModule } from "./features/freelancer/freelancer.module";

//Components
import { AppComponent } from './app.component';
import { AuthInterceptorService } from "./features/auth/auth-interceptor.service";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";

//Redux
import { freelancersReducer } from "./features/freelancer/store/freelancers.reducer";
import {reducers} from "./features/freelancer/store";



@NgModule({
    declarations: [
        AppComponent, 
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        HttpClientModule,
        FreelancerModule,
        ProposalRouting,
        AuthRouting,
        ProfileRouting,
        SharedModule,
        CoreModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
