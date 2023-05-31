import { Injectable } from '@angular/core';
import { AppFacade } from '../core';
import { BehaviorSubject } from 'rxjs';

const APP_TITLE = 'Example App';

/** Handles state for the app component. Exposes observables and void methods */
@Injectable({
  providedIn: 'root',
})
export class AppPageFacade {
  #heading$ = new BehaviorSubject(APP_TITLE);
  heading$ = this.#heading$.asObservable();
  setHeading(value: string): void {
    this.#heading$.next(value);
  }

  #primaryNavOpen$ = new BehaviorSubject(true);
  primaryNavOpen$ = this.#primaryNavOpen$.asObservable();
  setPrimaryNavOpen(value: boolean): void {
    this.#primaryNavOpen$.next(value);
  }

  title$;
  setTitle;
  url$;
  setUrl;

  constructor(appFacade: AppFacade) {
    this.title$ = appFacade.title$;
    this.setTitle = appFacade.setTitle.bind(appFacade);
    this.url$ = appFacade.url$;
    this.setUrl = appFacade.setUrl.bind(appFacade);
  }
}
