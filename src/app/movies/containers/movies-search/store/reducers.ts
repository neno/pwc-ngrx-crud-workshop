import { createReducer, on } from '@ngrx/store';
import * as SearchMovieActions from './actions';
import { Movie } from 'src/app/movies/models/movie.model';

export interface SearchMoviesState {
  searchTerm: string;
  searchResults: Movie[];
  isSearching: boolean;
  error: string | null;
}

export const initialState: SearchMoviesState = {
  searchTerm: '',
  searchResults: [],
  isSearching: false,
  error: null,
}

export const searchMoviesReducers = createReducer(
  initialState,
  on(SearchMovieActions.searchMovies, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
    isSearching: true,
    error: null,
  })),
  on(SearchMovieActions.searchMoviesSuccess, (state, { searchResults }) => ({
    ...state,
    searchResults,
    isSearching: false,
    error: null,
  })),
  on(SearchMovieActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    isSearching: false,
    error,
  })),
)
