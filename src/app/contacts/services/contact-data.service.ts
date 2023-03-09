import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactDataService extends DefaultDataService<Contact> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Contact', http, httpUrlGenerator);
  }

  override add(entity: Contact): Observable<Contact> {
    return this.http.post<Contact>('/api/contacts', entity);
  }

  override update(update: Update<Contact>): Observable<Contact> {
    return this.http.put<Contact>(`/api/contacts/${update.id}`, update.changes);
  }

  override delete(key: number | string): Observable<number | string> {
    return this.http.delete<number | string>(`/api/contacts/${key}`);
  }
}
