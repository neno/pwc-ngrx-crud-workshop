import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  @Input() contact?: Contact;
  @Output() handleSubmit = new EventEmitter<Contact>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      // address: ['', Validators.required],
      // city: ['', Validators.required],
      // zip: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.contact) {
      this.form.patchValue(this.contact);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const newContact: Contact = {
        ...this.contact ?? {},
        ...this.form.value,
        id: this.contact?.id ?? crypto.randomUUID(),
      };
      this.handleSubmit.emit(newContact);
      this.form.reset();
    }
  }
}
