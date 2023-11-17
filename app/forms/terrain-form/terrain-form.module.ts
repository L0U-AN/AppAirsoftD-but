import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerrainFormPageRoutingModule } from './terrain-form-routing.module';

import { TerrainFormPage } from './terrain-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerrainFormPageRoutingModule
  ],
  declarations: [TerrainFormPage]
})
export class TerrainFormPageModule {}
