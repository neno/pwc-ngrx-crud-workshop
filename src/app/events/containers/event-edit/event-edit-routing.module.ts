import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventEditComponent } from './event-edit.component';
import { EventEditResolver } from './event-edit.resolver';

const routes: Routes = [
  { path: '', component: EventEditComponent, resolve: { event: EventEditResolver }, children: [
    { path: 'search', loadChildren: () => import('src/app/movies/containers/movies-search/movies-search.module').then(m => m.MoviesSearchModule) },
    { path: '', loadChildren: () => import('src/app/movies/containers/movies-list/movies-list.module').then(m => m.MoviesListModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventEditRoutingModule { }
