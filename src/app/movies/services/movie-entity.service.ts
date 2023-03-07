import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieEntityService extends EntityCollectionServiceBase<Movie> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Movie', serviceElementsFactory);
  }
}
