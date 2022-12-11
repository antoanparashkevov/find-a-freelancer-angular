import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {
    formIsValid: boolean = true;
    mode: string = 'login';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formRef: NgForm, emailRef: NgModel, passwordRef: NgModel) {
      console.log('Form >>> ', formRef)
      console.log('email >>> ', emailRef)
      console.log('password >>> ', passwordRef)

      if(formRef.form.invalid) {
          this.formIsValid = false
      } else {
          this.formIsValid = true
      }
  }

    switchAuthMode(){
        if(this.mode === 'login'){
            this.mode = 'signup'
        }else{
            this.mode = 'login'
        }
    }

    submitButtonCaption(){
        if(this.mode === 'login'){
            return 'Login'
        }else{
            return 'Signup'
        }
    }
    
    switchModeCaption(){
        if(this.mode === 'login'){
            return 'Signup instead'
        }else {
            return 'Login instead'
        }
    }
    
}
