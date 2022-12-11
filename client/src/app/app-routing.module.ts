import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

//Components
// import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";


const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent},
]

@NgModule({
    // declarations: [PageNotFoundComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule, 
    ]
})
export class AppRoutingModule { }
