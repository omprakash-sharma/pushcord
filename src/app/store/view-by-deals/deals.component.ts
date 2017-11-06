import { Component, OnInit } from '@angular/core';
import { DealsPromotionService } from '../services/deals-promotion.service'

@Component({
  selector: 'deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
  providers: [DealsPromotionService]
})
export class DealsComponent implements OnInit{
  // initial variables
  navListItem = [new navListType()];
  dealPromotionItems:{};
  prevNavItem;
  constructor(private dealPromotion:DealsPromotionService) { 
    this.dealPromotionItems = this.dealPromotion.getAllDeals();
  }

  ngOnInit() {
    this.setNavList(); 
    
  }
  showDealBy(currNavItem){
    if(!currNavItem.active){
      this.prevNavItem.active = false;
      currNavItem.active = true;
    }else{

    }
    this.prevNavItem = currNavItem;
    console.log(currNavItem)
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
              this.prevNavItem = tNavItem;
          }else{
              tNavItem.active = true;
              this.navListItem.push(tNavItem);
          }
        }
      }
    }
  }

}
 export class navListType{
  dealName:string;
  active:boolean;
  constructor(){}
}
