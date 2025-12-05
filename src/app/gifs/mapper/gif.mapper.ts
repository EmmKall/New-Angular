import { GifI, GifItem } from "../interfaces/Gif";

export class GifMapper {

  static toGifI(gifData: GifItem): GifI {
    return {
      id: gifData.id,
      title: gifData.title,
      img: gifData.images.original.url,
      url: '',
    };
  }

  static mapGiphyItemsToGifArray(items: GifItem[]): GifI[] {
    return items.map(this.toGifI);
  }

}
