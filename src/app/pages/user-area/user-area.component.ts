import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
  }

  
  
}
