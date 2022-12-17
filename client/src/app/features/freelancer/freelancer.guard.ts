import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {FreelancerStorage} from "./services/freelancer-storage.service";
import {Injectable} from "@angular/core";
import {map, take} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FreelancerGuard implements CanActivate {
    constructor(
        private freelancerStorage: FreelancerStorage,
        private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return this.freelancerStorage.isFreelancer.pipe(
                take(1),
                map(val=>{
                    const isFreelancer = !val
                    if(isFreelancer) {
                        return true
                    }
                    return this.router.createUrlTree(['/freelancers'])
                }))
    }
}