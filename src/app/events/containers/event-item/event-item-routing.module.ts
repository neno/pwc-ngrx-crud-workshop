import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventItemComponent } from './event-item.component';

const routes: Routes = [
  { path: '', component: EventItemComponent },
  { path: ':id', component: EventItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventItemRoutingModule { }
