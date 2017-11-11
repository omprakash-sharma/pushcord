import { Component, OnInit, Renderer } from '@angular/core';

import { LineCategoryService } from '../services/line-category.service'

@Component({
  selector: 'lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
  providers:[LineCategoryService]
})
export class LinesComponent implements OnInit {
  // initial variables
  navListItems:navListType[] = [];
  allLinesCategoryList=<any>{};
  productsItemList = Array<any>();
  hasItems:boolean = true;

  constructor(private lineCategoryService:LineCategoryService, private render:Renderer) {
    this.allLinesCategoryList = this.lineCategoryService.getAllLinesCategory();
    this.navListItems = this.lineCategoryService.getNavListItem()['list'];
   };

  ngOnInit() {
    this.productsItemList = this.allLinesCategoryList['data']['Laptop/Notebooks'];
    this.checkItemLength(this.productsItemList.length);
  };

  getItems(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let value = target.innerText;
    this.productsItemList = this.allLinesCategoryList['data'][value];
    this.checkItemLength(this.productsItemList.length);
    // this.render.setElementClass(target, "selected",true);
  };
  checkItemLength(itemLength):void{
    if(itemLength == undefined || typeof itemLength == undefined || !itemLength){
      this.hasItems = false;
    }else{
      this.hasItems = true;
    }
  };
}

export interface navListType{
  id:number,
  category:string,
  subCategory:[
    {
      id:number,
      subCategoryName:string,
      totalItem:number
    }
  ]
}
