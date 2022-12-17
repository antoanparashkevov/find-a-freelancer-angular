import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./pages/profile.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
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
