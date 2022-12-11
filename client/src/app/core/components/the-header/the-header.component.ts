import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from "../../../features/auth/services/auth.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.scss']
})
export class TheHeaderComponent implements OnInit, OnDestroy {
    isAuthenticated: boolean = false;
    // private userSub: Subscription;


    constructor(private authService: AuthService) { }

  ngOnInit(): void {
        // this.userSub = this.authService.user.subscribe({
        //     next: (user)=> {
        //         this.isAuthenticated = !!user;
        //     }
        // })
  }
  
  ngOnDestroy(): void {
  //       this.userSub.unsubscribe()
  }

}
