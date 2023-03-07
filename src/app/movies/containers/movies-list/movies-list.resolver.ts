import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { filter, first, map, Observable, tap } from 'rxjs';
import { MovieEntityService } from '../../services/movie-entity.service';

@Injectable()
export class MoviesListResolver implements Resolve<boolean> {
  constructor(private movieEntityService: MovieEntityService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Fetch all movies from the server and add them to the store if not already loaded
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
