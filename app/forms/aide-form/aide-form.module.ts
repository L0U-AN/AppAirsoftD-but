import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AideFormPageRoutingModule } from './aide-form-routing.module';

import { AideFormPage } from './aide-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AideFormPageRoutingModule
  ],
  declarations: [AideFormPage]
})
export class AideFormPageModule {}
