import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppFacade } from './app.core';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

/** Connects Router and Title state to AppFacade. Passes off component control to router-outlet */
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],

  selector: 'app-abstraction',
  template: '<router-outlet></router-outlet>',
  styles: [':host, router-outlet { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAbstractionComponent implements OnDestroy {
  #urlSubscription: Subscription;
  #titleSubscription: Subscription;
  constructor(
    appFacade: AppFacade,
    titleService: Title,
    router: Router,
    route: ActivatedRoute
  ) {
    route.url.pipe(take(1)).subscribe(() => {
      appFacade.setUrl(window.location.pathname);
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
