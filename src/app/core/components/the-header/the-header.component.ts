import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.scss']
})
export class TheHeaderComponent implements OnInit {
    //TODO make it dynamic
    isAuthenticated: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
