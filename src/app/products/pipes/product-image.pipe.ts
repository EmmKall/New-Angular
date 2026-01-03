import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@environments/environment';

@Pipe({
  name: 'productImage'
})
export class ProductImagePipe implements PipeTransform {

  urlImg: string = `${environment.apiTeloShop}files/product/`;

  transform(images: string | string[]): string {
    if(typeof(images) === 'string')
      return `${this.urlImg}${images}`;

    const image = images.at(0);
    if(!image)
      return `${this.urlImg}no-image.jpg`;

    return `${this.urlImg}${image}`;

  }

}
