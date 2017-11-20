import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';


import { LineCategoryService } from '../services/line-category.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss'],
  providers:[LineCategoryService]
})
export class LinesComponent implements OnInit,OnDestroy {
  // initial variables
  navListItems:navListType[] = [];
  allLinesCategoryList=<any>{};
  productsItemList = Array<any>();
  hasItems:boolean = true;
  tempDataList: any=[];
  error:string;

  constructor(private lineCategoryService:LineCategoryService, private render:Renderer, private dataSharing:DataSharingService) {
    this.allLinesCategoryList = this.lineCategoryService.getAllLinesCategory();
    this.navListItems = this.lineCategoryService.getNavListItem()['list'];
   };

  ngOnInit() {
    this.productsItemList = this.allLinesCategoryList['data']['Laptop/Notebooks'];
    this.checkItemLength(this.productsItemList.length);

    this.dataSharing.getSelectedProductList().subscribe(
      data => this.tempDataList = data,
      error => this.error = error
    );
    this.dataSharing.newProductSharingSubject.subscribe(
      data => console.log(data)
    );
    console.log(this.tempDataList)
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

  addToCart(selectedProduct){
    this.dataSharing.addProductsToStore(selectedProduct);
  };
  ngOnDestroy(){
    this.dataSharing.newProductSharingSubject.complete();
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
