import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoFactorPageRoutingModule } from './two-factor-page-routing.module';
//Components
import { TwoFactorPageComponent } from './two-factor-page.component';

import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TwoFactorPageComponent
  ],
  imports: [
    CommonModule,
    TwoFactorPageRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TwoFactorPageModule { }
