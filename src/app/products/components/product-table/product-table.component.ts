import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductI } from '@products/interfaces/Product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { optionsProductsI } from '@products/services/Products.service';
import { PaginationContentComponent } from '@shared/components/pagination-content/pagination-content.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  imports: [
    RouterLink,
    CurrencyPipe,
    ProductImagePipe,
    NgClass,
    PaginationContentComponent,
]
})
export class ProductTableComponent implements OnInit {

  updatePerPageE = output<number>();
  updateOffsetE  = output<number>();
  updateGenderE  = output<string>();

  products        = input.required<ProductI[]>();
  pages           = input<number>(1);
  currentPage     = input<number>(1);
  optionPerPage   = input<number[]>([10, 20, 30, 50]);
  optionsProducts = input<optionsProductsI>({ limit:  10, offset: 0, gender: '' });

  constructor() { }

  ngOnInit() { }

  updatePerPage(PerPage: string): void {
    const value = parseInt(PerPage);
    this.updatePerPageE.emit(value);
  }

  updateOffset(offset: number): void {
    this.updateOffsetE.emit(offset);
  }

  updateGender(gender: string): void {
    this.updateGenderE.emit(gender);
  }

}
