import { Component, inject, OnInit } from '@angular/core';
import { ProductI } from '@products/interfaces/Product.interface';
import { ProductsService } from '../../../products/services/Products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { CurrencyPipe } from '@angular/common';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  imports: [
    ProductCarouselComponent,
    CurrencyPipe,
    ProductImagePipe,
  ]
})
export class ProductPageComponent implements OnInit {

  private productService: ProductsService = inject(ProductsService);
  private activedRouted: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  idSlug: string = this.activedRouted.snapshot.params['idSlug'] ?? '';

  product: ProductI | null = null;

  constructor() { }

  ngOnInit() {
    if(!this.idSlug) this.router.navigate(['/']);
    this.getProductById();
  }

  getProductById(): void {
    this.product = this.productService.searchProductById(this.idSlug);
  }

}
