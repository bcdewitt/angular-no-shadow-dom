import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SomePageComponent } from '../presentation/some-page.component';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, SomePageComponent],

  selector: 'app-some-page-abstraction',
  template: `
    <app-some-page></app-some-page>
  `,
  styles: [':host { display: contents; }'],
})
export class SomePageAbstractionComponent {}
