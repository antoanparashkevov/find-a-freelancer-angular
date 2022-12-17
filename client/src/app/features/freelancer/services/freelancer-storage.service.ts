import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Freelancer} from "../models/freelancer.model";
import {BehaviorSubject, tap} from "rxjs";

@Injectable()
export class FreelancerStorage {
    ownerId = new BehaviorSubject<string | null>(null)
    isFreelancer = new BehaviorSubject<boolean>(true)
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
        return this.http.get<Freelancer[]>('http://localhost:3030/freelancersData/freelancers').pipe(tap((data)=>{
            this.isBecomeAsFreelancer(data)
        }))
    }
    
    storeFreelancer(data: Freelancer) {
        //return an observable
        return this.http.post<Freelancer>('http://localhost:3030/freelancersData/freelancers',
            data)
    }
    
    getIndividualFreelancer(id: string) {
        //return an observable
        return this.http
            .get<Freelancer>('http://localhost:3030/freelancersData/freelancers/' + id)
            .pipe(tap({
                next: (res)=> {
                    this.ownerId.next(res._ownerId)
                }
        }))
    }
    
    private isBecomeAsFreelancer(data: Freelancer[]) {
            
            let userId: string | null = localStorage.getItem('userId')
            if(userId && userId.includes('"')) {
                userId = userId.slice(1, userId.length -1)
            }
            data.forEach(freelancer=>{
                console.log('here1')
            if(freelancer._ownerId === userId) {
                console.log('here2')
                this.isFreelancer.next(true)
            } else {
                console.log('here3')
                this.isFreelancer.next(false)
            }
        })
    }
}