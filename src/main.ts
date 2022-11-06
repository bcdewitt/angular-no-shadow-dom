import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

// NOTE: Routing is part of the abstraction layer. Only import components from there
import { AppAbstractionComponent } from './app/abstraction';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'some-page',
  },
  {
    path: 'some-page',
    loadComponent: () =>
      import('./app/some-page/some-page.abstraction').then(
        (mod) => mod.SomePageAbstractionComponent
      ),
  },
];

bootstrapApplication(AppAbstractionComponent, {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(RouterModule.forRoot(ROUTES)),
  ],
});
