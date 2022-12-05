import { Component, OnInit } from '@angular/core';
import {Freelancer} from "../../models/freelancer.model";

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
            ['js', 'nodejs', 'angular'], 
            ['Sofia University', 'Softuni'], 
            ['Bulgarian', 'English']
        ),
        new Freelancer
        (
            'Nadezhda',
            'Dolashka',
            'description',
            20,
            ['art', 'design', 'book'],
            ['Sofia University'],
            ['Bulgarian', 'Spain']
        )
    ]
    
    constructor() { }

    ngOnInit(): void {
    }

}
