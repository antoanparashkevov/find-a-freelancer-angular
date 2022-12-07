import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FreelancerService} from "../../services/freelancer.service";
import {Freelancer} from "../../models/freelancer.model";

@Component({
  selector: 'app-freelancer-details',
  templateUrl: './freelancer-details.component.html',
  styleUrls: ['./freelancer-details.component.scss']
})
export class FreelancerDetailsComponent implements OnInit {
    selectedFreelancer!: Freelancer;
    index!: number;
    
  constructor(
      private route: ActivatedRoute,
      private freelancerService: FreelancerService
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(value => {
          this.index = +value['id'];
          this.selectedFreelancer = this.freelancerService.getSelectedFreelancer(this.index)
          console.log('User id >>> ', this.index)
      })
  }

}
