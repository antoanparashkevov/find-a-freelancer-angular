import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {map, take} from "rxjs/operators";
import {AuthService} from "./services/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.user.pipe(
            take(1),//this subject can emit data more than once, with this operator we will listen to the last emitted data
            map(user => {
            const isAuth =  !!user;//to convert it to boolean
            if(isAuth) {
                return true;
            } 
            return this.router.createUrlTree(['/auth'])
        }))
    }
}