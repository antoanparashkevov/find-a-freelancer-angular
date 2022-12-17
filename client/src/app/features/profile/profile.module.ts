import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Additional modules...
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

//Components...
import { ProfileComponent } from './pages/profile/profile.component';
import {FreelancerModule} from "../freelancer/freelancer.module";
import { ProfileFreelancerEditComponent } from './pages/profile-freelancer-edit/profile-freelancer-edit.component';
import {FormsModule} from "@angular/forms";


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
        FormsModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule { }
