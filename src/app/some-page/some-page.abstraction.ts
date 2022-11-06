import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SomePageFacadeModule, SomePageFacade } from '../core';
import { SomePageComponent } from '../presentation';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, SomePageComponent, SomePageFacadeModule],

  selector: 'app-some-page-abstraction',
  template: `
    <app-some-page></app-some-page>
  `,
  styles: [':host { display: contents; }'],
})
export class SomePageAbstractionComponent {
  constructor(private somePageFacade: SomePageFacade) {
    this.somePageFacade.setHeading('Some Page');
  }
}
