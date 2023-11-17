import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagasinFormPageRoutingModule } from './magasin-form-routing.module';

import { MagasinFormPage } from './magasin-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagasinFormPageRoutingModule
  ],
  declarations: [MagasinFormPage]
})
export class MagasinFormPageModule {}
