import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SomePageFacade } from '../core';
import { SomePageComponent } from '../presentation';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, SomePageComponent],

  selector: 'app-some-page-abstraction',
  template: `
    <app-some-page
      [primaryNavOpen]="primaryNavOpen"
      [heading]="heading"
      (setPrimaryNavOpen)="setPrimaryNavOpen($event)"
      (setUrl)="setUrl($event)"
    ></app-some-page>
  `,
  styles: [':host { display: contents; }'],
})
export class SomePageAbstractionComponent {
  protected primaryNavOpen = true;
  protected heading;
  protected setPrimaryNavOpen;
  protected setUrl;

  constructor(facade: SomePageFacade) {
    facade.setHeading('Some Page');

    facade.primaryNavOpen$.subscribe((newValue) => {
      this.primaryNavOpen = newValue;
    });
    facade.heading$.subscribe((newValue) => {
      this.heading = newValue;
    });
    this.setPrimaryNavOpen = facade.setPrimaryNavOpen.bind(facade);
    this.setUrl = facade.setUrl.bind(facade);
  }
}
