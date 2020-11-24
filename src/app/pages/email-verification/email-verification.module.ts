import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerificationRoutingModule } from './email-verification-routing.module';

import { EmailVerificationComponent } from './email-verification.component';
import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    EmailVerificationRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class EmailVerificationModule { }
