import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, ReplaySubject } from 'rxjs';

const APP_TITLE = 'Example App';

/** Handles state for the app component. Exposes observables and void methods */
@Injectable()
export class AppFacade {
  #url$ = new ReplaySubject<string>();
  url$ = this.#url$.asObservable();
  setUrl(value: string): void {
    this.#url$.next(value);
  }

  #heading$ = new BehaviorSubject(APP_TITLE);
  heading$ = this.#heading$.asObservable();
  setHeading(value: string): void {
    this.#heading$.next(value);
  }

  title$ = this.#heading$
    .asObservable()
    .pipe(
      map((value: string) =>
        value !== '' ? `${APP_TITLE} - ${value}` : APP_TITLE
      )
    );

  #primaryNavOpen$ = new BehaviorSubject(true);
  primaryNavOpen$ = this.#primaryNavOpen$.asObservable();
  setPrimaryNavOpen(value: boolean): void {
    this.#primaryNavOpen$.next(value);
  }
}

@NgModule({
  providers: [
    {
      provide: AppFacade,
      useValue: new AppFacade(),
    },
  ],
})
export class AppFacadeModule {}
