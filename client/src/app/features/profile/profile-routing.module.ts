import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AuthGuard} from "../auth/auth.guard";
import {ProfileFreelancerEditComponent} from "./pages/profile-freelancer-edit/profile-freelancer-edit.component";

const routes: Routes = [
    { 
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        //todo add auth guard to the children
        children: [
            {
            path: ':id/edit',
            component: ProfileFreelancerEditComponent,
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRouting { }
