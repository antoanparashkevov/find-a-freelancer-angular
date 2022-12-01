import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TheHeaderComponent } from './the-header/the-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TheHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
