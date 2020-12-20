import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor ( private auth: AuthService,
                private router: Router ) { }

  canActivate(): boolean {

      if (this.auth.isAuth()) {
        console.log("Acceso correcto");
        return true;

      } else {
        console.log("ACCESO DENEGADO!");
        this.router.navigateByUrl("/login");
        return false
      }
  
  }
  
}
