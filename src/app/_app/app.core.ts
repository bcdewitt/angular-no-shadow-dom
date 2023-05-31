import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

const APP_TITLE = 'Example App';

/** Handles state that would be global to the app. */
@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  #url$ = new ReplaySubject<string>();
  url$ = this.#url$.asObservable();
  setUrl(value: string): void {
    this.#url$.next(value);
  }

  #title$ = new ReplaySubject<string>();
  title$ = this.#title$.asObservable();
  setTitle(value: string): void {
    this.#title$.next(value !== '' ? `${APP_TITLE} - ${value}` : APP_TITLE);
  }
}
