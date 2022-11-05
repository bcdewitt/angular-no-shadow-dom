import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UiPrimaryNavLinkComponent } from '../primary-nav-link/primary-nav-link.component';
import { Subscription } from 'rxjs';

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
export class UiPageComponent
  implements OnChanges, AfterViewInit, AfterContentInit, OnDestroy
{
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  @Input() heading = '';

  // NOTE: handling booleans in Angular sucks
  #primaryNavOpen = false;
  @Input()
  get primaryNavOpen(): boolean {
    return this.#primaryNavOpen;
  }
  set primaryNavOpen(value: boolean | '') {
    this.#primaryNavOpen = value === '' || value;
  }

  @Output() setPrimaryNavOpen = new EventEmitter<boolean>();
  @Output() setUrl = new EventEmitter<string>();

  @ViewChild('bodyWrapper') protected bodyWrapper?: HTMLElement;
  @ViewChild('drawer') protected drawer?: MatSidenav;
  @ContentChildren(UiPrimaryNavLinkComponent)
  protected navLinks?: QueryList<UiPrimaryNavLinkComponent>;

  #openedHandler = (opened: string) => this.setUrl.emit(opened);
  #openedSubscriptions: Subscription[] = [];
  #updateOpenedHandlers(navLinks: UiPrimaryNavLinkComponent[]): void {
    for (const openedSubscription of this.#openedSubscriptions) {
      openedSubscription.unsubscribe();
    }

    this.#openedSubscriptions = navLinks.map((navLink) =>
      navLink.opened.subscribe(this.#openedHandler)
    );
  }

  protected hasSlottedElements(element?: HTMLElement): boolean {
    const nodes = Array.from(element?.childNodes ?? []);
    return nodes.some((n) => n.nodeType !== Node.COMMENT_NODE);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('primaryNavOpen' in changes && this.drawer !== undefined) {
      this.drawer.opened = this.#primaryNavOpen;
    }
  }

  // NOTE: The first ngOnChanges call happens before the view (including the drawer) is initialized
  ngAfterViewInit(): void {
    this.drawer!.opened = this.#primaryNavOpen;
  }

  #navLinksSubscription: Subscription;
  ngAfterContentInit(): void {
    this.#updateOpenedHandlers(this.navLinks.toArray());
    this.#navLinksSubscription = this.navLinks.changes.subscribe((e) => {
      this.#updateOpenedHandlers(this.navLinks.toArray());
    });
  }

  ngOnDestroy(): void {
    this.#navLinksSubscription.unsubscribe();
    for (const openedSubscription of this.#openedSubscriptions) {
      openedSubscription.unsubscribe();
    }
  }
}
