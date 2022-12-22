import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FreelancerService } from "../../services/freelancer.service";
import { Freelancer } from "../../models/freelancer.model";
import { FreelancerStorage } from "../../services/freelancer-storage.service";

@Component({
  selector: 'app-freelancer-details',
  templateUrl: './freelancer-details.component.html',
  styleUrls: ['./freelancer-details.component.scss'],
})
export class FreelancerDetailsComponent implements OnInit {
    selectedFreelancer!: Freelancer
    index!: string;
    error: {message: string} | null = null;
    
  constructor(
      private route: ActivatedRoute,
      private freelancerService: FreelancerService,
      private freelancerStorage: FreelancerStorage
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
          this.index = params['id'];
          this.getIndividualFreelancer(this.index)
          console.log('User id >>> ', this.index)
      })
      
  }
  
  private getIndividualFreelancer(index: string) {
      this.freelancerStorage.getIndividualFreelancer(index).subscribe({
          next: (resData) => {
              this.selectedFreelancer = resData
              console.log('selectedFreelancer >>> ', this.selectedFreelancer)
          },
          error: (err) => {
              this.error = err.error
              console.log('It has an error! >>> ', err)
              
          }
      })
  }
  
    handleError() {
        this.error = null
    }
}
