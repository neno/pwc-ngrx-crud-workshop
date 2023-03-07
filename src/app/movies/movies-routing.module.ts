import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, children: [
    { path: 'list', loadChildren: () => import('./containers/movies-list/movies-list.module').then(m => m.MoviesListModule)},
    { path: 'search', loadChildren: () => import('./containers/movies-search/movies-search.module').then(m => m.MoviesSearchModule)},
    { path: '', redirectTo: 'list', pathMatch: 'full' },
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
