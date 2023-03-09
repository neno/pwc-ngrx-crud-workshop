import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Output() handleClick = new EventEmitter<string>();
}
