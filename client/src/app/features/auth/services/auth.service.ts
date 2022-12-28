import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import * as fromApp from '../../../store/app.reducer'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //the Subject is like a custom event emitter. It is more recommended
  // user = new BehaviorSubject<User | null>(null)
    
  constructor() { }
    //todo manage autoLogin inside ngRx store
    // autoLogin() {
    //     if (localStorage.length > 0) {
    //         let email: string = JSON.parse( localStorage.getItem( 'email' ) || '' )
    //         let authToken: string = JSON.parse( localStorage.getItem( 'authToken' ) || '' )
    //         let userId: string = JSON.parse( localStorage.getItem( 'userId' ) || '' )
    //
    //         if (!email || !authToken || !userId) {
    //             return;
    //         }
    //
    //         const loadedUser = new User( email, userId, authToken )
    //
    //         if (loadedUser.token) {
    //             // this.user.next(loadedUser)//besides Subjects, we will use ngRx
    //             this.store.dispatch( new AuthActions.AuthenticateSuccess(
    //                 {
    //                     email: loadedUser.email,
    //                     id: loadedUser._id,
    //                     token: loadedUser.token
    //                 } ) )
    //         }
    //     }
    // }
}
