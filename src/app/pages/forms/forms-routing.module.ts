import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormaValidateComponent } from './components/forma-validate/forma-validate.component';
import { ModalValidateComponent } from './components/modal-validate/modal-validate.component';

const routes: Routes = [
  {
    path:'',
    component:FormaValidateComponent
  },
  {
    path:'modal',
    component:ModalValidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
