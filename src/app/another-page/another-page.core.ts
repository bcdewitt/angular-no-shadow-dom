import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFacade, AppFacadeModule } from '../core';

@Injectable()
export class AnotherPageFacade {
  constructor(private appFacade: AppFacade) {}

  setHeading(value: string): void {
    this.appFacade.setHeading(value);
  }
}

@NgModule({
  imports: [AppFacadeModule],
  providers: [AnotherPageFacade],
})
export class AnotherPageFacadeModule {}
