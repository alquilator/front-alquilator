import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories = [];

  constructor( private router: Router,
               private productService: ProductService ) { }

  ngOnInit(): void {
    this.categories = this.productService.categories;
    // console.log(this.categories);
    

  }
  categoryRedirect(catName: string){
    this.router.navigateByUrl(`/category/${catName}`)
  }

}
