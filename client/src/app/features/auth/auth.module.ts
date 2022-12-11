import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

//Components
import { AuthUserComponent } from './auth-user.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        AuthUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        AuthUserComponent
    ]
})
export class AuthModule { }
