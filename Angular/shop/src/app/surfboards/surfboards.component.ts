import { Component, OnInit } from '@angular/core';
import { boards } from './boards.model';
import { SurfboardsService } from './surfboards.service';


@Component({
  selector: 'app-surfboards',
  templateUrl: './surfboards.component.html',
  styleUrls: ['./surfboards.component.css']
})
export class SurfboardsComponent implements OnInit {
  boards: boards[];

  constructor(private surfboardsService: SurfboardsService) { }

  ngOnInit() {
    this.boards = [];
    this.initBoards();
  }

  initBoards() {
    this.boards = this.surfboardsService.getboards();
  }
}
