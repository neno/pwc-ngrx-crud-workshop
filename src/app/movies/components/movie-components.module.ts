import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieImageComponent } from './movie-image/movie-image.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent,
    MovieImageComponent
  ]
})
export class MovieComponentsModule { }
