import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
    @Output() delete = new EventEmitter<boolean>()
    
  constructor() { }

  ngOnInit(): void {
  }
  
  deleteFreelancer() {
        this.delete.emit(true)
  }

}
