import { Injectable } from '@angular/core';

//Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

//Routing
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario:any = {};
  twoFactor:boolean = true;

  constructor( public _afAuth:AngularFireAuth, public router:Router ) { }

  async crearCuentaConEmailYPassword( email:string, pass:string ) {
    return await this._afAuth.createUserWithEmailAndPassword( email, pass )
                  .then( user => {
                      this.usuario = user.user;
                      console.log( this.usuario ); 
                      this.enviarEmailDeVerificacion();         
                  });
  }

  async iniciarSesionConEmailYPassword( email:string, pass:string ) {
    return await this._afAuth.signInWithEmailAndPassword( email, pass ).then( user => {
      if( user.user.emailVerified ) {
        this.usuario = user.user;
        console.log( this.usuario ); 
        if( this.twoFactor ) {
          this.router.navigate(['/two-factor']);
        } else {
          this.router.navigate(['/home']);
        }
        
      } else {
        this.router.navigate(['/verificacionEmail']);
      }                    
    });
  }

  async enviarEmailDeVerificacion():Promise<void> {
    return (await this._afAuth.currentUser).sendEmailVerification();
  }

  async logOut() {
    return await this._afAuth.signOut();
  }

  async sendSmsVerification( numero, appVerification ) {
    return await this._afAuth.signInWithPhoneNumber( numero, appVerification );
  }

  

}//Clase
