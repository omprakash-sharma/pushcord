import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'ads-slider',
  templateUrl: './ads-slider.component.html',
  styleUrls: ['./ads-slider.component.css']
})
export class AdsSliderComponent implements OnInit {
  items: Array<any> = [];
  public carouselTileItems: Array<any>;
  public carouselTile: any;
  constructor() {
    this.items = [
      {name: 'assets/images/carousel_img/img-1.jpg'},
      {name: 'assets/images/carousel_img/img-2.jpg'},
      {name: 'assets/images/carousel_img/img-3.jpg'},
      {name: 'assets/images/carousel_img/img-4.jpg'},
      {name: 'assets/images/carousel_img/img-5.jpg'},
      {name: 'assets/images/carousel_img/img-6.jpg'}
    ];
   }

  ngOnInit() {
    this.carouselTileItems = this.items;
    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 500,
      interval: 4000,
      point: {visible: true,
      pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 2px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
           background: #edf1f6;
          }
          .ngxcarouselPoint li {
               display: inline-block;
               border-radius: 50%;
               border: 1px solid #999;
               padding: 2px;
               margin: 0 10px;
               transition-timing-function: cubic-bezier(.17, .67, .83, .67);
               transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
              border: 1px solid #eee;
          }
        `
      },
      load: 2,
      loop: true,
      custom: 'tile',
      touch: true,
      dynamicLength: true
    }

  }


}



