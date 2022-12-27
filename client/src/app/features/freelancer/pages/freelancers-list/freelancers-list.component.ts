import {Component, OnDestroy, OnInit} from '@angular/core';
import { Freelancer } from "../../models/freelancer.model";
import {FreelancerService} from "../../services/freelancer.service";
import {FreelancerStorage} from "../../services/freelancer-storage.service";
import {AuthService} from "../../../auth/services/auth.service";
import {LoaderService} from "../../services/loader.service";
import {Observable, Subscription} from "rxjs";

//Redux
import { Store } from "@ngrx/store";
import * as fromApp from '../../../../store/app.reducer'
import {map} from "rxjs/operators";
@Component({
  selector: 'app-freelancers-list',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.scss']
})
export class FreelancersListComponent implements OnInit, OnDestroy {
    freelancers: Freelancer[] = []
    freelancersFromRedux!: Observable<{ freelancers: Freelancer[] }>
    isAuthenticated: boolean = false
    skills: {[id: string] : boolean} = {}
    isAuthenticatedSubscription!: Subscription
    error: {message: string} | null = null;
    
    constructor(
        private freelancerService: FreelancerService,
        public freelancerStorage: FreelancerStorage,
        private authService: AuthService,
        public loaderService: LoaderService,
        private store: Store<fromApp.GlobalAppState>
    ) { }

    ngOnInit()  {
        this.freelancersFromRedux = this.store.select('freelancers')
        this.freelancersFromRedux.subscribe({
            next: value=>{
                console.log('from ngRx >>>', value.freelancers)
            }
        })
        this.skills = this.freelancerStorage.fetchAreas().reduce((a,v)=>({...a, [v]: true}), {})
        
        this.fetchFreelancers()
        this.isUserAuthenticated()
    }
    
    ngOnDestroy() {
        this.isAuthenticatedSubscription.unsubscribe()
    }

    private isUserAuthenticated() {
       // this.isAuthenticatedSubscription = this.authService.user.subscribe((user) => {
            this.isAuthenticatedSubscription = this.store.select('auth')
                .pipe(
                    map(authState=>authState.user)
                )
                .subscribe((user)=>{
                    this.isAuthenticated = !!user;//if it has a user data, to return boolean, not the actual user data
                })
    }
    
    fetchFreelancers() {
        this.freelancerStorage.fetchFreelancers().subscribe({
            next: (data)=> {
                if(data) {
                    this.freelancers = data;
                }
            },
            error: (err)=> {
                this.error = err.error
            }
        })
    }
    
    newFilterCriteria(newFilters:{[id: string]: boolean}) {
        this.freelancerStorage.fetchFreelancers().subscribe(res=>{
            this.freelancers = res
            
            this.freelancers = this.freelancers.filter(freelancer =>  {
                if(newFilters['frontend'] && freelancer.skills.includes('frontend')) {
                    return true;
                }
                if(newFilters['backend'] && freelancer.skills.includes('backend')) {
                    return true;
                }
                if(newFilters['devops'] && freelancer.skills.includes('devops')) {
                    return true;
                }
                if(newFilters['pm'] && freelancer.skills.includes('pm')) {
                    return true;
                }
                if(newFilters['qa'] && freelancer.skills.includes('qa')) {
                    return true;
                }
                return false
            })
        })
    }
    hasFreelancers() {
        return this.freelancers && this.freelancers.length > 0;
    }
    handleError() {
        this.error = null
    }
}
