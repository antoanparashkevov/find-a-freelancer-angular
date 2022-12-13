import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm, NgModel, NgModelGroup} from "@angular/forms";
import {Freelancer} from "../../models/freelancer.model";
import {FreelancerStorage} from "../../services/freelancer-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.scss']
})
export class FreelancerFormComponent implements OnInit {
    firstName: string = ''
    lastName: string = ''
    description: string = ''
    hourlyRate: number = 13
    skills: string[] = []
    
    formIsValid: boolean = true;
    checkboxIsValid: boolean = true;
    
    @ViewChild('skillGroupRef') skillRef!: NgModelGroup
    @Output() saveData = new EventEmitter<Freelancer>()
    
    constructor(private freelancerStorage: FreelancerStorage,
                private router: Router) { }

    ngOnInit(): void {
        this.skills = this.freelancerStorage.fetchAreas()
    }

    onSubmit(formRef: NgForm, firstName: NgModel, lastName: NgModel, description: NgModel, rate: NgModel, skillsGroupRef: NgModelGroup) {
        this.formIsValid = !formRef.form.invalid;
        
        const skillsData = Object.values(this.skillRef.value)
        this.checkboxIsValid = !skillsData.every(f => f === '');
        
        if(!this.formIsValid) {
            this.firstName = formRef.value.firstName !== null ? formRef.value.firstName: this.firstName;
            this.lastName = formRef.value.lastName !== null ? formRef.value.lastName: this.lastName
            this.description = formRef.value.description !== null ? formRef.value.description: this.description
            this.hourlyRate = formRef.value.hourlyRate !== null ? formRef.value.hourlyRate: this.hourlyRate
            return
        } else {
        //TODO remove logs
        console.log('Form >>> ', formRef)
        console.log('firstName >>> ', firstName)
        console.log('lastName >>> ', lastName)
        console.log('description >>> ', description)
        console.log('rate >>> ', rate)
        console.log('Skills Group >>> ', skillsGroupRef)

        const skillsData = Object.values(this.skillRef.value)
        console.log('skillsData', skillsData)

        this.checkboxIsValid = !skillsData.every(f => f === '');
        
        formRef.value.skills = Object.keys(formRef.value.skills)
        this.saveData.emit(formRef.value)
        this.router.navigate(['/freelancers'])
        formRef.reset()
        }
        
    }

}
