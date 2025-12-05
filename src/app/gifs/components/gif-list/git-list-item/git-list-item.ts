import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GifI } from 'src/app/gifs/interfaces/Gif';

@Component({
  selector: 'app-git-list-item',
  imports: [
    CommonModule,
  ],
  templateUrl: './git-list-item.html',
  styleUrl: './git-list-item.css',
})
export class GitListItem {

  gif = input.required<GifI>();

}
