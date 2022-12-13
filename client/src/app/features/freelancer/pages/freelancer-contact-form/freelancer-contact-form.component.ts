import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-freelancer-contact-form',
  templateUrl: './freelancer-contact-form.component.html',
  styleUrls: ['./freelancer-contact-form.component.scss']
})
export class FreelancerContactFormComponent implements OnInit {
    formIsValid: boolean = true;
    @ViewChild('formRef') formRef!: NgForm
    
    constructor() { }
    
    ngOnInit(): void {
    }

    onSubmit(formRef: NgForm, email: NgModel, message: NgModel) {
        
        //TODO remove logs
        console.log('Form >>> ', this.formRef)
        console.log('Email >>> ', email)
        console.log('Message >>> ', message)
        if(formRef.submitted && formRef.form.invalid) {
            this.formIsValid = false
        } else {
            this.formIsValid = true;
        }
    }
    
}