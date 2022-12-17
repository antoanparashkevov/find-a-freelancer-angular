import { Component, OnInit } from '@angular/core';
import {Freelancer} from "../../../freelancer/models/freelancer.model";
import {ProfileStorageService} from "../../services/profile-storage.service";
import {FreelancerStorage} from "../../../freelancer/services/freelancer-storage.service";
import {LoaderService} from "../../../freelancer/services/loader.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    email: string = 'example@gmail.com'
    userId: string = ''
    error: {message: string} | null = null
    freelancer: Freelancer[] = []
    
  constructor(
      private profileStorage: ProfileStorageService,
      public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
        this.fetchProfileInformation()
  }
  
  private fetchProfileInformation() {
      this.profileStorage.fetchProfileInformation().subscribe({
          next: (resData)=> {
              this.email = resData.email
              this.userId = resData.id
              console.log('Profile Information from service ', resData)
              this.getIndividualFreelancer(this.userId)
          }
      })
  }

    private getIndividualFreelancer(index: string) {
        this.profileStorage.getFreelancerRegistration(index).subscribe({
            next: (resData) => {
                this.freelancer = resData
                console.log('freelancer >>> ', this.freelancer)
            },
            error: (err) => {
                this.error = err.error
                console.log('It has an error! >>> ', err)

            }
        })
    }
    
    hasFreelancerRegistration() {
        return this.freelancer && this.freelancer.length > 0;
    }

}
