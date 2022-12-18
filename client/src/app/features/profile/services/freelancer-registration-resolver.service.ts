import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Freelancer} from "../../freelancer/models/freelancer.model";
import {Observable} from "rxjs";
import {FreelancerStorage} from "../../freelancer/services/freelancer-storage.service";
import {Injectable} from "@angular/core";
import {map, tap} from "rxjs/operators";

@Injectable()
export class FreelancerRegistrationResolver implements Resolve<Freelancer> {
    
    constructor(private freelancerStorage: FreelancerStorage) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Freelancer> | Promise<Freelancer> | Freelancer  {
        let id = route.params['id'];
        //or with tap operator
        return this.freelancerStorage.getIndividualFreelancer(id).pipe(map(
            (data: Freelancer)=>{
                    return data
            }
        ))
    }
}