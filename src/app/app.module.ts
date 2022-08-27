import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSmartSpinnerModule } from 'ngx-smart-spinner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSmartSpinnerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
