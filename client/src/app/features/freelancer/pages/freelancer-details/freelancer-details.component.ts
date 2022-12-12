import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {FreelancerService} from "../../services/freelancer.service";
import {Freelancer} from "../../models/freelancer.model";
import {FreelancerStorage} from "../../services/freelancer-storage.service";

@Component({
  selector: 'app-freelancer-details',
  templateUrl: './freelancer-details.component.html',
  styleUrls: ['./freelancer-details.component.scss']
})
export class FreelancerDetailsComponent implements OnInit {
    selectedFreelancer!: Freelancer
    index!: string;
    
  constructor(
      private route: ActivatedRoute,
      private freelancerService: FreelancerService,
      private freelancerStorage: FreelancerStorage
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
          this.index = params['id'];
          this.freelancerStorage.getIndividualFreelancer(this.index).subscribe(resData=>{
              this.selectedFreelancer = resData
          })
          console.log('User id >>> ', this.index)
      })
  }
}
