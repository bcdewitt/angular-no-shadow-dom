import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFacade } from '../core';

@Injectable()
export class SomePageFacade {
  constructor(private appFacade: AppFacade) {}

  setHeading(value: string): void {
    this.appFacade.setHeading(value);
  }
}

@NgModule({
  providers: [SomePageFacade],
})
export class SomePageFacadeModule {}
