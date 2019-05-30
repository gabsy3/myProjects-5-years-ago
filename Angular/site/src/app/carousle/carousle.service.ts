import { Injectable } from '@angular/core';
import { image } from './carousle.model';

@Injectable({
  providedIn: 'root'
})
export class CarousleService {
  images: image[];
  constructor() {
    this.images = [];
    this.initImages();
  }
  initImages() {
    this.images = [
      { id: 0, source: "assets/carousle-img/news1.jpg", content: "news content 1 ... " },
      { id: 1, source: "assets/carousle-img/news2.jpg", content: "news content 2 ... " },
      { id: 2, source: "assets/carousle-img/news3.jpg", content: "news content 3 ... " }
    ];
  }
  getFirstImage() {
    return this.images[0];
  }
  next(img : image) {
    const imageId = img.id + 1;
    if(this.images[imageId]){
      return this.images[imageId];
    }
    return this.images[0];
  }
  prev(img : image) {
    const imageId = img.id - 1;
    if(this.images[imageId]){
      return this.images[imageId];
    }
    return this.images[this.images.length-1];
  }
}
