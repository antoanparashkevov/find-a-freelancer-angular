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
        console.log('Form >>> ', this.formRef)
        console.log('Email >>> ', email)
        console.log('Message >>> ', message)
        if(formRef.submitted && formRef.form.invalid) {
            this.formIsValid = false
        } else {
            this.formIsValid = true;
        }
    }
    
    clearInvalidClass(inputType: string) {
    
    }
}
// name: 'ContactCoach',
//         data() {
//             return {
//                 message: {
//                     val: '',
//                     isValid: true
//                 },
//                 email: {
//                     val: '',
//                     isValid: true
//                 },
//                 formIsValid: true
//             };
//         },
//         methods: {
//             clearInvalidClass(input) {
//                 if(this[input].val !== ''){
//                     this[input].isValid = true;
//                 }
//             },
//             validateForm() {
//                 if (this.email.val === '' || this.email.val.includes('@') === false) {
//                     this.email.isValid = false;
//                     this.formIsValid = false;
//                 }
//                 if (this.message.val === '') {
//                     this.message.isValid = false;
//                     this.formIsValid = false;
//                 }
//             },
//             submitForm() {
//                 this.formIsValid = true;
//                 this.validateForm();
//                 if (this.formIsValid === false) {
//                     return;
//                 }
//                 const formData = {
//                     coachId: this.$route.params.id,
//                     email: this.email.val,
//                     message: this.message.val
//                 };
//                 this.$store.dispatch('requests/addRequest', formData);
//                 this.$router.replace('/coaches');
//             }
//         }
//     };