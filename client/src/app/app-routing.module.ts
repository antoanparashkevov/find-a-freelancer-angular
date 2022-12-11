import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

//Components


const routes: Routes = [
    { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
