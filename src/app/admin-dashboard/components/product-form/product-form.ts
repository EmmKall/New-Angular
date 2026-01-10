import { Component, input, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductI } from '@products/interfaces/Product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  imports: [
    ReactiveFormsModule
  ],
})
export class ProductFormComponent {

  updateProductE = output<any>();
  updateIsEditE   = output<void>();

  product = input.required<ProductI>();

  isEdit = input<boolean>(false);

  constructor() {}

  ngOnInit(): void {
    this.fillProductForm();
  }

  productForm = new FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
    price: FormControl<number>;
    stock: FormControl<number>;
  }>({
    title:       new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)], }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(30)], }),
    price:       new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(1)], }),
    stock:       new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)], }),
  });

  fillProductForm(): void {
    const {title, description, price, stock} = this.product();
    this.productForm.patchValue({ title, description, price, stock });
  }

  toggleEdit(): void {
    this.updateIsEditE.emit();
    if(!this.isEdit) this.fillProductForm();
  }

  updateProduct(): void {
    const { title, description, price, stock } = this.productForm.value!;
    this.updateProductE.emit({title, description, price, stock });
  }

}
