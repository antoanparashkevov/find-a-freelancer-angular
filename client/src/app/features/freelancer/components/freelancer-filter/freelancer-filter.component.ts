import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {filter} from "rxjs";
import {FreelancerStorage} from "../../services/freelancer-storage.service";

@Component({
  selector: 'app-freelancer-filter',
  templateUrl: './freelancer-filter.component.html',
  styleUrls: ['./freelancer-filter.component.scss']
})
export class FreelancerFilterComponent implements OnInit {
        skills: {[id: string] : boolean} = {}
            
        @Output() changeFilter = new EventEmitter<{[id: string]: boolean}> ()
    
        constructor(private freelancerStorage: FreelancerStorage) { }
        
        ngOnInit(): void {
            this.skills = this.freelancerStorage.fetchAreas().reduce((a,v)=>({...a, [v]: true}), {})
        }
        
        setFilter(ev: Event) {
            //the change event is triggered whenever the checked property for example changes from true to false and from false to true
            
            const target = ev.target as HTMLInputElement
            const filterId = target.id;
            const isChecked = target.checked
            
            const updatedFilter = {
                ...this.skills,
                [filterId]: isChecked
            }
            this.skills = updatedFilter
            
            //emit the updatedFilters to the Parent Component (freelancers-list.component)
            this.changeFilter.emit(updatedFilter)
        }

}
