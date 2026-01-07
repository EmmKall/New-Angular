import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from "@products/components/product-card/product-card.component";
import { ProductI, ProductResponseI } from '@products/interfaces/Product.interface';
import { optionsProductsI, ProductsService } from '@products/services/Products.service';
import { PaginationContentComponent } from '@shared/components/pagination-content/pagination-content.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    /* JsonPipe, */
    ProductCardComponent,
    PaginationContentComponent,
  ]
})
export class HomePageComponent implements OnInit {

  productsService: ProductsService = inject(ProductsService);

  productsData  = this.productsService.productsData;

  optionsProducts: optionsProductsI = {
    limit:  10,
    offset: 0,
    gender: '',
  };

  /* productsResource = rxResource<ProductResponseI[], {}>({
    params: () => ({}),
    stream: ({ params }) => this.productsService.getProducts()
  }); */

  products: ProductI[] = [];
  totalPages: number = 0;

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
      const {pages, products} = resp;
      this.totalPages = pages;
      this.products = products;
      this.productsData.update(data => [...data, ...products]);
    });
  }

  updateOffsetProducts(offset: any): void {
    this.optionsProducts.offset = (offset * this.optionsProducts.limit);
    this.getProducts();
  }

}
