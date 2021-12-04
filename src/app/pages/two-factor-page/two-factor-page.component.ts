import { Component, OnInit, AfterViewInit } from '@angular/core';

import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export class PhoneNumber {
  countryCode:string;
  zona:string;
  prefix:string;
  linea:string;

  //Formato del número de telefon
  get e164() {
      const numero = this.countryCode + this.zona + this.prefix + this.linea;
      return `+${ numero }`;
  }
}

@Component({
  selector: 'app-two-factor-page',
  templateUrl: './two-factor-page.component.html',
  styleUrls: ['./two-factor-page.component.css']
})
export class TwoFactorPageComponent implements OnInit, AfterViewInit {

  phoneNumber = new PhoneNumber();
  verificationCode:string;
  smsEnviado:boolean = false;
  usuario:any;
  
  recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  confirmationResult:firebase.auth.ConfirmationResult;

  constructor( public router:Router, public _auth:AuthService ) {
    
  }

  ngOnInit(): void {
     
  
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container');
      this.recaptchaVerifier.render();
    }, 1000);
    
  }


  sendLoginCode() {
    const appVerification = this.recaptchaVerifier;
    const numero = this.phoneNumber.e164;

    this._auth.sendSmsVerification( numero, appVerification ).then( result => {
      this.confirmationResult = result;
      this.smsEnviado = true;
    }).catch( error => console.log(error) );

  }

  verificarSmsCode() {
    this.confirmationResult.confirm( this.verificationCode ).then( result => {
      this.usuario = result.user;
      console.log('Este es el usuario', this.usuario );
      this.router.navigate([ '/home' ]);
   }).catch( error => console.log(error, 'Código incorrecto') );
  }

 

}
