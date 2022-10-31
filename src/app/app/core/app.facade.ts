import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/** Handles state for the app component. Exposes observables and void methods */
@Injectable()
export class AppFacade {
  #primaryNavOpen$ = new BehaviorSubject(false);
  primaryNavOpen$ = this.#primaryNavOpen$.asObservable();

  setPrimaryNavOpen(value: boolean): void {
    this.#primaryNavOpen$.next(value);
  }
}
