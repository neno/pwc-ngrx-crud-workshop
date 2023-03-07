import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent, children: [
      { path: 'list', loadChildren: () => import('./containers/event-list/event-list.module').then(m => m.EventListModule) },
      { path: 'new', loadChildren: () => import('./containers/event-item/event-item.module').then(m => m.EventItemModule) },
      { path: ':id', loadChildren: () => import('./containers/event-item/event-item.module').then(m => m.EventItemModule) },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
