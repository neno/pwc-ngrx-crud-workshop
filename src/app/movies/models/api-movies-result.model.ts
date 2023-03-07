import { MovieItem } from './movie-item.model';

export interface IApiMovieListResult {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
}
