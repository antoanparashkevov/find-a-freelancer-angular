import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-freelancer-filter',
  templateUrl: './freelancer-filter.component.html',
  styleUrls: ['./freelancer-filter.component.scss']
})
export class FreelancerFilterComponent implements OnInit {
        skills: string[] = [
            'type1',
            'type2',
            'type3',
            'type4',
            'type5',
        ]
    
        constructor() { }
        
        ngOnInit(): void {
        }

}
