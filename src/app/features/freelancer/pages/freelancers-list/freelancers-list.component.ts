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
    
    constructor(private freelancerService: FreelancerService) { }

    ngOnInit(): void {
        this.freelancers = this.freelancerService.getFreelancer()
    }

}
