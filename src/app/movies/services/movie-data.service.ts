import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieDataService extends DefaultDataService<Movie> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Movie', http, httpUrlGenerator);
  }

  override add(entity: Movie): Observable<Movie> {
    return this.http.post<Movie>('/api/movies', entity);
  }

  override delete(key: number | string): Observable<number | string> {
    return this.http.delete<number | string>(`/api/movies/${key}`);
  }

}
