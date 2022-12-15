import { Component, OnInit } from '@angular/core';
import { Freelancer } from "../../models/freelancer.model";
import {FreelancerService} from "../../services/freelancer.service";
import {FreelancerStorage} from "../../services/freelancer-storage.service";
import {AuthService} from "../../../auth/services/auth.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-freelancers-list',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.scss']
})
export class FreelancersListComponent implements OnInit {
    freelancers: Freelancer[] = []
    isAuthenticated: boolean = false
    
    skills: {[id: string] : boolean} = {}
    
    constructor(
        private freelancerService: FreelancerService,
        private freelancerStorage: FreelancerStorage,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.skills = this.freelancerStorage.fetchAreas().reduce((a,v)=>({...a, [v]: true}), {})
        
        this.freelancerStorage.fetchFreelancers().subscribe(res=>{
            this.freelancers = res
            console.log('Freelancers from the Service >>> ', this.freelancers)
        })
        this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;//if it has a user data, to return boolean, not the actual user data
        })
    }
    
    newFilterCriteria(newFilters:{[id: string]: boolean}) {
        this.freelancerStorage.fetchFreelancers().subscribe(res=>{
            this.freelancers = res
            console.log('Freelancers from the Service >>> ', this.freelancers)
            console.log('newFilters', newFilters)
            
            this.freelancers = this.freelancers.filter(freelancer =>  {
                if(newFilters['frontend'] && freelancer.skills.includes('frontend')) {
                    return true;
                }
                if(newFilters['backend'] && freelancer.skills.includes('backend')) {
                    return true;
                }
                if(newFilters['devops'] && freelancer.skills.includes('devops')) {
                    return true;
                }
                if(newFilters['pm'] && freelancer.skills.includes('pm')) {
                    return true;
                }
                if(newFilters['qa'] && freelancer.skills.includes('qa')) {
                    return true;
                }
                return false
            })
        })
    }

}
