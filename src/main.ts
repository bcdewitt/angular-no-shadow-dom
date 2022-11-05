import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

import { AppAbstractionComponent } from './app/app/abstraction/app.abstraction';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'some-page',
  },
  {
    path: 'some-page',
    loadComponent: () =>
      import('./app/some-page').then((mod) => mod.SomePageAbstractionComponent),
  },
];

bootstrapApplication(AppAbstractionComponent, {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(RouterModule.forRoot(ROUTES)),
  ],
});
