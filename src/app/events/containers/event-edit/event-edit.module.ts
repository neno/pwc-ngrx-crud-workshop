import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventEditRoutingModule } from './event-edit-routing.module';
import { EventEditComponent } from './event-edit.component';
import { EventComponentModule } from '../../components/event-component.module';
import { MoviesSearchModule } from 'src/app/movies/containers/movies-search/movies-search.module';
import { MoviesModule } from 'src/app/movies/movies.module';
import { MoviesListModule } from 'src/app/movies/containers/movies-list/movies-list.module';
import { MovieComponentsModule } from 'src/app/movies/components/movie-components.module';
import { ContactComponentsModule } from 'src/app/contacts/components/contact-components.module';
import { ContactsModule } from 'src/app/contacts/contacts.module';
import { ComponentsModule } from 'src/app/components/components.module';



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
    MoviesListModule,
    MovieComponentsModule,
    ContactsModule,
    ContactComponentsModule,
    ComponentsModule
  ],
})
export class EventEditModule { }
