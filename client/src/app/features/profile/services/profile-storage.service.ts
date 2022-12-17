import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../auth/models/user.model";
import {map, tap} from "rxjs/operators";
import {Freelancer} from "../../freelancer/models/freelancer.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileStorageService {
    
    constructor(
        private http: HttpClient
    ) {}
    
    fetchProfileInformation() {
        let token  = localStorage.getItem('authToken')

        if(token && token.includes('"')) {
            //cut the quotes
            token = token.slice(1, token.length - 1)
        }
        
        //return an observable
        return this.http.get<User>('http://localhost:3030/profileData/userInfo').pipe(map((resData) => ({
            email: resData.email,
            id: resData._id,
            token: token
        })))
    }
    
    getFreelancerRegistration(ownerId: string) {
        return this.http.get<Freelancer[]>(`http://localhost:3030/freelancersData/freelancers?where=_ownerId%3D%22${ownerId}%22`)
    }
}
