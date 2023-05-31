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
} from '../presentation';

/** The dumb (referentially transparent) component. Testable. No need for mocks. */
@Component({
  standalone: true,
  imports: [
    CommonModule,
    UiButtonComponent,
    UiPageComponent,
    UiPrimaryNavLinkComponent,
  ],

  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: [':host { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppPageComponent {
  @Input() primaryNavOpen = false;
  @Input() heading = '';

  @Output() setPrimaryNavOpen = new EventEmitter<boolean>();
  @Output() setUrl = new EventEmitter<string>();
}
