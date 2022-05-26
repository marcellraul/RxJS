import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsListComponent
  },
  {
    path: '**',
    redirectTo: '',
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
