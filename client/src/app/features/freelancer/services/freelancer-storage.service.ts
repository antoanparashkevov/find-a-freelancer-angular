import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Freelancer} from "../models/freelancer.model";
import {BehaviorSubject, Subject, tap} from "rxjs";
import {Store} from "@ngrx/store";
import * as FreelancerActions from "../store/freelancers.actions";
@Injectable()
export class FreelancerStorage {
    ownerId = new BehaviorSubject<string | null>(null)
    isFreelancer = new BehaviorSubject<boolean>(false)
    freelancerId = new Subject<string | undefined>()
    constructor(
        private http: HttpClient,
        private store: Store<{ freelancers: {freelancers: Freelancer[]} }>
    ) {}
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
            .pipe(tap((res=>{
                this.freelancerId.next(res._id)
        })))
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
    
    editIndividualFreelancer(id: string | undefined, data: Freelancer) {
        
        this.store.dispatch(new FreelancerActions.EditFreelancer({index: id, freelancer: data}))
        
        return this.http.put<Freelancer>('http://localhost:3030/freelancersData/freelancers/' + id,
            data)
            .pipe(tap((res=>{
            this.freelancerId.next(res._id)
        })))
    }
    
    deleteFreelancer(id: string | undefined ) { 
        this.store.dispatch(new FreelancerActions.DeleteFreelancer(id))
        return this.http.delete('http://localhost:3030/freelancersData/freelancers/' + id)
        
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