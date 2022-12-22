import { NgModule } from '@angular/core';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// Components
// import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";


const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
    { path: 'freelancers', loadChildren: ()=> import('./features/freelancer/freelancer.module').then(m=>m.FreelancerModule) },
    { path: 'proposals', loadChildren: ()=> import('./features/proposal/proposal.module').then(m=>m.ProposalModule) },
    { path: 'profile', loadChildren: ()=> import('./features/profile/profile.module').then(m=>m.ProfileModule) },
    { path: 'auth', loadChildren: ()=> import('./features/auth/auth.module').then(m=>m.AuthModule) },
    // { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page you are looking for is not found!'} },
    // { path: '**', redirectTo: 'not-found' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [
        RouterModule, 
    ]
})
export class AppRoutingModule { }
