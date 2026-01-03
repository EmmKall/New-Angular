import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { ProductI, ProductResponseI } from '@products/interfaces/Product.interface';
import { map, Observable, tap } from 'rxjs';

export interface optionsProductsI {
    limit: number,
    offset: number,
    gender: string
  }

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http: HttpClient = inject(HttpClient)
  private url: string = `${environment.apiTeloShop}`;

  productsData  = signal<ProductI[]>([]);

  constructor() { }

  getProducts(options: optionsProductsI): Observable<ProductI[]>{
    const {limit, offset, gender} = options;
    const newSet: number    = limit * offset;
    const url: string = `${this.url}products`;
     return this.http.get<ProductResponseI>(url, {params: { limit, offset: newSet, gender } }).pipe(
      tap(resp => {
        const data = [... new Set([...this.productsData(), ...resp.products])];
        this.productsData.set(data);
      }),
      map((resp) => resp.products)
    );
  }

  searchProductById(id: string): ProductI | null {
    const product = this.productsData().find( product => product.id === id);
    return product ? product : null;
  }

}
