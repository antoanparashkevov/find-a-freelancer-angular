import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Additional modules...
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

//Components...
import { ProfileComponent } from './pages/profile.component';
import {FreelancerModule} from "../freelancer/freelancer.module";


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FreelancerModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule { }
