import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { AuthenticationService } from '../../services/authentication.service'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
  ],
  declarations: [SignupPage],
  providers: [
    AuthenticationService,  // Assurez-vous que AuthenticationService est fourni ici
  ],
})
export class SignupPageModule {}