import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { IEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventDataService extends DefaultDataService<IEvent> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Event', http, httpUrlGenerator);
  }

  override add(entity: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>('/api/events', entity);
  }

  override update(update: Update<IEvent>): Observable<IEvent> {
    return this.http.put<IEvent>(`/api/events/${update.id}`, update.changes);
  }

  override delete(key: number | string): Observable<number | string> {
    return this.http.delete<number | string>(`/api/events/${key}`);
  }
}
