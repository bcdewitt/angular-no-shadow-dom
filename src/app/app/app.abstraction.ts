import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppFacade, AppFacadeModule } from './app.core';
import { AppComponent } from '../presentation';
import { skip, take } from 'rxjs/operators';

/** The smart component. Integrates/composes parts of the core layer and the presentation layer together */
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AppComponent, AppFacadeModule],

  selector: 'app-abstraction',
  template: `
    <app-presentation
      [primaryNavOpen]="primaryNavOpen$ | async"
      [heading]="heading$ | async"
      (setPrimaryNavOpen)="setPrimaryNavOpen($event)"
      (setUrl)="setUrl($event)"
    >
      <router-outlet></router-outlet>
    </app-presentation>
  `,
  styles: [':host, router-outlet { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAbstractionComponent {
  protected primaryNavOpen$ = this.appFacade.primaryNavOpen$;
  protected heading$ = this.appFacade.heading$;

  protected setPrimaryNavOpen(value: boolean): void {
    this.appFacade.setPrimaryNavOpen(value);
  }

  protected setUrl(url: string): void {
    this.appFacade.setUrl(url);
  }

  constructor(private appFacade: AppFacade, route: ActivatedRoute) {
    // this.setUrl(route.snapshot.url.join(''));
    route.url.pipe(take(1)).subscribe(() => {
      this.setUrl(window.location.pathname);
    });
  }
}
