import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventEditRoutingModule } from './event-edit-routing.module';
import { EventEditComponent } from './event-edit.component';
import { EventComponentModule } from '../../components/event-component.module';
import { EventEditResolver } from './event-edit.resolver';
import { MoviesSearchModule } from 'src/app/movies/containers/movies-search/movies-search.module';
import { MoviesModule } from 'src/app/movies/movies.module';
import { MoviesListModule } from 'src/app/movies/containers/movies-list/movies-list.module';


@NgModule({
  declarations: [
    EventEditComponent
  ],
  imports: [
    CommonModule,
    EventEditRoutingModule,
    EventComponentModule,
    MoviesModule,
    MoviesSearchModule,
    MoviesListModule
  ],
  providers: [
    EventEditResolver
  ]
})
export class EventEditModule { }
