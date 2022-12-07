import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-freelancer-details',
  templateUrl: './freelancer-details.component.html',
  styleUrls: ['./freelancer-details.component.scss']
})
export class FreelancerDetailsComponent implements OnInit {
    
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      console.log('User id >>> ', this.route.snapshot.params['id'])
  }

}
