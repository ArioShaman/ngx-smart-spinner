import { AfterViewInit, Component } from '@angular/core';

import { delay, switchMap } from 'rxjs/operators';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AppService } from './app.service';


@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public smallSpinnerId = 'small-spinner';
  public bigSpinnerId = 'big-spinner';

  constructor(
    private _appService: AppService,
  ) {}

  public ngAfterViewInit(): void {
    this._fetchSmallList();
  }

  private _fetchSmallList(): void {
    this._appService.getList(this.smallSpinnerId)
      .pipe(
        switchMap(() => {
          return this._appService.getList(this.bigSpinnerId);
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }
}
