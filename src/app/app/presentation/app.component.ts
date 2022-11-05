import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  UiButtonComponent,
  UiPageComponent,
  UiPrimaryNavLinkComponent,
} from '../../../shared/components';

/** The dumb (referentially transparent) component. Testable. No need for mocks. */
@Component({
  // Yay for Angular 14's standalone components!
  standalone: true,
  imports: [
    CommonModule,
    UiPageComponent,
    UiPrimaryNavLinkComponent,
    UiButtonComponent,
  ],

  selector: 'app-presentation',
  templateUrl: './app.component.html',
  styles: [':host { display: contents; }'],
  // NOTE: We don't need CSS here (other than to remove elements from rendering)
  // Design would be shared in a big company via a set of components that implement a design system underneath
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @Input() primaryNavOpen = false;
  @Input() heading = '';

  @Output() setPrimaryNavOpen = new EventEmitter<boolean>();
  @Output() setUrl = new EventEmitter<string>();
}
