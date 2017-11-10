import { Component, OnInit } from '@angular/core';

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

  constructor(private lineCategoryService:LineCategoryService) {
    this.allLinesCategoryList = this.lineCategoryService.getAllLinesCategory();
    //console.log(this.allLinesCategoryList)
   }

  ngOnInit() {
    this.filterNavListItem();
    this.productsItemList = this.allLinesCategoryList['list'].map(catItem =>{
      return catItem.subCategory;
    })[0];
    console.log(this.productsItemList)
  }

  filterNavListItem(){
    var tempNavList= Array<any>();
    this.navListItems = this.allLinesCategoryList['list'].map(catItem => {
      let tempNavItem = <any>{};
      tempNavItem.subCategory = Array<any>();

      tempNavItem.id = catItem.id;
      tempNavItem.category = catItem.category;
      if(catItem.subCategory.length){
        for(let subCatItem of catItem.subCategory){
          tempNavItem.subCategory.push({id:subCatItem.id,subCategoryName:subCatItem.subCategoryName,totalItem:subCatItem.totalItem});
        };
      }
      return tempNavItem;
    });
    console.log(this.navListItems)
  }
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
