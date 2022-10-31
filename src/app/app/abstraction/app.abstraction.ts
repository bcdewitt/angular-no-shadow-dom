import { Component } from '@angular/core';
import { AppComponent } from '../presentation/app.component';

/** Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [AppComponent],

  selector: 'app-app-abstraction',
  templateUrl: `
    <app-app
      [primaryNavOpen]="primaryNavOpen"
      (setPrimaryNavOpen)="setPrimaryNavOpen($event)"
    ></app-app>
  `,
})
export class AppAbstractionComponent {
  // This guy handles state. Better here than in the shared components - otherwise the shared components get harder to test
  protected primaryNavOpen = false;
  protected setPrimaryNavOpen(value: boolean): void {
    this.primaryNavOpen = value;
  }
}
