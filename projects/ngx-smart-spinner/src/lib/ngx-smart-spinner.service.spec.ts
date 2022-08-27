import { TestBed } from '@angular/core/testing';

import { NgxSmartSpinnerService } from './ngx-smart-spinner.service';

describe('NgxSmartSpinnerService', () => {
  let service: NgxSmartSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSmartSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
