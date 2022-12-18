import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// Components
// import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";


const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
    // { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page you are looking for is not found!'} },
    // { path: '**', redirectTo: 'not-found' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule, 
    ]
})
export class AppRoutingModule { }
