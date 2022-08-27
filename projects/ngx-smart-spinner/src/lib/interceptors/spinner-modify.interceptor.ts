import {  
  HttpRequest,  
  HttpHandler,  
  HttpEvent,  
  HttpInterceptor  
} from '@angular/common/http';  
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()  
export class SpinnerModifyInterceptor implements HttpInterceptor {
  constructor() {} 
  
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('do something');

    return next.handle(request);  
  }  
}  