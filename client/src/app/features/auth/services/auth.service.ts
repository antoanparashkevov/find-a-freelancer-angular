import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { tap } from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "../../../../environments/environment";

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
    url: string = environment.app.default_url
    constructor(private http: HttpClient, private router: Router) { }

    register(email: string, password: string) {
      //will return an observable
        return this.http
            .post<AuthResponseData>(
                `${this.url}/users/register`,
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
                `${this.url}/users/login`,
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
        //converts to JSON string object
        localStorage.setItem('email', JSON.stringify(email))
        localStorage.setItem('authToken', JSON.stringify(user.token))
        localStorage.setItem('userId', JSON.stringify(user._id))
    }
    
    autoLogin() {
      if(localStorage.length > 0) {
                let email: string = JSON.parse(localStorage.getItem('email') || '')
                let authToken: string = JSON.parse(localStorage.getItem('authToken') || '')
                let userId: string = JSON.parse(localStorage.getItem('userId') || '')
                
                if(!email || !authToken || !userId) {
                    return;
                }
                
                const loadedUser = new User(email, userId, authToken)
                
                if(loadedUser.token) {
                  this.user.next(loadedUser)
                }
            }
      }

        
    
    logout() {
        this.http.get(`${this.url}/users/logout`).subscribe(res=>{
            console.log('Response from logging out >>> ', res)
        })
        
        this.user.next(null)
        
        this.router.navigate(['/auth'])
        
        localStorage.removeItem('email')
        localStorage.removeItem('authToken')
        localStorage.removeItem('userId')
       
    }
}
