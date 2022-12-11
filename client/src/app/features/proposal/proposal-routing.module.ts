import { Routes, RouterModule } from "@angular/router";

//Components
import {ProposalsReceivedComponent} from "./pages/proposals-received/proposals-received.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    { path: 'proposals', component: ProposalsReceivedComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProposalRouting {}