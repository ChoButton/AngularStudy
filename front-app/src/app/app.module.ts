import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './section/button/button.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SectionComponent,
    FooterComponent,
    HeaderComponent,
    TimeDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
