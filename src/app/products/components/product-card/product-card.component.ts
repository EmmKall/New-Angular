import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment';
import { Gender, ProductI } from '@products/interfaces/Product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [
    RouterLink,
    SlicePipe,
    CurrencyPipe,
    ProductImagePipe,
  ]
})
export class ProductCardComponent implements OnInit {

  productData = input.required<ProductI>();
  urlImg: string = `${environment.apiTeloShop}files/product/`;

  imngUrl = computed(() => {
    const urlImg = `${this.urlImg}${this.productData().images[0]}`;
    return urlImg;
  });

  constructor() { }

  ngOnInit() {}

}
