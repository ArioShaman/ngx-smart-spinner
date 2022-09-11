import {  
  HttpRequest,  
  HttpHandler,  
  HttpEvent,  
  HttpInterceptor  
} from '@angular/common/http';  
import { Injectable } from '@angular/core';

import { map, Observable, delay  } from 'rxjs';
import { NgxSmartSpinnerService } from '../ngx-smart-spinner.service';

@Injectable()  
export class SpinnerModifyInterceptor implements HttpInterceptor {
  constructor(
    private readonly _spinnerService: NgxSmartSpinnerService
  ) {}
  
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const spinnerId = req.headers.get('spinnerId');

    const clonedReq = req.clone({
      headers: req.headers.delete('spinnerId'),
    })

    if (spinnerId) {
      this._spinnerService.startLoading(spinnerId);

      return next.handle(clonedReq)
        .pipe(
          delay(2000),
          map((res) => {
            this._spinnerService.stopLoading(spinnerId);
            return res;
          }));
    }

    return next.handle(clonedReq);
  }  
}  