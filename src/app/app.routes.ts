import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './features/todo/components/list/list.component';
import { DetailComponent } from './features/todo/components/detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: ListComponent },
  { path: 'lists/:id', component: DetailComponent },
  { path: 'details/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}