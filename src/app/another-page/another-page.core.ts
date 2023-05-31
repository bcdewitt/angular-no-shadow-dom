import { Injectable } from '@angular/core';
import { AppPageFacade } from '../core';

@Injectable({
  providedIn: 'root',
})
export class AnotherPageFacade {
  title$;
  setTitle;
  url$;
  setUrl;
  heading$;
  setHeading;
  primaryNavOpen$;
  setPrimaryNavOpen;

  constructor(appPageFacade: AppPageFacade) {
    this.title$ = appPageFacade.title$;
    this.setTitle = appPageFacade.setTitle.bind(appPageFacade);
    this.url$ = appPageFacade.url$;
    this.setUrl = appPageFacade.setUrl.bind(appPageFacade);
    this.heading$ = appPageFacade.heading$;
    this.setHeading = appPageFacade.setHeading.bind(appPageFacade);
    this.primaryNavOpen$ = appPageFacade.primaryNavOpen$;
    this.setPrimaryNavOpen =
      appPageFacade.setPrimaryNavOpen.bind(appPageFacade);
  }
}
