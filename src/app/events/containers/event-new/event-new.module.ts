import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventNewRoutingModule } from './event-new-routing.module';
import { EventNewComponent } from './event-new.component';
import { EventComponentModule } from '../../components/event-component.module';


@NgModule({
  declarations: [
    EventNewComponent
  ],
  imports: [
    CommonModule,
    EventNewRoutingModule,
    EventComponentModule
  ]
})
export class EventNewModule { }
