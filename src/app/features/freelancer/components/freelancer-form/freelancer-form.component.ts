import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel, NgModelGroup} from "@angular/forms";

@Component({
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.scss']
})
export class FreelancerFormComponent implements OnInit {
    formIsValid: boolean = true;
    checkboxIsValid: boolean = true;
    skills: string[] = ['type1', 'type2', 'type3']
    @ViewChild('skillGroupRef') skillRef!: NgModelGroup
    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(formRef: NgForm, firstName: NgModel, lastName: NgModel, description: NgModel, rate: NgModel, skillsGroupRef: NgModelGroup) {

        //TODO remove logs
        console.log('Form >>> ', formRef)
        console.log('firstName >>> ', firstName)
        console.log('lastName >>> ', lastName)
        console.log('description >>> ', description)
        console.log('rate >>> ', rate)
        console.log('Skills Group >>> ', skillsGroupRef)

        const skillsData = Object.values(this.skillRef.value)
        console.log('skillsData', skillsData)

        if(skillsData.every(f=>f === '')) {
            this.checkboxIsValid = false;
        } else {
            this.checkboxIsValid = true;
        }

        if(formRef.form.invalid) {
            this.formIsValid = false
        } else {
            this.formIsValid = true
        }
    }

}
