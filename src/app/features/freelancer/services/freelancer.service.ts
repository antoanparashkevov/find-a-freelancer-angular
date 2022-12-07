import { Injectable } from '@angular/core';
import { Freelancer } from "../models/freelancer.model";

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
    
    getFreelancer() {
        return this.freelancers.slice()
        //we make a copy of this array because it is a reference type and we might modify the array from outside. Now we make a copy of this array
    }
    
    constructor() { }
}
