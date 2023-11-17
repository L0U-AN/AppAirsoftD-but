import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionUtilisationPageRoutingModule } from './condition-utilisation-routing.module';

import { ConditionUtilisationPage } from './condition-utilisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionUtilisationPageRoutingModule
  ],
  declarations: [ConditionUtilisationPage]
})
export class ConditionUtilisationPageModule {}
