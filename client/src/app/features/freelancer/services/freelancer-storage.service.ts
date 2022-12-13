import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Freelancer} from "../models/freelancer.model";

@Injectable()
export class FreelancerStorage {
    constructor(private http: HttpClient) {}
    private skills: string[] = [
        'frontend',
        'backend',
        'devops',
        'pm',
        'qa'
    ]
    
    fetchAreas() {
        return this.skills.slice();//shallow copy, not the reference, because array is reference type of data
    }
    
    fetchFreelancers() {
        //return an observable
        return this.http.get<Freelancer[]>('http://localhost:3030/freelancersData/freelancers')
    }
    
    storeFreelancer(data: Freelancer) {
        //return an observable
        return this.http.post<Freelancer>('http://localhost:3030/freelancersData/freelancers',
            data)
    }
    
    getIndividualFreelancer(id: string) {
        //return an observable
        return this.http.get<Freelancer>('http://localhost:3030/freelancersData/freelancers/' + id)
    }
}