import { Genre } from './genre.model';
import { Language } from './language.model';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: Genre[];
  budget: number;
  revenue: number;
  homepage: string;
  imdb_id: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  spoken_languages: Language[];
  eventId?: string;
}
