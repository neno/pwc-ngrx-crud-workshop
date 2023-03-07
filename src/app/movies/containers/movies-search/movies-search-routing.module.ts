import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesSearchComponent } from './movies-search.component';

const routes: Routes = [
  { path: '', component: MoviesSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesSearchRoutingModule { }
