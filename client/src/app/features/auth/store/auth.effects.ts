import { Actions, Effect, ofType } from "@ngrx/effects";//previously, we imported Action from ngrx/store, but now this is a plural
import * as AuthActions from './auth.actions'
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface AuthResponseData {
    accessToken: string;
    email: string;
    _id: string;
}

const handleAuthentication  = (email: string, _id: string, accessToken: string) => {

    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('authToken', JSON.stringify(accessToken))
    localStorage.setItem('userId', JSON.stringify(_id))
    
    return new AuthActions.AuthenticateSuccess({
        //return a new action/new observable. This automatically dispatches by ngRx effects
        email: email,
        id: _id,
        token: accessToken
    })
}

const handleLogout = () => {
}

const handleError = (error: any) => {
    return of(new AuthActions.AuthenticateFail({message: error.error.message}))//to create a non-error observable

}

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .pipe(
            ofType(AuthActions.SIGNUP_START),
            switchMap( (authData: AuthActions.SignupStartRequest) => {
                return this.http
                    .post<AuthResponseData>(
                        'http://localhost:3030/users/register',
                        {
                            email: authData.payload.email,
                            password: authData.payload.password,
                        }
                        //tap is an operator that allows us to perform some actions without changing the response
                    ).pipe(
                        map( (resData) => {
                           return handleAuthentication(resData.email, resData._id, resData.accessToken)
                        }),
                        catchError((error)=>{
                            console.log('it has an error during signup process (inside AuthEffects) >>> ', error)
                            return handleError(error)
                            //!!Now return an empty observable since we don't have a proper error handling!!
                        })
                    )
            })
        )
    @Effect()
    authLogin = this.actions$
        .pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStartRequest) => {
            return this.http
                .post<AuthResponseData>(
                    'http://localhost:3030/users/login',
                    {
                        email: authData.payload.email,
                        password: authData.payload.password,
                    }
                ).pipe(
                    map(resData=>{
                        return handleAuthentication(resData.email, resData._id, resData.accessToken)
                    }),
                    catchError(( error )=>{
                    console.log('it has an error during login process (inside AuthEffects) >>> ', error)
                    return handleError(error)
                    //!!Now return an empty observable since we don't have a proper error handling!!
                }))
        }) 
        )
    
    @Effect()
    authLogout = this.actions$
        .pipe(
            ofType(AuthActions.LOGOUT),
            switchMap((authData: AuthActions.LogoutRequest)=> {
                return this.http.get('http://localhost:3030/users/logout')
                    .pipe(
                        map(resData=>{
                            console.log('resData from logging out >>> ', resData)
                            return handleLogout()
                        }),
                        catchError( (error) => {
                            return handleError(error)
                        })
                        )
            })
            
        )
    
    @Effect({dispatch: false})
    authRedirect = this.actions$
        .pipe(
            ofType(AuthActions.AUTHENTICATE_SUCCESS, AuthActions.LOGOUT),
            tap(()=>{
        this.router.navigate(['/freelancers'])
    }))
    
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router
    ) {
    }
}