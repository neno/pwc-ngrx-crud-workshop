import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchMoviesState } from './reducers';

export const selectMoviesState = createFeatureSelector<SearchMoviesState>('searchMovies');

export const isSearchingSelector = createSelector(
  selectMoviesState,
  (state) => state.isSearching
);

export const searchTermSelector = createSelector(
  selectMoviesState,
  (state) => state.searchTerm
);

export const searchResultsSelector = createSelector(
  selectMoviesState,
  (state) => state.searchResults
);
