import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Freelancer} from "../models/freelancer.model";
import {BehaviorSubject, Subject, tap} from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable()
export class FreelancerStorage {
    ownerId = new BehaviorSubject<string | null>(null)
    isFreelancer = new BehaviorSubject<boolean>(false)
    freelancerId = new Subject<string | undefined>()
    url: string = environment.app.default_url
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
        return this.http.get<Freelancer[]>(`${this.url}/freelancersData/freelancers`).pipe(tap((data)=>{
            this.isBecomeAsFreelancer(data)
        }))
    }
    
    storeFreelancer(data: Freelancer) {
        //return an observable
        return this.http.post<Freelancer>(`${this.url}/freelancersData/freelancers`,
            data)
            .pipe(tap((res=>{
                this.freelancerId.next(res._id)
        })))
    }
    
    getIndividualFreelancer(id: string) {
        //return an observable
        return this.http
            .get<Freelancer>(`${this.url}/freelancersData/freelancers/${id}`)
            .pipe(tap({
                next: (res)=> {
                    this.ownerId.next(res._ownerId)
                }
        }))
    }
    
    editIndividualFreelancer(id: string | undefined, data: Freelancer) { 
        return this.http.put<Freelancer>(`${this.url}/freelancersData/freelancers/${id}`,
            data)
            .pipe(tap((res=>{
            this.freelancerId.next(res._id)
        })))
    }
    
    deleteFreelancer(id: string | undefined ) { 
        return this.http.delete(`${this.url}/freelancersData/freelancers/${id}`)
        
    }
    
    private isBecomeAsFreelancer(data: Freelancer[]) {
            
            let userId: string | null = localStorage.getItem('userId')
            if(userId && userId.includes('"')) {
                userId = userId.slice(1, userId.length -1)
            }
            data.forEach(freelancer=>{
            if(freelancer._ownerId === userId) {
                this.isFreelancer.next(true)
            } else {
                this.isFreelancer.next(false)
            }
        })
    }
}