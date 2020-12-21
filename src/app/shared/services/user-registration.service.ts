import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  
  user: any;
  userProduct: [];
  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient ) { }

  async register(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
  }

  // llamar a este método desde UserArea cuando se haya creado para borrar los datos de un usuario?
  async deleteUser(url = "", data = {}) {

  }

  // para modificar los datos, llamar desde UserArea
  async updateUser(url = "", data = {}) {

  }

  async getUser(email: string) {
    
    return await this.http.get(`${this.baseUrl}/users/${email}`).toPromise()
      .then((data: any) => {
        // console.log("Datos del usuario", data);
        this.user = data
        // console.log(this.userProduct);
      })
      .catch((error) => {
        console.log("EEERRROOOOROR: ", error);
      })
  }

  async getUserProduct(id: string) {
    
    return await this.http.get(`${this.baseUrl}/products/user/${id}`).toPromise()
      .then((data: any) => {
        // console.log("PRODUCTOS del usuario:", data);
        this.userProduct = data;
        // console.log(this.userProduct);
      })
      .catch((error) => {
        console.log("EEERRROOOOROR: ", error);
      })
  }

}


