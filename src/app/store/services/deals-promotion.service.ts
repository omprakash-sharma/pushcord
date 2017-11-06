import { Injectable } from '@angular/core';

@Injectable()
export class DealsPromotionService {
  // initial variables
  allDeals:{};
  constructor() {
    this.allDeals = {
      "status":"success",
      "list":[
        {
          "All Deals":[
            {
              "Best Sellers":[
                {
                  imgUrl:'https://tshop.r10s.jp/playerz/cabinet/accessory/04017264/imgrc0061794126.jpg?fitin=330:330',
                  offerDescriprion:"Upto 50% Off vouchers on Selected items at Columbia Spoartswear in Al Western Ethnic Brand.",
                  stock:"3 voucher left",
                  stockDescription:"",
                  nearBy:"3 Km away",
                  sellerPriceFrom:"AED 275",
                  sellerPriceTo:"",
                  productDetails:{
                    brandTag:"brandUrl",
                    title:"Columbia Fashion",
                    category:"Clothing Store",
                    rating:3
                  }
                }
              ],
              "Most Popular":[
                {
                  imgUrl:'https://www.khaleejtimes.com/storyimage/KT/20170807/ARTICLE/170119232/AR/0/AR-170119232.jpg&MaxW=780&imageVersion=16by9&NCS_modified=20170807195425',
                  offerDescriprion:"Guided Dubai Bus Tour in a Choice of 10 Languages for a child or Up to Twelve years old.",
                  stock:"2 days left",
                  stockDescription:"Limted time offer",
                  nearBy:"53 Km away",
                  sellerPriceFrom:"AED 45",
                  sellerPriceTo:"",
                  productDetails:{
                    brandTag:"brandUrl",
                    title:"Royal Blue Tours",
                    category:"Tourism & Travels",
                    rating:4.1
                  }
                }
              ],
              "Regular":[
                {
                  imgUrl:'https://thumbnails.trvl-media.com/xPJ_gfokFOMkFEfHtlABcbU-aKQ=/cdn.lemediavault.com/images/673feb8149088c84201114f1687bd8f5.jpeg',
                  offerDescriprion:"Earn 25,000 Expedia + bonus points and stay at a VIP Acess Hotel",
                  stock:"23 hours left",
                  stockDescription:"Limited time offer",
                  nearBy:"18 Km away",
                  sellerPriceFrom:"AED 5,000",
                  sellerPriceTo:"",
                  productDetails:{
                    brandTag:"brandUrl",
                    title:"Expedia",
                    category:"Tourism & Travels",
                    rating:1
                  }
                }
              ],
              "Just Arrived":[
                {
                  imgUrl:'https://static3.ethoswatches.com/the-watch-guide/wp-content/uploads/2017/08/POST.jpg',
                  offerDescriprion:"25% - 35% Off on all watches, Price inc. VAT + delivery charges",
                  stock:"5 days left",
                  stockDescription:"Limeted time offer",
                  nearBy:"2.7 Km away",
                  sellerPriceFrom:"AED 4,500",
                  sellerPriceTo:"AED 6,500",
                  productDetails:{
                    brandTag:"brandUrl",
                    title:"Torsten Nagengast",
                    category:"Watch Company",
                    rating:4
                  }
                }
              ]
            }
          ],
          "Deal of the Day":["deal of the day comming soon......"],
          "Saving & Sales":["Saving & Sales are comming soon....."],
          "Coupons & Vouchers":[],
          "Combo & Bundles":[]
        }
      ]
    };
   }

  getAllDeals(){
    return this.allDeals;
  }
}
