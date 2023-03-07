import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { MoviesSearchService } from 'src/app/movies/containers/movies-search/services/movies-search.service';
import * as SearchMovieActions from './actions';

@Injectable()
export class SearchMoviesEffects {
  constructor(private actions$: Actions, private moviesSearchService: MoviesSearchService) {
    actions$.subscribe(action => console.log(action));
  }

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(SearchMovieActions.searchMovies),
    mergeMap(action => (
      this.moviesSearchService.searchMovies(action.searchTerm).pipe(
        map(searchResults => SearchMovieActions.searchMoviesSuccess({ searchResults })),
      )
    ))
  ))
}
