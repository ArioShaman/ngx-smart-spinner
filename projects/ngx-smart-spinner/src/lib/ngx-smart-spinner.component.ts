import { ChangeDetectionStrategy, Component, Inject, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MODULE_CONFIG } from './consts';
import { INgxSmartSpinnerModuleConfig } from './interfaces';
import { NgxSmartSpinnerService } from './ngx-smart-spinner.service';

@Component({
  selector: 'ngx-smart-spinner',
  templateUrl: './ngx-smart-spinner.component.html',
  styleUrls: ['./ngx-smart-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxSmartSpinnerComponent implements OnInit, OnDestroy {
  @Input()
  public size = 50;
  /**
   * required Input
   */
  @Input()
  public id = '';

  public isLoading$!: Observable<boolean>;
  public spinnerUrl!: string;

  constructor(
    @Inject(MODULE_CONFIG) private _config: INgxSmartSpinnerModuleConfig,
    private readonly _spinnerService: NgxSmartSpinnerService,
  ) {
    this.spinnerUrl = this._config.spinnerUrl;
  }
  
  public ngOnInit(): void {
    this._spinnerService.registerSpinner(this.id);
    this.isLoading$ = this._spinnerService.getIsLoadingSpinner(this.id);
  }

  public ngOnDestroy(): void {
    this._spinnerService.removeSpinner(this.id);
  }
}
