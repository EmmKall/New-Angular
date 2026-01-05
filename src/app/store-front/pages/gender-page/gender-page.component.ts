import { Component, effect, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductI } from '@products/interfaces/Product.interface';
import { map, tap } from 'rxjs';
import { ProductCardComponent } from "@products/components/product-card/product-card.component";
import { optionsProductsI, ProductsService } from '@products/services/Products.service';

@Component({
  selector: 'app-gender-page',
  templateUrl: './gender-page.component.html',
  styleUrls: ['./gender-page.component.css'],
  imports: [
    ProductCardComponent
],
})
export class GenderPageComponent implements OnInit {

  productsService: ProductsService = inject(ProductsService);

  activatedRouter: ActivatedRoute = inject(ActivatedRoute);

  gender = toSignal(this.activatedRouter.params.pipe(map(params => params['gender'])));

  products: ProductI[] = [];
  totalPages: number = 0;

  optionsProducts: optionsProductsI = {
    limit: 10,
    offset: 0,
    gender: this.gender(),
  };

  genderEffect = effect((cleanUp) => {
    this.optionsProducts.gender = this.gender();
    this.getProducts();
  });

  constructor() { }

  ngOnInit() { }

  getProducts(): void {
    this.products = [];
    this.productsService.getProducts(this.optionsProducts).subscribe(resp => {
      const {pages, products} = resp;
      this.totalPages = pages;
      this.products = products;
      //this.productsData.update(data => [...data, ...products]);
    });
  }

}
