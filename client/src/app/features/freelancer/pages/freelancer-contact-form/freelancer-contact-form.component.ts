import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProposalStorage} from "../../../proposal/services/proposal-storage.service";
import {FreelancerStorage} from "../../services/freelancer-storage.service";
import {Proposal} from "../../../proposal/models/proposal.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-freelancer-contact-form',
  templateUrl: './freelancer-contact-form.component.html',
  styleUrls: ['./freelancer-contact-form.component.scss']
})

export class FreelancerContactFormComponent implements OnInit, OnDestroy {
    formIsValid: boolean = true;
    ownerIdSubscription!: Subscription
    email: string = ''
    message: string = ''
    dataToSend!: Proposal
    ownerId: string | null = ''
    
    constructor(
        private http: HttpClient,
        private router: Router,
        private proposalStorage: ProposalStorage,
        private freelancerStorage: FreelancerStorage
    ) {
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
        
        this.dataToSend = formRef.value
        
        this.ownerIdSubscription = this.freelancerStorage.ownerId.subscribe({
                next: (val) => {
                    this.ownerId = val
                    this.postProposal()
                }
            }
         )
        
        this.router.navigate(['/freelancers'])
        formRef.reset()
    }
    
    ngOnDestroy() {
        this.ownerIdSubscription.unsubscribe()
    }
    
    private postProposal() {
        return this.proposalStorage.postProposal(Object.assign({userId: this.ownerId}, this.dataToSend)).subscribe(res=>{
            console.log('Response from Service >>> ', res)
        })
    }
}