import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBadgeComponent } from './components/shared-badge/shared-badge.component';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { SharedDialogComponent } from './components/shared-dialog/shared-dialog.component';
import { SharedSpinnerComponent } from './components/shared-spinner/shared-spinner.component';



@NgModule({
  declarations: [
    SharedBadgeComponent,
    SharedButtonComponent,
    SharedCardComponent,
    SharedDialogComponent,
    SharedSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
