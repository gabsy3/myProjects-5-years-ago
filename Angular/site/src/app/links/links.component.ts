import { Component, OnInit } from '@angular/core';
import { links } from './link-model';
import { LinksService } from './links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: links[];
  constructor(private linksService: LinksService) {
    this.links = [];
  }

  ngOnInit() {
    this.links = this.linksService.getLinks();
  }
}
