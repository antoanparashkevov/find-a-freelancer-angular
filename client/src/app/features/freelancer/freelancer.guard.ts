import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {FreelancerStorage} from "./services/freelancer-storage.service";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FreelancerGuard implements CanActivate {
    constructor(private freelancerStorage: FreelancerStorage,private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let toReturn: boolean = false
        this.freelancerStorage.isFreelancer.subscribe(val=>{
                console.log('isFreelancer', val)
                toReturn = !val
        })
        return toReturn ? toReturn : this.router.createUrlTree(['/freelancers'])
    }
}