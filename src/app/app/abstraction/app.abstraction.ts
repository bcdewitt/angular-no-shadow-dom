import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppFacade } from '../core/app.facade';
import { AppComponent } from '../presentation/app.component';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, AppComponent],
  providers: [AppFacade],

  selector: 'app-abstraction',
  template: `
    <app-presentation
      [primaryNavOpen]="primaryNavOpen$ | async"
      (setPrimaryNavOpen)="setPrimaryNavOpen($event)"
    ></app-presentation>
  `,
})
export class AppAbstractionComponent {
  protected primaryNavOpen$ = this.appFacade.primaryNavOpen$;

  protected setPrimaryNavOpen(value: boolean) {
    this.appFacade.setPrimaryNavOpen(value);
  }

  constructor(private appFacade: AppFacade) {}
}