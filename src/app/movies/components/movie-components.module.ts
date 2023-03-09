import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieCardListComponent } from './movie-card-list/movie-card-list.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieImageComponent,
    MovieItemComponent,
    MovieCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent,
    MovieImageComponent,
    MovieItemComponent,
    MovieCardListComponent
  ]
})
export class MovieComponentsModule { }
