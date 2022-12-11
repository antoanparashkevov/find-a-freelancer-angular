import {Component, Input, OnInit} from '@angular/core';
import {Freelancer} from "../../models/freelancer.model";

@Component({
  selector: 'app-freelancer-item',
  templateUrl: './freelancer-item.component.html',
  styleUrls: ['./freelancer-item.component.scss']
})
export class FreelancerItemComponent implements OnInit {
    @Input() freelancer!: Freelancer;
    @Input('i') index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
