import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionUtilisationPage } from './condition-utilisation.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionUtilisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionUtilisationPageRoutingModule {}
