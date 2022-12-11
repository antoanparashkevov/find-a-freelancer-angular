import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {Observable} from "rxjs";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {
    formIsValid: boolean = true;
    mode: string = 'login';
    error: string | null = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formRef: NgForm, emailRef: NgModel, passwordRef: NgModel) {
      if(!formRef.valid) {
          this.formIsValid = false
          return;
      } else {
          this.formIsValid = true
      }
      
      console.log('Form >>> ', formRef)
      // console.log('email >>> ', emailRef)
      // console.log('password >>> ', passwordRef)
      
      const email = formRef.value.email;
      const password = formRef.value.password
      
      console.log('email >>> ', email)
      console.log('password >>> ', password)
      
      //TODO auth response data as interface
      let authObserver: Observable<any>;
      
      if(this.mode === 'login') {
          authObserver = this.authService.login(email,password)
      } else {
          authObserver = this.authService.register(email,password)
      }
      
      authObserver.subscribe({
        next: (resData) => {
            console.log('resData from Login/Register >>> ', resData )
            this.router.navigate(['/freelancers']);
        },
        error: (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
        }
      })

      formRef.reset();
     
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
