import { Component, OnInit } from '@angular/core';
import { Freelancer } from "../../models/freelancer.model";

@Component({
  selector: 'app-freelancers-list',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.scss']
})
export class FreelancersListComponent implements OnInit {
    freelancers: Freelancer[] = [
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
    
    constructor() { }

    ngOnInit(): void {
    }

}
