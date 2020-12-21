import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrls: ['./each-product.component.css']
})
export class EachProductComponent implements OnInit {

  productId = null;
  product = [];

  constructor( private router: ActivatedRoute,
               private productService: ProductService ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      // console.log(params);
      this.productId = params["id"];

      this.serviceCall()
      
      // console.log(this.productId);
      // console.log(this.product);
      
    });

  };

  async serviceCall() {
    await this.productService.getProductsById(this.productId)
    this.product = this.productService.product;
    // console.log(this.product);

  };

}
