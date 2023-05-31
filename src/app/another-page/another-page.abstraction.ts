import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnotherPageFacade } from '../core';
import { AnotherPageComponent } from '../presentation';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, AnotherPageComponent],

  selector: 'app-another-page-abstraction',
  template: `
    <app-another-page
      [primaryNavOpen]="primaryNavOpen$ | async"
      [heading]="heading$ | async"
      (setPrimaryNavOpen)="setPrimaryNavOpen($event)"
      (setUrl)="setUrl($event)"
    ></app-another-page>
  `,
  styles: [':host { display: contents; }'],
})
export class AnotherPageAbstractionComponent {
  protected primaryNavOpen$;
  protected heading$;
  protected setPrimaryNavOpen;
  protected setUrl;

  constructor(facade: AnotherPageFacade) {
    facade.setHeading('Another Page');

    this.primaryNavOpen$ = facade.primaryNavOpen$;
    this.heading$ = facade.heading$;
    this.setPrimaryNavOpen = facade.setPrimaryNavOpen.bind(facade);
    this.setUrl = facade.setUrl.bind(facade);
  }
}
