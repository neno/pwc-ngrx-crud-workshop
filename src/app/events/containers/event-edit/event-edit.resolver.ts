import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, EMPTY, filter, first, map, Observable, tap } from 'rxjs';
import { IEvent } from '../../models/event.model';
import { EventEntityService } from '../../services/event-entity.service';

@Injectable()
export class EventEditResolver implements Resolve<IEvent> {
  constructor(private eventService: EventEntityService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    return this.eventService.entityMap$.pipe(
      map(entities => entities[route.params['id']]),
      tap(console.log),
      first()
    );
  }
}
