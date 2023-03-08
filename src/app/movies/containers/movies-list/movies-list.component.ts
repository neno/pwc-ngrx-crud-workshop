import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieEntityService } from '../../services/movie-entity.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent {
  @Input() eventId: string | undefined;

  movies$: Observable<Movie[]> | undefined;

  constructor(private movieEntityService: MovieEntityService) { }

  ngOnInit() {
    this.movies$ = this.movieEntityService.entities$.pipe(
      map(movies => {
        if (this.eventId) {
          return movies.filter(movie => movie.eventId === this.eventId);
        }
        return movies;
      })
    );
  }

  deleteMovie(movieId: number) {
    this.movieEntityService.delete(movieId);
  }
}
