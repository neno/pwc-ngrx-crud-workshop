import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/movies/models/movie.model';

export const searchMovies = createAction(
  '[Movies] Search Movies',
  props<{ searchTerm: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Movies] Search Movies Success',
  props<{ searchResults: Movie[] }>()
);

export const searchMoviesFailure = createAction(
  '[Movies] Search Movies Failure',
  props<{ searchResults: [], error: 'Search movies failed' }>()
);
