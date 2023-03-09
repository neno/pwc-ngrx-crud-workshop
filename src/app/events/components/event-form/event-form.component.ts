import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
})
export class EventFormComponent implements OnInit {
  @Input() event?: IEvent;
  @Output() handleSubmit = new EventEmitter<IEvent>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [crypto.randomUUID(), Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      beginsAt: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.event) {
      this.form.patchValue(this.event);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const newEvent: IEvent = {
        ...this.event ?? {},
        ...this.form.value,
      };
      this.handleSubmit.emit(newEvent);
    }
  }
}
