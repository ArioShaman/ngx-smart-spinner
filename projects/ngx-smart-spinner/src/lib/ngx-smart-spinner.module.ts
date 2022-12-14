import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSmartSpinnerComponent } from './ngx-smart-spinner.component';
import { NgxSmartSpinnerService } from './ngx-smart-spinner.service';
import { SpinnerModifyInterceptor } from './interceptors/spinner-modify.interceptor';
import { NGX_SMART_SPINNER_CONFIG, MODULE_CONFIG } from './consts';

@NgModule({
  declarations: [
    NgxSmartSpinnerComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxSmartSpinnerComponent
  ],
})
export class NgxSmartSpinnerModule {
  static forRoot(config = NGX_SMART_SPINNER_CONFIG): ModuleWithProviders<NgxSmartSpinnerModule> {
    return {
      ngModule: NgxSmartSpinnerModule,
      providers: [
        NgxSmartSpinnerService,
        {  
          provide: HTTP_INTERCEPTORS,  
          useClass: SpinnerModifyInterceptor,  
          multi: true,
        },
        {
          provide: MODULE_CONFIG,
          useValue: config,
        },
      ]
    };
  }
}
