import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  //creacion referencia al formulario con su tipo
  formLogin: FormGroup;

  //Se declara un FormBuilder    //llamamos al auth
  constructor(private fb: FormBuilder, 
              private auth: AuthService, 
              private router: Router) { 
    //creación del formulario con un metodo para mejor organización
    this.createForm();
  }

  ngOnInit(): void {
  }

  // validación de email y password
  get emailInvalid (): boolean {
    return this.formLogin.get('email').invalid && this.formLogin.get('email').touched;
  }

  get passwordInvalid (): boolean {
    return this.formLogin.get('password').invalid && this.formLogin.get('password').touched;
  }

  //Metodo que crea el formulario
  createForm(): void {
    //se llama a fb y a su método group para añadir campos del formulario
    this.formLogin = this.fb.group({
      //['valor por defecto', validSincro, validAsin]
      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  async saveForm() {
    console.log(this.formLogin);
    
    const loginResult = await this.auth.login(this.formLogin);
    // console.log('el resultado del login es', loginResult);

    if (loginResult) {
      this.router.navigateByUrl('/general');
    } else {
      swal("Oooops!", "Usuario o contraseña incorrectos", "error");
      // alert('Usuario o contraseña incorrecto. Vuelve a intentarlo!');
    }
  }

}
