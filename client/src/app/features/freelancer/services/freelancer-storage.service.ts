import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Freelancer} from "../models/freelancer.model";

@Injectable()
export class FreelancerStorage {
    constructor(private http: HttpClient) {}
    
    fetchFreelancers() {
        //return an observable
        return this.http.get<Freelancer[]>('http://localhost:3030/freelancersData/freelancers')
    }
    
    storeFreelancer(data: Freelancer) {
        return this.http.post<Freelancer>('http://localhost:3030/freelancersData/freelancers',
            data)
    }
}