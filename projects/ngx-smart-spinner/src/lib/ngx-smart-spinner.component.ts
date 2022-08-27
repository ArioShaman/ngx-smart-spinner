import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-smart-spinner',
  templateUrl: './ngx-smart-spinner.component.html',
  styleUrls: ['./ngx-smart-spinner.component.scss']
})
export class NgxSmartSpinnerComponent implements OnInit {
  @Input()
  public size = 50;
  /**
   * required input
   */
  @Input()
  public id = '';

  public isLoading = true;

  constructor() { }

  public ngOnInit(): void {}

}
