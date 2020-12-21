import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  user: any;
  userProducts: [];
  constructor( private auth: AuthService,
                private userService: UserRegistrationService,) {
                  this.user = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    province: ""
                  }
                }

  ngOnInit(): void {
    this.userData();
  }

  async userData() {
    await this.userService.getUser(localStorage.getItem('email'))
    this.user = this.userService.user;
    // console.log("Datos del usuario", this.user);

    await this.userService.getUserProduct(this.user._id)
    this.userProducts = this.userService.userProduct;
    // console.log("Datos productos", this.userProducts);
  };

  logout() {
    this.auth.logout();
  }
}
