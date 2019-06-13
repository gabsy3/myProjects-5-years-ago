import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board;
  numberOfItems: number;
  constructor() { 
    this.numberOfItems = null;
  }

  ngOnInit() {
    this.numberOfItems = 0;
  }
  addCart(){
    this.numberOfItems++;
  }
}
