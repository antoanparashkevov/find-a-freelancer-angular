import {Routes, RouterModule } from "@angular/router";

//Components
import { AuthUserComponent } from "./components/auth-user.component";
import { NgModule } from "@angular/core";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
    {path: 'auth', component: AuthUserComponent},
//    TODO Lazy-Loading implementation...
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRouting {}