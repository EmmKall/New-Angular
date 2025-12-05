import { Component, input } from '@angular/core';
import { GitListItem } from './git-list-item/git-list-item';
import { GifI } from '../../interfaces/Gif';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gif-list',
  imports: [
    CommonModule,
    GitListItem,
  ],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css',
})
export class GifList {

  gifs = input.required<GifI[]>();

}
