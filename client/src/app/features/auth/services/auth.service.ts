import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { catchError, tap } from 'rxjs/operators';
import {BehaviorSubject, Subject} from "rxjs";
import {User} from "../user.model";

export interface AuthResponseData {
    accessToken: string;
    email: string;
    _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //the Subject is like a custom event emitter. It is more recommended
  user = new BehaviorSubject<User | null>(null)
    
  constructor(private http: HttpClient) { }

    register(email: string, password: string) {
      //will return an observable
        return this.http
            .post<AuthResponseData>(
                'http://localhost:3030/users/register',
                {
                    email: email,
                    password: password,
                }
                //tap is an operator that allows us to perform some actions without changing the response
            ).pipe(tap({
                next: (resData) => {
                    this.handleAuthentication(resData.email, resData._id, resData.accessToken)
                }
            }))
    }

    login(email: string, password: string) {
        //will return an observable
        return this.http
            .post<AuthResponseData>(
                'http://localhost:3030/users/login',
                {
                    email: email,
                    password: password,
                }
            ).pipe(tap({
                next: (resData) => {
                    this.handleAuthentication(resData.email, resData._id, resData.accessToken)
                }
            }))
    }
    
    private handleAuthentication(email: string, _id: string, token: string) {
        const user = new User(email, _id, token)
        this.user.next(user)//emit this user
        localStorage.setItem('userData', JSON.stringify(user))//converts to JSON string object
    }
    
    autoLogin() {
        let userData:  {
                email: string,
                _id: string,
                token: string
        } = JSON.parse(localStorage.getItem('userData') || "{}")//convert it back to js Object

        if(!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData._id, userData.token)

        if(loadedUser.token) {
            this.user.next(loadedUser)
        }
    }
    
    logout() {
        this.user.next(null)
        localStorage.removeItem('userData')
    }
}
