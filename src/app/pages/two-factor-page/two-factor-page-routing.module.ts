import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { TwoFactorPageComponent } from './two-factor-page.component';


const routes: Routes = [
  {
    path:'',
    component:TwoFactorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoFactorPageRoutingModule { }
