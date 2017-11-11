import { Injectable } from '@angular/core';

@Injectable()
export class FrontStoreService {
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
                  imgUrl:'http://media.gettyimages.com/photos/columbia-sportswear-company-clothing-seattle-washington-picture-id535060505',
                  offerDescriprion:"",
                  stock:"3 voucher left",
                  stockDescription:"Shop since 2007",
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
                  imgUrl:'http://www.deppartners.com/project_images/list/AL%20ROSTAMANI%20BC-COVER.jpg',
                  offerDescriprion:"",
                  stock:"2 days left",
                  stockDescription:"Shop since 2007",
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
                  imgUrl:'https://thumbnails.trvl-media.com/LkAJBQbUMczcIo_govQlTk7XsD8=/cdn.lemediavault.com/images/c951a431aaff68a732259d225843ebde.jpeg',
                  offerDescriprion:"",
                  stock:"23 hours left",
                  stockDescription:"Shop since 2007",
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
                  imgUrl:'http://media.gettyimages.com/photos/employees-work-on-a-rollsroyce-engine-unit-as-it-passes-down-the-at-picture-id104277427',
                  offerDescriprion:"",
                  stock:"5 days left",
                  stockDescription:"Shop since 2007",
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
              label:"Just Arrived",
              imgUrl:'http://i1.sdlcdn.com/img/eventImage/10/dod_a.jpg',
              offerDescriprion:"",
              stock:"5 days left",
              stockDescription:"Shop since 2007",
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
