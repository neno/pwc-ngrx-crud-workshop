import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { filter, first, map, Observable, tap } from 'rxjs';
import { EventEntityService } from './event-entity.service';

@Injectable()
export class EventsResolver implements Resolve<boolean> {
  constructor(private eventEntityService: EventEntityService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Fetch all events from the server and add them to the store if not already loaded
    return this.eventEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.eventEntityService.getAll();
          }
        }),
        filter(loaded => !!loaded), // Wait until the events are loaded
        first() // Complete the observable AND the transition. Continue to the route
      );
  }
}
