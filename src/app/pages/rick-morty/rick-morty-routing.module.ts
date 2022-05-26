import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickMortyDetailsComponent } from './components/rick-morty-details/rick-morty-details.component';
import { RickyMortyListComponent } from './components/ricky-morty-list/ricky-morty-list.component';

const routes: Routes = [
  {
    path:'',
    component:RickyMortyListComponent
  },
  {
    path:'details',
    component:RickMortyDetailsComponent
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
export class RickMortyRoutingModule { }
