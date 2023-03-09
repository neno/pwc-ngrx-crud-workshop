import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { MoviesModule } from '../movies/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { EventEntityService } from './services/event-entity.service';
import { EventDataService } from './services/event-data.service';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { EventsResolver } from './services/events.resolver';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventEntityService,
    EventDataService,
    EventsResolver
  ]
})
export class EventsModule {
  constructor(private eventEDS: EntityDefinitionService, private entityDataService: EntityDataService, private eventDataService: EventDataService) {
    this.eventEDS.registerMetadataMap({
      Event: {
        entityDispatcherOptions: {
          optimisticAdd: true,
          optimisticUpdate: true,
          optimisticDelete: true
        }
      }
    });
    this.entityDataService.registerService('Event', this.eventDataService);
  }
}
