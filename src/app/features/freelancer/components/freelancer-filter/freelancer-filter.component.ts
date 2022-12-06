import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-freelancer-filter',
  templateUrl: './freelancer-filter.component.html',
  styleUrls: ['./freelancer-filter.component.scss']
})
export class FreelancerFilterComponent implements OnInit {
    @Input('activeSkills') skills!: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
