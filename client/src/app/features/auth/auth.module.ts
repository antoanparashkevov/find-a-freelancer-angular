import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

//Components
import { AuthUserComponent } from './components/auth-user.component';
import { SharedModule } from "../../shared/shared.module";
import {AuthRouting} from "./auth-routing.module";


@NgModule({
    declarations: [
        AuthUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule,
        AuthRouting
    ],
})
export class AuthModule { }
