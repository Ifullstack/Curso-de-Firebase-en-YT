import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';
import { RegistroModule } from './pages/registro/registro.module';
import { RecoverPasswordModule } from './pages/recover-password/recover-password.module';
import { EmailVerificationModule } from './pages/email-verification/email-verification.module';
import { TwoFactorPageModule } from './pages/two-factor-page/two-factor-page.module';

const routes: Routes = [
  {
    path:'two-factor',
    loadChildren:'./pages/two-factor-page/two-factor-page.module#TwoFactorPageModule'
  },
  {
    path:'login',
    loadChildren:'./pages/login/login.module#LoginModule'
  },
  {
    path:'home',
    loadChildren:'./pages/home/home.module#HomeModule'
  },
  {
    path:'registro',
    loadChildren:'./pages/registro/registro.module#RegistroModule'
  },
  {
    path:'recuperar-password',
    loadChildren:'./pages/recover-password/recover-password.module#RecoverPasswordModule'
  },
  {
    path:'verificacionEmail',
    loadChildren:'./pages/email-verification/email-verification.module#EmailVerificationModule'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
