import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFormComponent } from '@dashboard/components/product-form/product-form';
import { ProductI } from '@products/interfaces/Product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { ProductsService } from '@products/services/Products.service';

@Component({
  selector: 'app-product-admin-page',
  templateUrl: './product-admin-page.component.html',
  styleUrls: ['./product-admin-page.component.css'],
  imports: [
    ReactiveFormsModule,
    ProductImagePipe,
    ProductFormComponent,
  ]
})
export class ProductAdminPageComponent implements OnInit {

  router: Router = inject(Router);
  productService: ProductsService = inject(ProductsService);
  activatedRouter: ActivatedRoute = inject(ActivatedRoute);

  idProduct: string = this.activatedRouter.snapshot.params['id'] || '';
  product: ProductI | null = null;

  isLoading: boolean = true;

  productForm = new FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
    price: FormControl<number>;
    stock: FormControl<number>;
  }>({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)], }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(30)], }),
    price: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(1)], }),
    stock: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)], }),
  });

  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.idProduct === ''){
      this.backToProducts();
      return;
    }
    this.product = this.productService.searchProductById(this.idProduct, true);
    console.log(this.product);
    this.isLoading = false;
    if(this.product === null) this.backToProducts();
  }

  toggleEdit(): void { console.log('isEdit');
    this.isEdit = !this.isEdit;
    console.log(this.isEdit);
  }

  backToProducts(): void {
    this.router.navigate(['/admin/products']);
  }

  onSave(data: any): void {
    console.log(data);
  }

}
