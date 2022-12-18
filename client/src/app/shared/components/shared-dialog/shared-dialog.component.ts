import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss']
})
export class SharedDialogComponent implements OnInit {
    @Input() title: string = 'Something wen wrong';
    @Input() fixed: boolean = false
    @Input() show: boolean = true
    @Input() bothActions: boolean = false
    @Output('close') close = new EventEmitter<boolean>()
    
    @Output('delete') deleteFreelancer = new EventEmitter<boolean>()

    constructor() {
    }

    ngOnInit(): void {
    }

    tryClose() {
        if (this.fixed) {
            return;
        }
        this.close.emit(this.show = false)
    }
    
    handleAction() {
        if(this.fixed) {
            return;
        }
        this.deleteFreelancer.emit(true)
    }
    
}