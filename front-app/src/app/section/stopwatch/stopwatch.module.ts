import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { StopwatchComponent } from './stopwatch.component';



@NgModule({
  declarations: [
    ButtonComponent, TimeDisplayComponent, StopwatchComponent
  ],
  exports: [
    ButtonComponent, TimeDisplayComponent, StopwatchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StopwatchModule { }
