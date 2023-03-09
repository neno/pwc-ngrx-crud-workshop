import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, first, map, Observable, switchMap, take, tap } from 'rxjs';
import { Contact } from 'src/app/contacts/models/contact.model';
import { ContactEntityService } from 'src/app/contacts/services/contact-entity.service';
import { Movie } from 'src/app/movies/models/movie.model';
import { MovieEntityService } from 'src/app/movies/services/movie-entity.service';
import { IEvent } from '../../models/event.model';
import { EventEntityService } from '../../services/event-entity.service';

type TabTypes = 'selected' | 'assign';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
})
export class EventEditComponent implements OnInit {
  event$!: Observable<IEvent>;
  selectedMovies$!: Observable<Movie[]>;
  selectedContacts$!: Observable<Contact[]>;
  unSelectedContacts$!: Observable<Contact[]>;
  activeMovieTabSubject = new BehaviorSubject<TabTypes>('selected');
  activeMovieTab$ = this.activeMovieTabSubject.asObservable();
  activeContactTabSubject = new BehaviorSubject<TabTypes>('selected');
  activeContactTab$ = this.activeContactTabSubject.asObservable();

  constructor(private route: ActivatedRoute, private eventEntityService: EventEntityService, private movieEntityService: MovieEntityService, private contactEntityService: ContactEntityService) { }

  ngOnInit(): void {
    this.loadEvent();
  }

  loadEvent() {
    this.event$ = this.eventEntityService.entityMap$.pipe(
      map(entities => entities[this.route.snapshot.params['id']]),
      tap(console.log),
      first()
    );
    this.selectedMovies$ = this.event$.pipe(
      map(event => event.movies),
      switchMap(movieIds => this.movieEntityService.entities$.pipe(
        map(movies => movies.filter(movie => movieIds.includes(movie.id)))
      ))
    )
    this.selectedContacts$ = this.event$.pipe(
      map(event => event.guests),
      switchMap(contactIds => this.contactEntityService.entities$.pipe(
        map(contacts => contacts.filter((contact: Contact) => contactIds.includes(contact.id)))
      ))
    )
    this.unSelectedContacts$ = this.event$.pipe(
      map(event => event.guests),
      switchMap(contactIds => this.contactEntityService.entities$.pipe(
        map(contacts => contacts.filter((contact: Contact) => !contactIds.includes(contact.id)))
      ))
    )
  }

  updateEvent(event: IEvent) {
    this.eventEntityService.update(event);
    this.loadEvent()
  }

  addMovie(movieId: number, e: IEvent) {
    const event = { ...e, movies: [...e.movies, movieId] };
    this.updateEvent(event)
  }

  removeMovie(movieId: number, e: IEvent) {
    const event = { ...e, movies: e.movies.filter(id => id !== movieId) };
    this.updateEvent(event)
  }

  switchMovieTab(tab: TabTypes) {
    this.activeMovieTabSubject.next(tab);
  }

  switchContactTab(tab: TabTypes) {
    this.activeContactTabSubject.next(tab);
  }

  createContantAndAddGuest(contact: Contact, e: IEvent) {
    console.log(contact);

    this.contactEntityService.add(contact).pipe(
      take(1)
    ).subscribe(
      (contact => {
        console.log(contact);

        const event = { ...e, guests: [...e.guests, contact.id] };
        this.updateEvent(event)
      })
    );
  }

  addContact(contactId: string, e: IEvent) {
    const event = { ...e, guests: [...e.guests, contactId] };
    this.updateEvent(event)
  }

  removeContact(contactId: string, e: IEvent) {
    const event = { ...e, guests: e.guests.filter(id => id !== contactId) };
    this.updateEvent(event)
  }
}
