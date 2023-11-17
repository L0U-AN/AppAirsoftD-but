import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AideFormPage } from './aide-form.page';

const routes: Routes = [
  {
    path: '',
    component: AideFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AideFormPageRoutingModule {}
