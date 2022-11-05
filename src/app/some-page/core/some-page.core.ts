import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class SomePageFacade {}

@NgModule({
  providers: [SomePageFacade],
})
export class SomePageFacadeModule {}
