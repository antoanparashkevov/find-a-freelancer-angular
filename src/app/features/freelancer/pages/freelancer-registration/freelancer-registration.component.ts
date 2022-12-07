import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-registration',
  templateUrl: './freelancer-registration.component.html',
  styleUrls: ['./freelancer-registration.component.scss']
})

export class FreelancerRegistrationComponent implements OnInit { 
    
    ngOnInit() {
    }
    
    saveData(data: boolean) {
        console.log('checkboxIsValid', data)
    }
}

