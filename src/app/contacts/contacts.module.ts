import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactEntityService } from './services/contact-entity.service';
import { ContactDataService } from './services/contact-data.service';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { ContactsResolver } from './services/contacts.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ContactEntityService,
    ContactDataService,
    ContactsResolver
  ]
})
export class ContactsModule {
  constructor(private contactEDS: EntityDefinitionService, private entityDataService: EntityDataService, private contactDataService: ContactDataService) {
    this.contactEDS.registerMetadataMap({
      Contact: {
        entityDispatcherOptions: {
          optimisticAdd: true,
          optimisticUpdate: true,
          optimisticDelete: true
        }
      }
    });
    this.entityDataService.registerService('Contact', this.contactDataService);
  }
}
