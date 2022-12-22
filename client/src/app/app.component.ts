import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { slider } from './router-animation'
import {AuthService} from "./features/auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
        slider
    ]
})
export class AppComponent implements OnInit{

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.autoLogin()
    }
    
    prepareRoute(outlet: RouterOutlet) {
        console.log('outlet template reference >>> ', outlet)
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
        
    }
}
