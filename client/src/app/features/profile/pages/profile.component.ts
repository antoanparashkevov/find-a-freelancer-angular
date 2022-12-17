import { Component, OnInit } from '@angular/core';
import {Freelancer} from "../../freelancer/models/freelancer.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    email: string = 'example@gmail.com'
    freelancer: Freelancer =
        new Freelancer
        (
            'Antoan',
            'Parashkevov',
            'description',
            12,
            ['frontend', 'backend', 'pm'],
            '12312312321312',
            '132123321132312'
        )
    
  constructor() { }

  ngOnInit(): void {
  }

}
