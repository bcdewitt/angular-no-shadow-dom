import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { AppPageComponent, UiButtonComponent } from '../presentation';

/** The dumb (referentially transparent) component. Testable. No need for mocks. */
@Component({
  standalone: true,
  imports: [CommonModule, AppPageComponent, UiButtonComponent],

  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styles: [':host { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomePageComponent {
  @Input() primaryNavOpen = false;
  @Input() heading = '';

  @Output() setPrimaryNavOpen = new EventEmitter<boolean>();
  @Output() setUrl = new EventEmitter<string>();
}
