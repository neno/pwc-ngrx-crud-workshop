import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieEntityService } from '../../services/movie-entity.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent {
  movies$: Observable<Movie[]> | undefined;

  constructor(private movieEntityService: MovieEntityService) { }

  ngOnInit() {
    this.movies$ = this.movieEntityService.entities$;
  }

  deleteMovie(movieId: number) {
    this.movieEntityService.delete(movieId);
  }
}
