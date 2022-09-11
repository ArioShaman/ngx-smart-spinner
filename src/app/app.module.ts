import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { NgxSmartSpinnerModule, INgxSmartSpinnerModuleConfig } from 'ngx-smart-spinner';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

const ngxSmartSpinnerCont: INgxSmartSpinnerModuleConfig = {
  spinnerUrl: '../assets/icons/spinner.svg',
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSmartSpinnerModule.forRoot(
      ngxSmartSpinnerCont,
    ),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
