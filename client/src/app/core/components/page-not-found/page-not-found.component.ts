import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
    errorMsg: Data | string = ''
    constructor(private currentRouter: ActivatedRoute) { }

    ngOnInit(): void {
      this.currentRouter.data.subscribe(
          (data: Data)=>{
              this.errorMsg = data['message']
          }
      )
    }

}
