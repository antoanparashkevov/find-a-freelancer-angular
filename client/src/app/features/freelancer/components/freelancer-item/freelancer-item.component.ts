import {Component, Input, OnInit} from '@angular/core';
import {Freelancer} from "../../models/freelancer.model";

@Component({
  selector: 'app-freelancer-item',
  templateUrl: './freelancer-item.component.html',
  styleUrls: ['./freelancer-item.component.scss']
})
export class FreelancerItemComponent implements OnInit {
    @Input() firstName!: string;
    @Input() lastName!: string;
    @Input() description!: string;
    @Input() hourlyRate!: number;
    @Input() skills!: string[];
    @Input('i') index!: string | undefined
    
    @Input() profileAction: boolean = false
    
  constructor() { }

  ngOnInit(): void {
  }

}
