import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
  { path: '', loadChildren: () => import('./events/events.module').then(m => m.EventsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
