import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UiButtonComponent,
  UiPageComponent,
  UiPrimaryNavLinkComponent,
} from 'shared/components';

@Component({
  // Yay for Angular 14's standalone components!
  standalone: true,
  imports: [
    CommonModule,
    UiPageComponent,
    UiPrimaryNavLinkComponent,
    UiButtonComponent,
  ],

  selector: 'app-app',
  templateUrl: './app.component.html',
  // NOTE: We don't need CSS here
  // Design would be shared in a big company via a set of components that implement a design system underneath
})
export class AppComponent {
  @Input() primaryNavOpen = false;
  @Output() setPrimaryNavOpen = new EventEmitter<boolean>();
}
