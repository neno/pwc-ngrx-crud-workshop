import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  constructor(private cd: ChangeDetectorRef){
    this.cd.detach();
  }
}
