import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Movie } from '../../../models/movie.model';

@Injectable()
export class MoviesSearchService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `https://api.themoviedb.org/3/search/movie?api_key=00f3f32198696caff437631c007a7548&query=${searchTerm}`
    ).pipe(
      tap(console.log),
      map((data: any) => data.results)
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=00f3f32198696caff437631c007a7548&query`
    );
  }
}
