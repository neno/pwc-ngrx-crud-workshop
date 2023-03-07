import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-image',
  templateUrl: './movie-image.component.html',
})
export class MovieImageComponent {
  @Input() src!: string;
  @Input() alt!: string;

  imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

  imgFallback($event: any) {
    $event.target.src = '/assets/img-placeholder.png';
  }
}
