import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserComponent } from './auth-user.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        AuthUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AuthUserComponent
    ]
})
export class AuthModule { }
