import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiButtonComponent } from '../presentation';

/** The dumb (referentially transparent) component. Testable. No need for mocks. */
@Component({
  // Yay for Angular 14's standalone components!
  standalone: true,
  imports: [CommonModule, UiButtonComponent],

  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styles: [':host { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomePageComponent {}
