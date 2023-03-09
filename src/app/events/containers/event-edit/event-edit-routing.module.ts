import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsResolver } from 'src/app/contacts/services/contacts.resolver';
import { MoviesResolver } from 'src/app/movies/services/movies.resolver';
import { EventEditComponent } from './event-edit.component';

const routes: Routes = [
  {
    path: '', component: EventEditComponent, children: [
      { path: 'search', loadChildren: () => import('src/app/movies/containers/movies-search/movies-search.module').then(m => m.MoviesSearchModule) },
      { path: '', loadChildren: () => import('src/app/movies/containers/movies-list/movies-list.module').then(m => m.MoviesListModule) },
    ],
    resolve: { contacts: ContactsResolver, movies: MoviesResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventEditRoutingModule { }
