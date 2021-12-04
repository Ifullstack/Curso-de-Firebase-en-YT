import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  pass:string  = '';

  constructor( public _authService:AuthService, public router:Router ) { }

  ngOnInit(): void {
  }

  goToPage( page:string ) {
    this.router.navigate([ page ]);
  }

  iniciarSesionConEmailYPassword() {
     this._authService.iniciarSesionConEmailYPassword( this.email, this.pass );
  }

  

}
