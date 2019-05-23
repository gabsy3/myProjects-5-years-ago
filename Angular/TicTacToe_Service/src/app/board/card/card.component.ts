import { Component, Input } from '@angular/core';
import { card } from 'src/app/card.model';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: card;
  constructor(private gameService: GameService) { }
  setCard() {
    this.gameService.selectCard(this.card);
  }
}
