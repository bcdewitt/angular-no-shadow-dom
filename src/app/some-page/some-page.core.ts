import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFacade, AppFacadeModule } from '../core';

@Injectable()
export class SomePageFacade {
  constructor(private appFacade: AppFacade) {}

  setHeading(value: string): void {
    this.appFacade.setHeading(value);
  }
}

@NgModule({
  imports: [AppFacadeModule],
  providers: [SomePageFacade],
})
export class SomePageFacadeModule {}
