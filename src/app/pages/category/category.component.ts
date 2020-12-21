import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryName = null;
  categoryPics = null;
  products = [];
  
  constructor( private router: ActivatedRoute,
               private productService: ProductService,
               private router2: Router ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      // console.log(params);
      this.categoryName = params["name"];
      
      this.serviceCall()
      // console.log(this.categoryName);
      
    });

    this.router.params.subscribe((params) => {
      // console.log(params);
      this.categoryPics = `../../../assets/${params["name"]}.svg`;
      
      this.serviceCall()
      
      // console.log("FOTOS", this.categoryPics);
      // console.log(this.products);
      
    });
  };

  async serviceCall() {
    await this.productService.getProductsByCatName(this.categoryName)
    this.products = this.productService.products;
    // console.log("CATEGORY COMPONENT", this.products);

  };

  redirect(id) {
    this.router2.navigateByUrl(`/each-product/${id}`)

  }

}
