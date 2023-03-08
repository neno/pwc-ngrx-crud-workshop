import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Subject } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieEntityService } from '../../services/movie-entity.service';
import * as SearchMovieActions from './store/actions'
import { isSearchingSelector, searchResultsSelector, searchTermSelector } from './store/selectors';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
})
export class MoviesSearchComponent implements OnInit {
  isSearching$ = this.store.select(isSearchingSelector);
  searchResults$ = this.store.select(searchResultsSelector);
  defaultSearchTerm$ = this.store.select(searchTermSelector);

  searchTerm = '';

  constructor(private store: Store, private movieEntityService: MovieEntityService) { }

  ngOnInit() {
    this.defaultSearchTerm$.pipe(first()).subscribe((searchTerm: string) => this.searchTerm = searchTerm);
  }

  onSearch() {
    this.store.dispatch(SearchMovieActions.searchMovies({ searchTerm: this.searchTerm }));
  }

  getAndSaveMovie(id: number) {
    this.store.dispatch(SearchMovieActions.fetchMovieById({ id }));
    // this.movieEntityService.add(movie);
    // this.movieEntityService.getByKey(id).subscribe(movie => console.log(movie));
  }
}
