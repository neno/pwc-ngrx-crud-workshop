import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select } from '@ngrx/store';
import { take, tap } from 'rxjs';
import { IEvent } from '../../models/event.model';
import { EventEntityService } from '../../services/event-entity.service';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private eventEntityService: EventEntityService, private rouer: Router) {
    this.form = this.fb.group({
      id: [crypto.randomUUID(), Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      beginsAt: ['', Validators.required],
      location: ['', Validators.required],
      movies: [[]],
      guests: [[]],
    });
  }

  onSubmit() {
    const event: IEvent = {...this.form.value};
    console.log(this.form.value);
    if (this.form.valid) {
      this.eventEntityService.add(event).pipe(
        take(1)
      ).subscribe(
        (event) => this.rouer.navigate(['/events', event.id])
      );
    }
  }
}
