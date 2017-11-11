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
                  label:"Best Sellers",
                  imgUrl:'https://cdn.shopify.com/s/files/1/0262/3477/products/apparel-the-agent-jacket-1.jpg?v=1482988232',
                  offerDescriprion:"Upto 50% Off vouchers on Selected items at Columbia Spoartswear in Al Western Ethnic Brand.",
                  stock:"3 voucher left",
                  stockDescription:"",
                  nearBy:"3 Km away",
                  sellerPriceFrom:"AED 275",
                  sellerPriceTo:"",
                  productDetails:{
                    brandTag:"https://cdn.expertise.com/logos/columbia-sc_sc_martial-arts-classes_131.jpg",
                    title:"Columbia Fashion",
                    category:"Clothing Store",
                    rating:3
                  }
                },
                {
                  label:"Most Popular",
                  imgUrl:'http://indiancitys.com/durgapur/Avijit-Tours-and-Travel-Agency-durgapur-burdwan/images/header.jpg',
                  offerDescriprion:"Guided Dubai Bus Tour in a Choice of 10 Languages for a child or Up to Twelve years old.",
                  stock:"2 days left",
                  stockDescription:"Limted time offer",
                  nearBy:"53 Km away",
                  sellerPriceFrom:"AED 45",
                  sellerPriceTo:"",
                  productDetails:{
                    brandTag:"https://www.hubbdxb.com/upload/iblock/07b/07b5c66cad213546aac38c8a36a9af61.jpeg",
                    title:"Royal Blue Tours",
                    category:"Tourism & Travels",
                    rating:4.1
                  }
                },
                {
                  label:"Regular",
                  imgUrl:'https://thumbnails.trvl-media.com/xPJ_gfokFOMkFEfHtlABcbU-aKQ=/cdn.lemediavault.com/images/673feb8149088c84201114f1687bd8f5.jpeg',
                  offerDescriprion:"Earn 25,000 Expedia + bonus points and stay at a VIP Acess Hotel",
                  stock:"23 hours left",
                  stockDescription:"Limited time offer",
                  nearBy:"18 Km away",
                  sellerPriceFrom:"AED 5,000",
                  sellerPriceTo:"",
                  productDetails:{
                    brandTag:"http://americanlivewire.com/wp-content/uploads/Expedia-Logo.png",
                    title:"Expedia",
                    category:"Tourism & Travels",
                    rating:1
                  }
                },
                {
                  label:"Just Arrived",
                  imgUrl:'https://static3.ethoswatches.com/the-watch-guide/wp-content/uploads/2017/08/POST.jpg',
                  offerDescriprion:"25% - 35% Off on all watches, Price inc. VAT + delivery charges",
                  stock:"5 days left",
                  stockDescription:"Limeted time offer",
                  nearBy:"2.7 Km away",
                  sellerPriceFrom:"AED 4,500",
                  sellerPriceTo:"AED 6,500",
                  productDetails:{
                    brandTag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSFeri8jOPXlv9VQQ3PV32Ra64HifM_wab1p0gF9Jt8ysawSj",
                    title:"Torsten Nagengast",
                    category:"Watch Company",
                    rating:4
                  }
                }
          ],
          "Deal of the Day":[
            {
              label:"Best Sellers",
              imgUrl:'http://www.rowingmachineking.com/wp-content/uploads/2015/07/Amazon-Prime.png',
              offerDescriprion:"Upto 50% Off vouchers on Selected items at Columbia Spoartswear in Al Western Ethnic Brand.",
              stock:"3 voucher left",
              stockDescription:"",
              nearBy:"3 Km away",
              sellerPriceFrom:"AED 275",
              sellerPriceTo:"",
              productDetails:{
                brandTag:"https://cdn.expertise.com/logos/columbia-sc_sc_martial-arts-classes_131.jpg",
                title:"New Deals",
                category:"deal of the day",
                rating:3
              }
            },
            {
              label:"Most Popular",
              imgUrl:'http://3.bp.blogspot.com/-NIQJD4UfRTQ/V3SrGUsXz8I/AAAAAAAACIc/7E7NyxUtuNw10zJRYYRC4F7-Mp_gi0WgwCK4B/s1600/Amazon_Deal_of_the_Day_Offer.jpg',
              offerDescriprion:"Guided Dubai Bus Tour in a Choice of 10 Languages for a child or Up to Twelve years old.",
              stock:"2 days left",
              stockDescription:"Limted time offer",
              nearBy:"53 Km away",
              sellerPriceFrom:"AED 45",
              sellerPriceTo:"",
              productDetails:{
                brandTag:"https://www.hubbdxb.com/upload/iblock/07b/07b5c66cad213546aac38c8a36a9af61.jpeg",
                title:"New Deals",
                category:"deal of the day",
                rating:4.1
              }
            },
            {
              label:"Regular",
              imgUrl:'https://1.bp.blogspot.com/-WtOko-qdFjw/WLYZ1_8S0eI/AAAAAAAA1AQ/DcFskEoDGQ4VSWSRY2MdDiV2j1IN-f3MACLcB/s1600/subway-6-dollar-footlong-each-day-of-the-week-promo.jpg',
              offerDescriprion:"Earn 25,000 Expedia + bonus points and stay at a VIP Acess Hotel",
              stock:"23 hours left",
              stockDescription:"Limited time offer",
              nearBy:"18 Km away",
              sellerPriceFrom:"AED 5,000",
              sellerPriceTo:"",
              productDetails:{
                brandTag:"http://americanlivewire.com/wp-content/uploads/Expedia-Logo.png",
                title:"New Deals",
                category:"deal of the day",
                rating:1
              }
            }
          ],
          "Saving & Sales":[],
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
