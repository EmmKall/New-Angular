import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductTableComponent } from '@products/components/product-table/product-table.component';
import { ProductI } from '@products/interfaces/Product.interface';
import { optionsProductsI, ProductsService } from '@products/services/Products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-admin-page',
  templateUrl: './products-admin-page.component.html',
  styleUrls: ['./products-admin-page.component.css'],
  imports: [
    ProductTableComponent
  ]
})
export class ProductsAdminPageComponent implements OnInit {

  activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductsService = inject(ProductsService);

  currentPage: number = 1;

  optionsProducts: optionsProductsI = {
    limit:  10,
    offset: 0,
    gender: '',
  };

  optionPerPage: number[] = [10, 20, 30, 50];
  totalPages: number = 0;

  productsAdmin: ProductI[] = this.productService.productsAdmin();

  constructor() { }

  ngOnInit() {
    /* this.activatedRouter.queryParamMap.subscribe(params => {
      const page = params.get('page');
      this.currentPage = page ? parseInt(page) : 1;
      this.optionsProducts.offset = (this.currentPage - 1) * this.optionsProducts.limit;
      console.log(this.optionsProducts);
    }); */
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts(this.optionsProducts).subscribe(data => {
      const {pages, products} = data;
      const map = new Map<string, any>();
      [...this.productsAdmin, ...products].forEach(product => {
        map.set(product.id, product);
      });
      this.productsAdmin = Array.from(map.values());
      this.totalPages = pages;
    });
  }

  updateLimit(limit: number): void {
    this.optionsProducts.limit = limit;
    this.getProducts();

    const { limit: perPege, offset } = this.optionsProducts;
    console.log(perPege, offset);
    console.log( (offset + 1) * perPege );

  }

  updateOffset(offset: number): void {
    this.optionsProducts.offset = offset;
    this.getProducts();
  }

  updateGender(gender: string): void {
    this.optionsProducts.gender = gender;
    this.getProducts();
  }

}
