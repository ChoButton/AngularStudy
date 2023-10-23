import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './section/stopwatch/button/button.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/stopwatch/time-display/time-display.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
