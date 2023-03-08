import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, mergeMap, of, tap } from 'rxjs';
import { MoviesSearchService } from 'src/app/movies/containers/movies-search/services/movies-search.service';
import { MovieEntityService } from 'src/app/movies/services/movie-entity.service';
import * as SearchMovieActions from './actions';

@Injectable()
export class SearchMoviesEffects {
  constructor(private actions$: Actions, private moviesSearchService: MoviesSearchService, private movieEntityService: MovieEntityService) {
    actions$.subscribe(action => console.log(action));
  }

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(SearchMovieActions.searchMovies),
    mergeMap(action => (
      this.moviesSearchService.searchMovies(action.searchTerm).pipe(
        map(searchResults => SearchMovieActions.searchMoviesSuccess({ searchResults })),
      )
    ))
  ));

  fetchMovieById$ = createEffect(() => this.actions$.pipe(
    ofType(SearchMovieActions.fetchMovieById),
    mergeMap(action => (
      this.moviesSearchService.getMovieById(action.id).pipe(
        filter(movie => !!movie),
        tap((movie => this.movieEntityService.add(movie))),
      )
    ))
  ), { dispatch: false });
}
