import { Routes, RouterModule } from "@angular/router";

//Components
import {ProposalsReceivedComponent} from "./pages/proposals-received/proposals-received.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
    //   /proposals
    { path: '', canActivate: [AuthGuard], component: ProposalsReceivedComponent, data: { animation: 'isRight' } },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProposalRouting {}