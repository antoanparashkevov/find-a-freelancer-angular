import { Component, OnInit } from '@angular/core';
import { Freelancer } from "../../models/freelancer.model";
import {FreelancerService} from "../../services/freelancer.service";
import {FreelancerStorage} from "../../services/freelancer-storage.service";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-freelancers-list',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.scss']
})
export class FreelancersListComponent implements OnInit {
    freelancers: Freelancer[] = []
    isAuthenticated: boolean = false
    skills: {[id: string] : boolean} = {
        type1: true,
        type2: true,
        type3: true,
        type4: true,
        type5: true,
    }
    
    constructor(
        private freelancerService: FreelancerService,
        private freelancerStorage: FreelancerStorage,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.freelancerStorage.fetchFreelancers().subscribe(res=>{
            this.freelancers = res
            console.log('Freelancers from the Service >>> ', this.freelancers)
        })
        this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;//if it has a user data, to return boolean, not the actual user data
        })
    }
    
    newFilterCriteria(newFilters:{[id: string]: boolean}) {
        this.skills = newFilters
        this.freelancers = this.freelancerService.getFreelancer(newFilters)
    }

}
