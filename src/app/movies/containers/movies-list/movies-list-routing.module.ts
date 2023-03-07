import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListResolver } from './movies-list.resolver';

const routes: Routes = [
  { path: '', component: MoviesListComponent, resolve: { movies: MoviesListResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesListRoutingModule { }
