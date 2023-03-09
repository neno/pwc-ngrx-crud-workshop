import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../../models/event.model';
import { EventEntityService } from '../../services/event-entity.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events$: Observable<IEvent[]> | undefined;

  constructor(private eventEntityService: EventEntityService) { }

  ngOnInit() {
    this.events$ = this.eventEntityService.entities$;
  }

  deleteEvent(eventId: string) {
    this.eventEntityService.delete(eventId);
  }
}
