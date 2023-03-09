import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactEntityService extends EntityCollectionServiceBase<Contact>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Contact', serviceElementsFactory);
  }
}
