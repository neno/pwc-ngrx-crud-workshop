import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventItemRoutingModule } from './event-item-routing.module';
import { EventItemComponent } from './event-item.component';


@NgModule({
  declarations: [
    EventItemComponent
  ],
  imports: [
    CommonModule,
    EventItemRoutingModule
  ]
})
export class EventItemModule { }
