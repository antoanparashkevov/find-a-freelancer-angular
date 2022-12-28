import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { tap } from 'rxjs/operators';
import {User} from "../models/user.model";
import {Store} from "@ngrx/store";
import * as fromApp from '../../../store/app.reducer'
import * as AuthActions from "../store/auth.actions";

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
  // user = new BehaviorSubject<User | null>(null)
    
  constructor(
      private http: HttpClient, 
      private router: Router,
      private store: Store<fromApp.GlobalAppState>
      ) { }
    
    autoLogin() {
        if (localStorage.length > 0) {
            let email: string = JSON.parse( localStorage.getItem( 'email' ) || '' )
            let authToken: string = JSON.parse( localStorage.getItem( 'authToken' ) || '' )
            let userId: string = JSON.parse( localStorage.getItem( 'userId' ) || '' )

            if (!email || !authToken || !userId) {
                return;
            }

            const loadedUser = new User( email, userId, authToken )

            if (loadedUser.token) {
                // this.user.next(loadedUser)//besides Subjects, we will use ngRx
                this.store.dispatch( new AuthActions.AuthenticateSuccess(
                    {
                        email: loadedUser.email,
                        id: loadedUser._id,
                        token: loadedUser.token
                    } ) )
            }
        }
    }
    
    logout() {
        
        
        // this.user.next(null)//besides Subjects, we will use ngRx
        this.store.dispatch(new AuthActions.LogoutRequest(null))
        // this.router.navigate(['/auth'])
        
        localStorage.removeItem('email')
        localStorage.removeItem('authToken')
        localStorage.removeItem('userId')
       
    }
}
