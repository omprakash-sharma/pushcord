import { Component, OnInit } from '@angular/core';
import { DealsPromotionService } from '../services/deals-promotion.service'
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  providers: [DealsPromotionService]
})
export class DealsComponent implements OnInit{
  // initial variables
  navListItem: navListType[] = [];
  dealPromotionItems:{};
  allProductsItemList:[any];

  constructor(private dealPromotion:DealsPromotionService, private dataSharing:DataSharingService) { 
    this.dealPromotionItems = this.dealPromotion.getAllDeals();
  }

  ngOnInit() {
    this.setNavList(); 
    //temp
    this.allProductsItemList = this.dealPromotionItems['list'][0]['All Deals'];
    console.log(this.allProductsItemList)
  };
  showDealBy(currNavItem){
    this.switchNav(this.navListItem,currNavItem);
    this.allProductsItemList = this.dealPromotionItems['list'].map(dealType =>{
      return dealType[currNavItem.dealName];
    })[0];
  };
  addToCart(selectedProduct){
    this.dataSharing.addProductsToStore(selectedProduct);
  };
 


  // set navList
  setNavList(){
    if(this.dealPromotionItems){
      for(let items of this.dealPromotionItems['list']){
        let keyList = Object.keys(items);
        for(let keyItem of keyList){
          let tNavItem = {
            dealName:keyItem,
            active:false
          };
          if(tNavItem.dealName !== 'All Deals'){
              this.navListItem.push(tNavItem);
          }else{
              tNavItem.active = true;
              this.navListItem.push(tNavItem);
          }
        }
      }
    }
  };
  // switch nav:use as common
  switchNav(navListItem,currNavItem):void{
    navListItem = navListItem.map(navItem =>{
      if(navItem.active)
        navItem.active = false;
      currNavItem.active = true;
      return navItem;
    });
  };

}
 export interface navListType{
  dealName:string,
  active:boolean
  //constructor(){}
}
