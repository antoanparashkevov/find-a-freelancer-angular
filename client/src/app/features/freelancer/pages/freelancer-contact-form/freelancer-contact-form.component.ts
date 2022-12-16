import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProposalStorage} from "../../../proposal/services/proposal-storage.service";

@Component({
  selector: 'app-freelancer-contact-form',
  templateUrl: './freelancer-contact-form.component.html',
  styleUrls: ['./freelancer-contact-form.component.scss']
})

export class FreelancerContactFormComponent implements OnInit {
    formIsValid: boolean = true;

    email: string = ''
    message: string = ''

    constructor(
        private http: HttpClient,
        private router: Router,
        private proposalStorage: ProposalStorage,
        private currentRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    onSubmit(formRef: NgForm, emailRef: NgModel, messageRef: NgModel) {
        this.formIsValid = !formRef.form.invalid;

        if (!this.formIsValid) {
            this.email = formRef.value.email !== null ? formRef.value.email : this.email;
            this.message = formRef.value.message !== null ? formRef.value.message : this.message;
        }

        //TODO remove logs
        console.log('Form >>> ', formRef)
        // console.log('Email Ref >>> ', emailRef)
        // console.log('Message Ref >>> ', messageRef)
        console.log('params', this.currentRoute.snapshot.params)
        // const data = Object.assign({userId: this.currentRoute.snapshot.params['id']}, formRef.value)
        // console.log('Data to Send >>> ', data)
        // this.proposalStorage.postProposal(data).subscribe(res=>{
        //     console.log('Response from Service >>> ', res)
        // })
        
        this.router.navigate(['/freelancers'])
        // formRef.reset()
    }
}