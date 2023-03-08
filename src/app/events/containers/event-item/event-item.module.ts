import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventItemRoutingModule } from './event-item-routing.module';
import { EventItemComponent } from './event-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesSearchModule } from 'src/app/movies/containers/movies-search/movies-search.module';
import { MoviesModule } from 'src/app/movies/movies.module';
import { EventComponentModule } from '../../components/event-component.module';


@NgModule({
  declarations: [
    EventItemComponent
  ],
  imports: [
    CommonModule,
    EventItemRoutingModule,
    ReactiveFormsModule,
    MoviesModule,
    MoviesSearchModule,
    EventComponentModule
  ]
})
export class EventItemModule { }
