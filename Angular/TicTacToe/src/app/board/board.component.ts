import { Component, OnInit } from '@angular/core';
import { card } from '../card.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: card[];
  constructor(private gameService: GameService) {
    this.cards = [];
    this.gameService.initCard();
  }

  ngOnInit() {
    this.cards = this.gameService.getCard();
  }

}
