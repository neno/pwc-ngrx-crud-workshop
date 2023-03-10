import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
})
export class MovieCardListComponent {
  constructor(private cd: ChangeDetectorRef){
    this.cd.detach();
  }
}
