import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  //Referencia formulario Newpost con su tipo
  formNewpost: FormGroup;

  //Declaración del FormBuilder, ruter y servicio
  constructor(private fb:FormBuilder, 
              private router: Router,
              private productService: ProductService) {
    //llamada del método que crea el formulario
    this.createFormNewpost();
  }

  ngOnInit(): void {}

  // Comprobación si el campo es inválido
  get productNameInvalid (): boolean {
    return this.formNewpost.get('name').invalid && this.formNewpost.get('name').touched;
  }

  get productCategoryInvalid (): boolean {
    return this.formNewpost.get('category').invalid && this.formNewpost.get('category').touched;
  }

  get productStateInvalid (): boolean {
    return this.formNewpost.get('status').invalid && this.formNewpost.get('status').touched;
  }

  get productPriceInvalid (): boolean {
    return this.formNewpost.get('price').invalid && this.formNewpost.get('price').touched;
  }

  get productDescriptionInvalid (): boolean {
    return this.formNewpost.get('description').invalid && this.formNewpost.get('description').touched;
  }

  get productImg1Invalid (): boolean {
    return this.formNewpost.get('pictures1').invalid && this.formNewpost.get('pictures1').touched;
  }

  get productImg2Invalid (): boolean {
    return this.formNewpost.get('pictures2').invalid && this.formNewpost.get('pictures2').touched;
  }

  get productImg3Invalid (): boolean {
    return this.formNewpost.get('pictures3').invalid && this.formNewpost.get('pictures3').touched;
  }

  get productRangeInvalid (): boolean {
    return this.formNewpost.get('bookingLength').invalid && this.formNewpost.get('bookingLength').touched;
  }

  //Método que crea el formulario
  createFormNewpost(): void {
    //se llama al form y se añade los campos
    this.formNewpost = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      status: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      pictures1: ['', [Validators.required]],
      pictures2: ['', [Validators.required]],
      pictures3: ['', [Validators.required]],
      bookingLength: ['', [Validators.required]],
    });
  }

  saveNewpostForm(): void {
    if (this.formNewpost.valid) {
      // console.log('Este es el form', this.formNewpost.value);
            
      this.productService.saveProduct("http://localhost:3000/products", this.formNewpost.value)
      .then(data => {
        // console.log(data);
      });
      
      this.formNewpost.reset();
      swal("Bien hecho!", "El producto se ha subido correctamente", "success");
      this.router.navigateByUrl('/home');
    } else {
      swal("Oooops!", "Por favor, rellena los campos requeridos", "error");
    }
  }
}
