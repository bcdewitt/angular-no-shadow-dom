import { MatListModule } from '@angular/material/list';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, MatListModule],

  selector: 'ui-primary-nav-link',
  templateUrl: './primary-nav-link.component.html',
  styleUrls: ['./primary-nav-link.component.scss'],

  // Removed to just let Angular watch for ng-content changes, instead of writing
  // our own mutation observer(s). This is simpler, but probably less performant
  // changeDetection: ChangeDetectionStrategy.OnPush,

  encapsulation: ViewEncapsulation.Emulated, // Default (Shadow DOM is better, but takes some learning)
})
export class UiPrimaryNavLinkComponent {
  @Input() href = '';
}
