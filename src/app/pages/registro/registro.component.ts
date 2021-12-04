import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email:string = '';
  pass:string = '';

  constructor( public _authService:AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  crearCuentaConEmailYPassword() {
      this._authService.crearCuentaConEmailYPassword( this.email,this.pass ).then(() => this.router.navigate(['/login']));
  }

}
