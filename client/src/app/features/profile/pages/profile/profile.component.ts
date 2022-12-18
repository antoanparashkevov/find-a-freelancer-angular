import { Component, OnInit } from '@angular/core';
import {Freelancer} from "../../../freelancer/models/freelancer.model";
import {ProfileStorageService} from "../../services/profile-storage.service";
import {FreelancerStorage} from "../../../freelancer/services/freelancer-storage.service";
import {LoaderService} from "../../../freelancer/services/loader.service";
import {Router} from "@angular/router";

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
    tryingDeleteFreelancer: boolean = false
    
  constructor(
      private profileStorage: ProfileStorageService,
      public loaderService: LoaderService,
      private freelancerStorage: FreelancerStorage,
      private router: Router
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
          },
          error: (err) => {
              this.error = err.error;
              console.log('It has an error during fetch ProfileInformation >>> ', err)
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

    handleError() {
        this.error = null
    }
    
    tryDeleteFreelancer(data: boolean) {
        console.log('Data from freelancer-item', data)
        this.tryingDeleteFreelancer = data
    }

    cancelDeleting() {
        this.tryingDeleteFreelancer = false
        console.log('triggered from shared-dialog')
    }
    
    deleteFreelancer(data: boolean) {
        if(data) {
            this.tryingDeleteFreelancer = true;
            this.freelancerStorage.deleteFreelancer(this.freelancer[0]._id).subscribe({
                next: (resData) =>{
                        console.log('resData from deleting',resData)
                        this.tryingDeleteFreelancer = false
                        this.router.navigate(['/freelancers'])
                    }
            })
        }
        
        
    }

}
