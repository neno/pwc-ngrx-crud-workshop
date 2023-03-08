import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListRoutingModule } from './movies-list-routing.module';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListResolver } from './movies-list.resolver';
import { MovieComponentsModule } from '../../components/movie-components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MovieComponentsModule,
    HttpClientModule
  ],
  providers: [
    MoviesListResolver
  ],
  exports: [
    MoviesListComponent
  ]
})
export class MoviesListModule { }
