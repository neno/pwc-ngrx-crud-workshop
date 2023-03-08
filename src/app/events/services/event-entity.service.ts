import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { IEvent } from '../models/event.model';

@Injectable()
export class EventEntityService extends EntityCollectionServiceBase<IEvent> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Event', serviceElementsFactory);
  }
}
