import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsResolver } from './services/events.resolver';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent, children: [
      { path: 'list', loadChildren: () => import('./containers/event-list/event-list.module').then(m => m.EventListModule) },
      { path: 'new', loadChildren: () => import('./containers/event-new/event-new.module').then(m => m.EventNewModule) },
      { path: ':id', loadChildren: () => import('./containers/event-edit/event-edit.module').then(m => m.EventEditModule) },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
    resolve: { events: EventsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
