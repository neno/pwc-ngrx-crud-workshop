import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieEntityService } from './services/movie-entity.service';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { MovieDataService } from './services/movie-data.service';


@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieEntityService,
    MovieDataService
  ]
})
export class MoviesModule {
  constructor(private movieEDS: EntityDefinitionService, private entityDataService: EntityDataService, private movieDataService: MovieDataService) {
    this.movieEDS.registerMetadataMap({
      Movie: {
        entityDispatcherOptions: {
          optimisticAdd: true,
          optimisticUpdate: true,
          optimisticDelete: true
        }
      }
    });
    this.entityDataService.registerService('Movie', movieDataService);
  }
}
