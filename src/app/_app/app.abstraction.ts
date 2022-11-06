import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppFacade, AppFacadeModule } from './app.core';
import { AppComponent } from '../presentation';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

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
export class AppAbstractionComponent implements OnDestroy {
  protected primaryNavOpen$ = this.appFacade.primaryNavOpen$;
  protected heading$ = this.appFacade.heading$;

  protected setPrimaryNavOpen(value: boolean): void {
    this.appFacade.setPrimaryNavOpen(value);
  }

  protected setUrl(url: string): void {
    this.appFacade.setUrl(url);
  }

  #urlSubscription: Subscription;
  #titleSubscription: Subscription;
  constructor(
    private appFacade: AppFacade,
    titleService: Title,
    router: Router,
    route: ActivatedRoute
  ) {
    route.url.pipe(take(1)).subscribe(() => {
      this.setUrl(window.location.pathname);
    });

    this.#urlSubscription = appFacade.url$.subscribe((url) => {
      router.navigateByUrl(url);
    });

    this.#titleSubscription = appFacade.title$.subscribe((title) => {
      titleService.setTitle(title);
    });
  }

  ngOnDestroy(): void {
    this.#urlSubscription.unsubscribe();
    this.#titleSubscription.unsubscribe();
  }
}
