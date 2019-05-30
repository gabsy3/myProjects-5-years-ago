import { Component, OnInit } from '@angular/core';
import { image } from './carousle.model';
import { CarousleService } from './carousle.service';

@Component({
  selector: 'app-carousle',
  templateUrl: './carousle.component.html',
  styleUrls: ['./carousle.component.css']
})
export class CarousleComponent implements OnInit {
  image: image;
  constructor(private carousleService: CarousleService) {
    this.image = null;
  }

  ngOnInit() {
    this.image = this.carousleService.getFirstImage();
  }
  nextImage(){
    this.image = this.carousleService.next(this.image);
    
  }
  prevImage(){
    this.image = this.carousleService.prev(this.image);
  }
}
