import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-freelancer-contact-form',
  templateUrl: './freelancer-contact-form.component.html',
  styleUrls: ['./freelancer-contact-form.component.scss']
})

export class FreelancerContactFormComponent implements OnInit {
    formIsValid: boolean = true;

    email: string = ''
    message: string = ''

    constructor(private router: Router, private currentRouter: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    onSubmit(formRef: NgForm, email: NgModel, message: NgModel) {
        this.formIsValid = !formRef.form.invalid;

        if (!this.formIsValid) {
            this.email = formRef.value.email !== null ? formRef.value.email : this.email;
            this.message = formRef.value.message !== null ? formRef.value.message : this.message;
        }

        //TODO remove logs
        console.log('Form >>> ', formRef)
        console.log('Email >>> ', email)
        console.log('Message >>> ', message)
        
        //todo implement post request
        
        this.router.navigate(['/freelancers'])
        formRef.reset()
    }
}