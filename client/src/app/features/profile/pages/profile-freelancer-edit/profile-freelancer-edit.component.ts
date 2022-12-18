import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Freelancer} from "../../../freelancer/models/freelancer.model";
import {FreelancerStorage} from "../../../freelancer/services/freelancer-storage.service";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {NgForm, NgModel, NgModelGroup} from "@angular/forms";
import {ProfileStorageService} from "../../services/profile-storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile-freelancer-edit',
  templateUrl: './profile-freelancer-edit.component.html',
  styleUrls: ['./profile-freelancer-edit.component.scss']
})
export class ProfileFreelancerEditComponent implements OnInit, OnDestroy {
    freelancerData!: Freelancer
    skills: string[] = []
    freelancerDataSubscription!: Subscription
    formIsValid: boolean = true;
    checkboxIsValid: boolean = true;

    constructor(private freelancerStorage: FreelancerStorage,
                private router: Router,
                private profileStorage: ProfileStorageService,
                private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        
        this.currentRoute.data.subscribe({
            next: (data: Data) => {
                this.freelancerData = data['individualFreelancer']
                console.log('freelancerData', this.freelancerData)
            }
        })
        
        this.skills = this.freelancerStorage.fetchAreas()
    }
    
    ngOnDestroy() {
        if(this.freelancerDataSubscription) {
            this.freelancerDataSubscription.unsubscribe()
        }
    }

    onSubmit(formRef: NgForm, skillsGroupRef: NgModelGroup) {
        this.formIsValid = !formRef.form.invalid;

        const skillsData = Object.values(skillsGroupRef.value)
        this.checkboxIsValid = !skillsData.every(v=>v==='');

        if(!this.formIsValid) {
            this.currentRoute.data.subscribe({
                next: (data: Data)=>{
                    this.freelancerData = data['individualFreelancer']
                }
            })
            return
        } else {

            for(let [key,value] of Object.entries(formRef.value.skills)) {
                if(value === '') {
                    delete formRef.value.skills[key]
                }
            }
            formRef.value.skills = Object.keys(formRef.value.skills)
            //TODO remove logs
            console.log('Form >>> ', formRef)
            console.log('Skills Group >>> ', skillsGroupRef)
            console.log('skillsData', skillsData)


            this.freelancerStorage.freelancerId.subscribe(id=>{
                if(id) {
                    this.router.navigate(['/freelancers/',id])
                } else {
                    this.router.navigate(['/freelancers'])
                }
            })
            // formRef.reset()
        }
    }

}
