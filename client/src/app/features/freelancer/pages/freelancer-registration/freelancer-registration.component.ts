import {Component, OnInit } from '@angular/core';
import {Freelancer} from "../../models/freelancer.model";
import {FreelancerStorage} from "../../services/freelancer-storage.service";

//Redux
import { Store } from "@ngrx/store";
import * as FreelancerActions from '../../store/freelancers.actions'
import * as fromApp from '../../../../store/app.reducer'
@Component({
  selector: 'app-freelancer-registration',
  templateUrl: './freelancer-registration.component.html',
  styleUrls: ['./freelancer-registration.component.scss']
})

export class FreelancerRegistrationComponent implements OnInit {
    constructor(
        private freelancerStorage: FreelancerStorage,
        private store: Store<fromApp.GlobalAppState>
    ) {}
    ngOnInit() {
    }
    
    saveData(data: Freelancer) {
            this.freelancerStorage.storeFreelancer(data).subscribe(response=>{
                console.log('RESPONSE FROM SERVICE >>> ', response)
            })
        this.store.dispatch(new FreelancerActions.StoreFreelancer(data))
    }
}

