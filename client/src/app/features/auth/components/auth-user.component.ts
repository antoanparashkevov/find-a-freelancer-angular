import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

//Redux
import { Store } from "@ngrx/store";
import * as fromApp from '../../../store/app.reducer'
import * as AuthActions from "../store/auth.actions";
@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {
    formIsValid: boolean = true;
    mode: string = 'login';
    error: {message: string} | null = null;
    isLoading: boolean = false;
    constructor(
        private authService: AuthService,
        private router: Router,
        private store: Store<fromApp.GlobalAppState>
        ) { }
    
    ngOnInit(): void {
        this.store.select('auth').subscribe(authState=>{
            this.isLoading = authState.loading;
            this.error = null;
            console.log('authError (if it has in onInit auth-user.comp) >>> ', authState.authError)
            console.log('this.error (if it has in onInit auth-user.comp) >>> ', this.error)
            this.error = authState.authError
        })
    }
    
    onSubmit(formRef: NgForm, emailRef: NgModel, passwordRef: NgModel) {
        if(!formRef.valid) {
          this.formIsValid = false
          return;
        } else {
          this.formIsValid = true
        }
        
        const email = formRef.value.email;
        const password = formRef.value.password
        
        if(this.mode === 'login') {
          // authObserver = this.authService.login(email,password)
            this.store.dispatch(new AuthActions.LoginStartRequest({
                email,
                password
            }))
        } else {
            this.store.dispatch(new AuthActions.SignupStartRequest({
                email,
                password
            }))
        }
        
        formRef.reset();
    
    }
    
    handleError() {
      this.error = null
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
