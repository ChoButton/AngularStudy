import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@NgModule({
  declarations: [
    ButtonComponent, TimeDisplayComponent, StopwatchComponent
  ],
  exports: [
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    PageToggleService
  ]
})
export class StopwatchModule { }
