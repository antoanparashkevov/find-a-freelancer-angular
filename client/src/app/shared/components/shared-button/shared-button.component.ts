import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {
    public buttonText: string = 'Example'
    
    @Input('to') location: string | number | undefined = '/freelancers'
    @Input('mode') currentMode: string = 'outline'
    @Input('link') isLink: boolean = false;
    @Input() set text(name: string) {
        this.buttonText = name
    }
    @Input('disabled') isDisabled: boolean | null = false
    
  constructor() { }

  ngOnInit(): void {
  }

}
