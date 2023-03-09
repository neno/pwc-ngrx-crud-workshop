import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, first, Observable, of, tap } from 'rxjs';
import { MovieEntityService } from './movie-entity.service';

@Injectable()
export class MoviesResolver implements Resolve<boolean> {
  constructor(private movieEntityService: MovieEntityService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.movieEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.movieEntityService.getAll();
          }
        }),
        filter(loaded => !!loaded), // Wait until the movies are loaded
        first() // Complete the observable AND the transition. Continue to the route
      );
  }
}
