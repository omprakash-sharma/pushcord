
import { Component, OnInit } from '@angular/core';
import { FrontStoreService } from '../services/front-store.service'

@Component({
  selector: 'fronts',
  templateUrl: './fronts.component.html',
  styleUrls: ['./fronts.component.css'],
  providers: [FrontStoreService]
})
export class FrontsComponent implements OnInit{
  // initial variables
  navListItem: navListType[] = [];
  dealPromotionItems:{};
  allProductsItemList:[any];

  constructor(private frontStoreService:FrontStoreService) { 
    this.dealPromotionItems = this.frontStoreService.getAllDeals();
  }

  ngOnInit() {
    this.setNavList(); 
    //temp
    this.allProductsItemList = this.dealPromotionItems['list'][0]['All Deals'];
    console.log(this.allProductsItemList)
  }
  showDealBy(currNavItem){
    this.switchNav(this.navListItem,currNavItem);
    let filData = this.dealPromotionItems['list'].map(dealType =>{
      return dealType[currNavItem.dealName];
    })[0];
    console.log(filData)
    //this.allProductsItemList = filData;
    //console.log(this.dealPromotionItems['list'][0]['All Deals'])
  }




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
