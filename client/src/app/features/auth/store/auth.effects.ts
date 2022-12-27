import { Actions, Effect, ofType } from "@ngrx/effects";//previously, we imported Action from ngrx/store, but now this is a plural
import * as AuthActions from './auth.actions'
import { catchError, map, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

export interface AuthResponseData {
    accessToken: string;
    email: string;
    _id: string;
}

@Injectable()
export class AuthEffects {
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
                        return of(new AuthActions.Login({
                            //return a new action/new observable. This automatically dispatches by ngRx effects
                            email: resData.email,
                            id: resData._id,
                            token: resData.accessToken
                        }))
                    }),
                    catchError(( error )=>{
                    //todo error handling
                        console.log('it has an error during login process', error)
                    return of()//to create a non-error observable
                    //!!Now return an empty observable since we don't have a proper error handling!!
                }))
        }) 
        )
    constructor(
        private actions$: Actions,
        private http: HttpClient) {
    }
}