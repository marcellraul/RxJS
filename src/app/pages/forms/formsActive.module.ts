import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormaValidateComponent } from './components/forma-validate/forma-validate.component';
import { ModalValidateComponent } from './components/modal-validate/modal-validate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormaValidateComponent, ModalValidateComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsActiveModule { }
