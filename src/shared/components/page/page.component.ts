import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],

  selector: 'ui-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],

  // Removed to just let Angular watch for ng-content changes, instead of writing
  // our own mutation observer(s). This is simpler, but probably less performant
  // changeDetection: ChangeDetectionStrategy.OnPush,

  encapsulation: ViewEncapsulation.Emulated, // Default (Shadow DOM is better, but takes some learning)
})
export class UiPageComponent {
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  @Input() heading = '';

  #primaryNavOpen = false;
  @Input() get primaryNavOpen(): boolean {
    return this.#primaryNavOpen;
  }
  set primaryNavOpen(value: boolean) {
    this.drawer[value ? 'open' : 'close']();
    this.#primaryNavOpen = value;
  }

  @Output() setPrimaryNavOpen = new EventEmitter<boolean>();

  @ViewChild('primaryNavWrapper')
  protected primaryNavWrapper?: ElementRef<HTMLElement>;

  @ViewChild('bodyWrapper')
  protected bodyWrapper?: ElementRef<HTMLElement>;

  @ViewChild('drawer')
  protected drawer?: MatSidenav;

  protected hasSlottedElements(elementRef?: ElementRef<HTMLElement>): boolean {
    const nodes = Array.from(elementRef?.nativeElement.childNodes ?? []);
    return nodes.some((n) => n.nodeType !== Node.COMMENT_NODE);
  }
}
