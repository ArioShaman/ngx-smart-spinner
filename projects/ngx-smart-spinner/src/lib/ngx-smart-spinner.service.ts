import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxSmartSpinnerService {
  private _spinners = new Map<string, BehaviorSubject<boolean>>();

  constructor() { }

  public registerSpinner(id: string): void {
    if (!this._spinners.has(id)) {
      this._spinners.set(id, this._createSpinnerSubject());
    }
  }

  public removeSpinner(id: string): void {
    if (this._spinners.has(id)) {
      const spinnerSubject = this._spinners.get(id);
      spinnerSubject?.next(false);
      spinnerSubject?.complete();
      spinnerSubject?.unsubscribe();

      this._spinners.delete(id);
    }
  }

  public getIsLoadingSpinner(id: string): Observable<boolean> {
    const spinnerSubject = this._spinners.get(id);

    if (spinnerSubject) {
      return spinnerSubject.asObservable();
    } else {
      return of(false);
    } 
  }

  public startLoading(id: string): void {
    const spinnerSubject = this._spinners.get(id);
    if (spinnerSubject) {
      spinnerSubject.next(true);
    }
  }

  public stopLoading(id: string): void {
    const spinnerSubject = this._spinners.get(id);
    
    if (spinnerSubject) {
      spinnerSubject.next(false);
    }
  }

  private _createSpinnerSubject(): BehaviorSubject<boolean> {
    return new BehaviorSubject<boolean>(false);
  } 
}
