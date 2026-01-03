import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from "@products/components/product-card/product-card.component";
import { ProductI, ProductResponseI } from '@products/interfaces/Product.interface';
import { optionsProductsI, ProductsService } from '@products/services/Products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    /* JsonPipe, */
    ProductCardComponent,
  ]
})
export class HomePageComponent implements OnInit {

  productsService: ProductsService = inject(ProductsService);

  productsData  = this.productsService.productsData;

  optionsProducts: optionsProductsI = {
    limit: 10,
    offset: 0,
    gender: ''
  };

  /* productsResource = rxResource<ProductResponseI[], {}>({
    params: () => ({}),
    stream: ({ params }) => this.productsService.getProducts()
  }); */
  products: ProductI[] = [];
  constructor() {
    this.productsData.set([]);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsData.set([]);
    this.products = [];
    this.productsService.getProducts(this.optionsProducts).subscribe(resp => {
      this.products = resp;
      //this.productsData.update(resp => [...resp, ...resp]);
    });
  }


}
