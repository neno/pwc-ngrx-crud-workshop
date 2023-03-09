import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { MovieEntityService } from './services/movie-entity.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  moviesCount$ = this.movieEntityService.entities$.pipe(map((movies) => movies.length));
  constructor(private movieEntityService: MovieEntityService) {}
}
