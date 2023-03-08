import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { IEvent } from '../../models/event.model';
import { EventEntityService } from '../../services/event-entity.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
})
export class EventEditComponent implements OnInit {
  event$!: Observable<IEvent>;

  constructor(private activatedRoute: ActivatedRoute, private eventEntityService: EventEntityService) { }

  ngOnInit(): void {
    this.event$ = this.activatedRoute.data.pipe(
      tap(console.log),
      map(data => data['event']),
    );
  }

  updateEvent(event: IEvent) {
    this.eventEntityService.update(event);
  }
}
