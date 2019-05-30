import { Injectable } from '@angular/core';
import {links} from './link-model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  links : links[];
  constructor() { 
    this.links = [];
    this.initLinks();
  }
  initLinks(){
    this.links = [
      {content : "ynet" , url : "https://www.ynet.co.il" , backgroundColor : "#a46060"},
      {content : "mako" , url : "https://www.mako.co.il" , backgroundColor : "#887870"},
      {content : "israel-hayom" , url : "https://www.israelhayom.co.il" , backgroundColor : "#6c9080"}
    ]
  }
  getLinks(){
    return this.links;
  }
}
