import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactCardComponent } from './contact-card/contact-card.component';



@NgModule({
  declarations: [
    ContactFormComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactFormComponent,
    ContactCardComponent
  ]
})
export class ContactComponentsModule { }
