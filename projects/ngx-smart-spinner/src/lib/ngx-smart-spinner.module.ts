import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerModifyInterceptor } from './interceptors/spinner-modify.interceptor';

import { NgxSmartSpinnerComponent } from './ngx-smart-spinner.component';
import { NgxSmartSpinnerService } from './ngx-smart-spinner.service';


@NgModule({
  declarations: [
    NgxSmartSpinnerComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxSmartSpinnerComponent
  ]
})
export class NgxSmartSpinnerModule {
  static forRoot(config: any = {}): ModuleWithProviders<NgxSmartSpinnerModule> {
    return {
      ngModule: NgxSmartSpinnerModule,
      providers: [
        NgxSmartSpinnerService,
        {  
          provide: HTTP_INTERCEPTORS,  
          useClass: SpinnerModifyInterceptor,  
          multi: true  
        }  
      ]
    };
  }
}
