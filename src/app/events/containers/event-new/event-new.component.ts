import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IEvent } from '../../models/event.model';
import { EventEntityService } from '../../services/event-entity.service';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
})
export class EventNewComponent {

  constructor(private eventEntityService: EventEntityService, private rouer: Router) { }

  createEvent(e: IEvent) {
    const event = { ...e, movies: [], guests: [] };
    this.eventEntityService.add(event).pipe(take(1)).subscribe(
      (event) => this.rouer.navigate(['/', event.id])
    );
  }
}
