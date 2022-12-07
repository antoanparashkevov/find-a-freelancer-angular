import { Injectable } from '@angular/core';
import { Freelancer } from "../models/freelancer.model";
import {filter} from "rxjs";

@Injectable()
export class FreelancerService {
    //Managing the Freelancers data
    
    //make it private with the accessor private that you can't directly access this property from outside
    private freelancers: Freelancer[] = [
        new Freelancer
        (
            'Antoan',
            'Parashkevov',
            'description',
            12,
            ['type1', 'type2', 'type3'],
            ['Sofia University', 'Softuni'],
            ['Bulgarian', 'English']
        ),
        new Freelancer
        (
            'Nadezhda',
            'Dolashka',
            'description',
            20,
            ['type1', 'type2', 'type3'],
            ['Sofia University'],
            ['Bulgarian', 'Spain']
        )
    ]
    
    getFreelancer(activeFilters?: {[id: string]: boolean}) {
        if(activeFilters) {
            console.log('activeeeeeeee', activeFilters)
            return this.freelancers.filter(freelancer =>  {
                if(activeFilters['type1'] && freelancer.skills.includes('type1')) {
                    return true;
                }
                if(activeFilters['type2'] && freelancer.skills.includes('type2')) {
                    return true;
                }
                if(activeFilters['type3'] && freelancer.skills.includes('type3')) {
                    return true;
                }
                if(activeFilters['type4'] && freelancer.skills.includes('type4')) {
                    return true;
                }
                if(activeFilters['type5'] && freelancer.skills.includes('type5')) {
                    return true;
                }
                return false
            }).slice()
        } else {
            return this.freelancers.slice()
        }
        
        //we make a copy of this array because it is a reference type and we might modify the array from outside. Now we make a copy of this array
    }
    
    getSelectedFreelancer(index: number) {
        return this.freelancers[index]
    }
    
    constructor() { }
}
