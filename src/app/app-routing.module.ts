import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule)},
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
