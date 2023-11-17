import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerrainFormPage } from './terrain-form.page';

const routes: Routes = [
  {
    path: '',
    component: TerrainFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerrainFormPageRoutingModule {}
