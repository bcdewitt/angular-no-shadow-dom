import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const APP_TITLE = 'Example App';

/** Handles state for the app component. Exposes observables and void methods */
@Injectable()
export class AppFacade {
  #url$ = new ReplaySubject();
  url$ = this.#url$.asObservable();
  setUrl(value: string): void {
    this.#url$.next(value);
  }

  #heading$ = new BehaviorSubject(APP_TITLE);
  heading$ = this.#heading$.asObservable();
  setHeading(value: string): void {
    const heading = value !== '' ? `${APP_TITLE} - ${value}` : APP_TITLE;
    this.#heading$.next(heading);
  }

  #primaryNavOpen$ = new BehaviorSubject(true);
  primaryNavOpen$ = this.#primaryNavOpen$.asObservable();
  setPrimaryNavOpen(value: boolean): void {
    this.#primaryNavOpen$.next(value);
  }
}

@NgModule({
  providers: [AppFacade],
})
export class AppFacadeModule {}
