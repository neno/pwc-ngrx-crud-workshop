import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventNewComponent } from './event-new.component';

const routes: Routes = [
  { path: '', component: EventNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventNewRoutingModule { }
