import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnotherPageFacadeModule, AnotherPageFacade } from '../core';
import { AnotherPageComponent } from '../presentation';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, AnotherPageComponent, AnotherPageFacadeModule],

  selector: 'app-another-page-abstraction',
  template: `
    <app-another-page></app-another-page>
  `,
  styles: [':host { display: contents; }'],
})
export class AnotherPageAbstractionComponent {
  constructor(private somePageFacade: AnotherPageFacade) {
    this.somePageFacade.setHeading('Another Page');
  }
}
