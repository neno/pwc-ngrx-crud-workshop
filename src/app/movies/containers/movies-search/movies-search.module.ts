import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesSearchRoutingModule } from './movies-search-routing.module';
import { MoviesSearchComponent } from './movies-search.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { searchMoviesReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchMoviesEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { MoviesSearchService } from './services/movies-search.service';
import { MovieComponentsModule } from '../../components/movie-components.module';


@NgModule({
  declarations: [
    MoviesSearchComponent
  ],
  imports: [
    CommonModule,
    MoviesSearchRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('searchMovies', searchMoviesReducers ),
    EffectsModule.forFeature([SearchMoviesEffects]),
    MovieComponentsModule
  ],
  providers: [
    MoviesSearchService
  ],
  exports: [
    MoviesSearchComponent
  ]
})
export class MoviesSearchModule { }
