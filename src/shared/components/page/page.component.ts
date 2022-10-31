import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'ui-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],

  // Removed to just let Angular watch for ng-content changes, instead of writing
  // our own mutation observer(s). This is simpler, but probably less performant
  // changeDetection: ChangeDetectionStrategy.OnPush,

  encapsulation: ViewEncapsulation.Emulated, // Default (Shadow DOM is better, but takes some learning)
})
export class UiPageComponent {
  @ViewChild('headWrapper') protected headWrapper?: ElementRef<HTMLElement>;
  @ViewChild('bodyWrapper') protected bodyWrapper?: ElementRef<HTMLElement>;

  hasSlottedElements(elementRef?: ElementRef<HTMLElement>): boolean {
    return Array.from(elementRef?.nativeElement.childNodes ?? []).some(
      (n) => n.nodeType !== Node.COMMENT_NODE
    );
  }
}
