import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Additional modules...
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import {FreelancerModule} from "../freelancer/freelancer.module";
import {FormsModule} from "@angular/forms";
import {ProfileRouting} from "./profile-routing.module";

//Components...
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFreelancerEditComponent } from './pages/profile-freelancer-edit/profile-freelancer-edit.component';


@NgModule({
    declarations: [
        ProfileComponent,
        ProfileFreelancerEditComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FreelancerModule,
        FormsModule,
        ProfileRouting
    ],
})
export class ProfileModule { }
