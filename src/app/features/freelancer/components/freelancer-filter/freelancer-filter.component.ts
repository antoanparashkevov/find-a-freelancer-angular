import {Component, Input, OnInit} from '@angular/core';
import {filter} from "rxjs";

@Component({
  selector: 'app-freelancer-filter',
  templateUrl: './freelancer-filter.component.html',
  styleUrls: ['./freelancer-filter.component.scss']
})
export class FreelancerFilterComponent implements OnInit {
        skills: {[id: string] : boolean} = {
                type1: true,
                type2: true,
                type3: true,
                type4: true,
                type5: true,
            }
    
        constructor() { }
        
        ngOnInit(): void {
        }
        
        setFilter(ev: Event) {
            //the change event is triggered whenever the checked property for example changes from true to false and from false to true
            
            //TODO to remove logs
            console.log('triggered!')
            const target = ev.target as HTMLInputElement
            const filterId = target.id;
            console.log('id >>', target.id)
            const isChecked = target.checked
            console.log('is checked >>> ',target.checked)
            
            const updatedFilter = {
                ...this.skills,
                [filterId]: isChecked
            }
            console.log(updatedFilter)
        }

}
