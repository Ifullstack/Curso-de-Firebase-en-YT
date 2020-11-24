import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor( public _authService:AuthService, public router:Router ) { }

  ngOnInit(): void {
  }

  verificarEmail() {
      this._authService.enviarEmailDeVerificacion().then(() => this.router.navigate(['login']));
  }

}
