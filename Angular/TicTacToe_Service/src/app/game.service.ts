import { Injectable } from '@angular/core';
import { card } from './card.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  cards: card[];
  gameOver: boolean;
  player: boolean;
  playerName: string;
  constructor() {
    this.cards = [];
    this.gameOver = false;
    this.player = true;
    this.playerName = "player 1";
    this.initCard();
  }
  initCard(): void {
    this.cards = [
      { index: 0, content: "", selected: false },
      { index: 1, content: "", selected: false },
      { index: 2, content: "", selected: false },
      { index: 3, content: "", selected: false },
      { index: 4, content: "", selected: false },
      { index: 5, content: "", selected: false },
      { index: 6, content: "", selected: false },
      { index: 7, content: "", selected: false },
      { index: 8, content: "", selected: false }
    ]
  }
  getCard(): card[] {
    return this.cards;
  }
  selectCard(card: card): void {
    if (this.cards[card.index].selected) {
      return;
    }
    let content = this.setContent();
    this.cards[card.index].content = content;
    this.cards[card.index].selected = true;
    this.winOptions();
    if (!this.gameOver) {
      this.changePlayer();
    }
  }
  setContent(): string {
    if (this.player) {
      return "X";
    }
    else {
      return "O";
    }
  }
  changePlayer(): void {
    this.player = !this.player;
    if (this.player) {
      this.playerName = "player 1"
    }
    else {
      this.playerName = "player 2"
    }
  }
  winOptions(): void {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.cards[a] && this.cards[a].content === "X" && this.cards[b].content === "X" && this.cards[a].content === "X" && this.cards[c].content === "X") {
        this.gameOver = true;
      }
      else if (this.cards[a] && this.cards[a].content === "O" && this.cards[b].content === "O" && this.cards[a].content === "O" && this.cards[c].content === "O") {
        this.gameOver = true;
      }
    }
    if(this.cards.every(card => card.selected === true) && !this.gameOver){
      this.playerName = "No one";
      this.gameOver = true;
    }
  }

}
