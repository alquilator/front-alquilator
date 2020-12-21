import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories = [
    {name: "Deportes", img: "../../../assets/Deportes.svg"}, 
    {name: "Mobiliario", img: "../../../assets/Mobiliario.svg"}, 
    {name: "Ocio", img: "../../../assets/Ocio.svg"}, 
    {name: "Informática", img: "../../../assets/Informática.svg"},
    {name: "Fotografía", img: "../../../assets/Fotografía.svg"},
    {name: "Instrumentos", img: "../../../assets/Instrumentos.svg"},
    {name: "Sonido", img: "../../../assets/Sonido.svg"},
    {name: "Herramientas", img: "../../../assets/Herramientas.svg"}
  
  ]

  product = [];
  products = [];
  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient ) { }

  async getProductsByCatName(catName: string) {

    return await this.http.get(`${this.baseUrl}/products/${catName}`).toPromise()
      .then((data: any) => {
        // console.log("Datosss", data);
        this.products = data;
        // console.log(this.products)
  
      })
      .catch((error) => {
        console.log("Ha habido un ERROR: ", error); 
      })    
  }

  async getProductsById(id: string) {
    return await this.http.get(`${this.baseUrl}/products/product/${id}`).toPromise()
      .then((data2: any) => {
        // console.log("PRODUCTO:", data2);
        this.product = data2
        // console.log(this.product);
      })
      .catch((error) => {
        console.log("EEERRROOOOROR: ", error);
      })
  }

  async saveProduct(url = "", data = {}) {
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
}
