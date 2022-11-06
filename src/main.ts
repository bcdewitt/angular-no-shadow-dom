import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

// NOTE: Routing is part of the abstraction layer. Only import components from there
import {
  AppAbstractionComponent,
  AnotherPageAbstractionComponent,
  SomePageAbstractionComponent,
} from './app/abstraction';

/*
NOTE: Use the following format if you need to lazy-load modules for better performance

loadComponent: () =>
      import('./app/another-page/another-page.abstraction').then(
        (mod) => mod.AnotherPageAbstractionComponent
      ),
*/
const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'some-page' },
  { path: 'some-page', component: SomePageAbstractionComponent },
  { path: 'another-page', component: AnotherPageAbstractionComponent },
];

bootstrapApplication(AppAbstractionComponent, {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(RouterModule.forRoot(ROUTES)),
  ],
});
