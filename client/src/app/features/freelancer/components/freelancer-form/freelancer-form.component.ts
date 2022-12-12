import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm, NgModel, NgModelGroup} from "@angular/forms";
import {Freelancer} from "../../models/freelancer.model";

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
    
    
    formIsValid: boolean = true;
    checkboxIsValid: boolean = true;
    skills: string[] = ['type1', 'type2', 'type3', 'type4', 'type5']
    @ViewChild('skillGroupRef') skillRef!: NgModelGroup
    @Output() saveData = new EventEmitter<Freelancer>()
    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(formRef: NgForm, firstName: NgModel, lastName: NgModel, description: NgModel, rate: NgModel, skillsGroupRef: NgModelGroup) {
        this.formIsValid = !formRef.form.invalid;
        
        if(!this.formIsValid) {
            this.firstName = formRef.value.firstName !== null ? formRef.value.firstName: this.firstName;
            this.lastName = formRef.value.lastName !== null ? formRef.value.lastName: this.lastName
            this.description = formRef.value.description !== null ? formRef.value.description: this.description
            this.hourlyRate = formRef.value.hourlyRate !== null ? formRef.value.hourlyRate: this.hourlyRate
        }
        
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
        formRef.reset()
    }

}
