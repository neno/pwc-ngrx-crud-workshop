import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import * as SearchMovieActions from './store/actions'
import { isSearchingSelector, searchResultsSelector, searchTermSelector } from './store/selectors';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
})
export class MoviesSearchComponent implements OnInit {
  @Output() movieSelected = new EventEmitter<number>();

  isSearching$ = this.store.select(isSearchingSelector);
  searchResults$ = this.store.select(searchResultsSelector);
  defaultSearchTerm$ = this.store.select(searchTermSelector);

  searchTerm = '';

  constructor(private store: Store) { }

  ngOnInit() {
    this.defaultSearchTerm$.pipe(first()).subscribe((searchTerm: string) => this.searchTerm = searchTerm);
  }

  onSearch() {
    this.store.dispatch(SearchMovieActions.searchMovies({ searchTerm: this.searchTerm }));
  }

  getAndSaveMovie(id: number) {
    this.store.dispatch(SearchMovieActions.fetchMovieById({ id }));
    this.movieSelected.emit(id);
  }
}
