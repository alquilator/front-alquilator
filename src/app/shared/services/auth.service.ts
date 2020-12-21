import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient,
               private router: Router ) { }

  //llamamos a FormLogin que tiene el mail y password
  async login(formLogin: FormGroup) {
    // console.log(formLogin.value.email);
    
    if (await this.callUsers(formLogin) === true) {
      return true
      
    } else {
      return false;
      
    }
  }
  
  async callUsers(formLogin: FormGroup) {
    // POST REQUEST a NODE a /users/auth
    return await this.http.post(`${this.baseUrl}/users/auth`, {email: formLogin.value.email, pass: formLogin.value.password}).toPromise()
      .then( (data: any) => {
        // console.log("token", data);
        // console.log(formLogin.value.email);
        
        localStorage.setItem('auth', data)
        localStorage.setItem('email', formLogin.value.email)
        return true; 

      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  isAuth(): boolean {
    const key = localStorage.getItem('auth')
    
    if (key === null) {
      return false;

    } else {
      return true;
    }
  }

  logout() {
    // console.log("Saliendo!");
    
    localStorage.removeItem("auth");
    localStorage.removeItem("email");

    this.router.navigateByUrl("/home")
  }
}
