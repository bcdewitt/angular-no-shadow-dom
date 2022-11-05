import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiButtonComponent } from '../../../shared/components';

/** The dumb (referentially transparent) component. Testable. No need for mocks. */
@Component({
  // Yay for Angular 14's standalone components!
  standalone: true,
  imports: [CommonModule, UiButtonComponent],

  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  // NOTE: Placed here temporarily, until a ui-button-list is created to lay buttons out
  preserveWhitespaces: true,
})
export class SomePageComponent {}
