import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, input, OnInit, viewChild } from '@angular/core';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//import 'swiper/css';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
  imports: [
    CommonModule,
    ProductImagePipe,
  ]
})

export class ProductCarouselComponent implements OnInit, AfterViewInit {

  title  = input.required<string>();
  images = input.required<string[]>();

  swiperDiv = viewChild.required<ElementRef>('productSwiper');

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    /* const element = this.swiperDiv().nativeElement;
    if(!element) return; */

    /* const swiper = new Swiper(this.swiperDiv().nativeElement, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      modules: [Navigation, Pagination],
    }); */
  }

}
