import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AlbumsListComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class AlbumsModule { }
