import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public _authService:AuthService, public router:Router ) {}

  ngOnInit(): void {
    console.log( this._authService.usuario );  
  }

  cerrarSesion() {
    this._authService.logOut().then(() => this.router.navigate(['login']));
  }

}
