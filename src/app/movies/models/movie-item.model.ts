import { Movie } from './movie.model';

export type MovieItem = Pick<Movie, 'id' | 'title' | 'poster_path' | 'release_date'>;
