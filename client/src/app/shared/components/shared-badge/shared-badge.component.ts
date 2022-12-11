import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-badge',
  templateUrl: './shared-badge.component.html',
  styleUrls: ['./shared-badge.component.scss']
})
export class SharedBadgeComponent implements OnInit {
    @Input() type!: string;
    @Input() badge!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
