import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from "../../../features/auth/services/auth.service";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";

//Redux
import {Store} from "@ngrx/store";
import * as fromApp from '../../../store/app.reducer'
import * as AuthActions from '../../../features/auth/store/auth.actions'

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.scss']
})
export class TheHeaderComponent implements OnInit, OnDestroy {
    private userSub!: Subscription;
    isAuthenticated: boolean = false;
    activeClass: boolean = false

    constructor(
        private authService: AuthService,
        private store: Store<fromApp.GlobalAppState>
        ) { }

    ngOnInit(): void {
        // this.userSub = this.authService.user.subscribe({
            this.userSub = this.store.select('auth')
                .pipe(map(authState=>authState.user))
                .subscribe({
            next: (user)=> {
                this.isAuthenticated = !!user;//if it has a user data, to return boolean, not the actual user data
            }
        })
    }
  
    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
    
    onLogout() {
        // this.authService.logout()
        this.store.dispatch(new AuthActions.LogoutRequest())
    }
    
    toggleNavbar() {
        this.activeClass = !this.activeClass
    }

}
