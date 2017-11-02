import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  // initial variables
  navListItem:[any];
  constructor() { }

  ngOnInit() {
    this.navListItem = [{
      dealName:"All deals",
      desc:"all deals",
      active:true
    },{
      dealName:"Deal of the Day",
      desc:"today deals & offers",
      active:false
    },{
      dealName:"Saving & Sales",
      desc:"saving and sales",
      active:false
    },{
      dealName:"Coupons & Vouchers",
      desc:"coupons and vouchers",
      active:false
    },{
      dealName:"Combo & Bundles",
      desc:"combo and bundles",
      active:false
    }];
  }

}
