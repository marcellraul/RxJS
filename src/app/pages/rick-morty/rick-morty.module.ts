import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickMortyRoutingModule } from './rick-morty-routing.module';
import { RickyMortyListComponent } from './components/ricky-morty-list/ricky-morty-list.component';
import { RickMortyDetailsComponent } from './components/rick-morty-details/rick-morty-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RickyMortyListComponent, RickMortyDetailsComponent],
  imports: [
    CommonModule,
    RickMortyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class RickMortyModule { }
