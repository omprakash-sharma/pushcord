import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-store',
  templateUrl: './base-store.component.html',
  styleUrls: ['./base-store.component.css']
})
export class BaseStoreComponent implements OnInit {
  // initial variables
  _outerCellGt = '7px';
  viewByList:[viewByTab];

  constructor() { console.log("BaseStoreComponent connected.......") }

  ngOnInit() {
    this.viewByList = [
      {
        img_url:'https://media.npr.org/about/people/bios/biophotos/snelson_sq-2767caa78582a137346c4cd0281656a4872fa37d-s100-c85.jpg',
        title:'View By',
        sub_title:'Deals & Promation',
        load_view:'deals'
      },
      {
        img_url:'https://media.npr.org/about/people/bios/biophotos/snelson_sq-2767caa78582a137346c4cd0281656a4872fa37d-s100-c85.jpg',
        title:'View By',
        sub_title:'Fronts & Store',
        load_view:'fronts'
      },
      {
        img_url:'https://media.npr.org/about/people/bios/biophotos/snelson_sq-2767caa78582a137346c4cd0281656a4872fa37d-s100-c85.jpg',
        title:'View By',
        sub_title:'Lines & Category',
        load_view:'lines'
      } 
    ];
  }

}

export interface viewByTab{
  img_url?:string,
  title?:string,
  sub_title:string,
  load_view:string
}
