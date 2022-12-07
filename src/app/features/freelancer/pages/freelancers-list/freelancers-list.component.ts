import { Component, OnInit } from '@angular/core';
import { Freelancer } from "../../models/freelancer.model";
import {FreelancerService} from "../../services/freelancer.service";

@Component({
  selector: 'app-freelancers-list',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.scss']
})
export class FreelancersListComponent implements OnInit {
    freelancers: Freelancer[] = []
    
    skills: {[id: string] : boolean} = {
        type1: true,
        type2: true,
        type3: true,
        type4: true,
        type5: true,
    }
    
    constructor(private freelancerService: FreelancerService) { }

    ngOnInit(): void {
        this.freelancers = this.freelancerService.getFreelancer(this.skills)
    }
    
    newFilterCriteria(newFilters:{[id: string]: boolean}) {
        this.skills = newFilters
        this.freelancers = this.freelancerService.getFreelancer(newFilters)
        
    }

}
