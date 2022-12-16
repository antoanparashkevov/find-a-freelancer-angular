import {Component, OnInit } from '@angular/core';
import {Freelancer} from "../../models/freelancer.model";
import {FreelancerStorage} from "../../services/freelancer-storage.service";

@Component({
  selector: 'app-freelancer-registration',
  templateUrl: './freelancer-registration.component.html',
  styleUrls: ['./freelancer-registration.component.scss']
})

export class FreelancerRegistrationComponent implements OnInit { 
    
    constructor(private freelancerStorage: FreelancerStorage) {}
    ngOnInit() {
    }
    
    saveData(data: Freelancer) {
        console.log('Data from freelancer-form', data)
            this.freelancerStorage.storeFreelancer(data).subscribe(response=>{
                console.log('RESPONSE FROM SERVICE !!!IMPORTANT >>> ', response)
            })
    }
}

