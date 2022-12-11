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
    @Output('close') close = new EventEmitter<boolean>()

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
}