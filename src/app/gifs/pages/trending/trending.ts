import { Component } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifI } from '../../interfaces/Gif';

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export default class Trending {

  gifs: GifI[] = [
    {
      id: '1',
      title: 'Image 1',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    },
    {
      id: '2',
      title: 'Image 2',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      id: '3',
      title: 'Image 3',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      id: '4',
      title: 'Image 4',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      id: '5',
      title: 'Image 5',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
      id: '6',
      title: 'Image 6',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    },
    {
      id: '7',
      title: 'Image 7',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    },
    {
      id: '8',
      title: 'Image 8',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    },
    {
      id: '9',
      title: 'Image 9',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    },
    {
      id: '10',
      title: 'Image 10',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    },
    {
      id: '11',
      title: 'Image 11',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    },
  ];

}
