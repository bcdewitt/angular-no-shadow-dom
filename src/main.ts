import './polyfills';

import { AppAbstractionComponent } from './app';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppAbstractionComponent, {
  providers: [importProvidersFrom([BrowserAnimationsModule])],
});
