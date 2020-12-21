import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from "sweetalert";

@Component({
  selector: 'app-product-booking',
  templateUrl: './product-booking.component.html',
  styleUrls: ['./product-booking.component.css']
})
export class ProductBookingComponent implements OnInit {

  bookingForm: FormGroup;

  constructor ( private bookingFb: FormBuilder,
                private router: Router) { 
    this.createBookingForm();
  }

  ngOnInit(): void { }

  get invalidName(): boolean {
  return this.bookingForm.get("name").invalid && this.bookingForm.get("name").touched;
  }

  get invalidEmail(): boolean {
    return this.bookingForm.get("email").invalid && this.bookingForm.get("email").touched;
  }

  get invalidPhone(): boolean {
    return this.bookingForm.get("phone").invalid && this.bookingForm.get("phone").touched;
  }

  get invalidMessage(): boolean {
    return this.bookingForm.get("message").invalid && this.bookingForm.get("message").touched;
  }

  createBookingForm(): void {
    this.bookingForm = this.bookingFb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(70), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$")]],
      phone: ["", Validators.minLength(9)],
      message: ["",[Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
    });
  }

  // Event onclick submit
  saveBookingForm(): void {
    if (this.bookingForm.status === "INVALID") {
      swal("Oooops!", "Por favor, rellena los campos seleccionados", "error");
    } else {

      swal("Genial!", "Se ha enviado tu mensaje correctamente", "success");
    // console.log("Todo bien, FORMULARIO: ", this.bookingForm.value);

    this.bookingForm.reset();
    // this.router.navigateByUrl("/home")

    }
  }

}

