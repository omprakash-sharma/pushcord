import { Injectable } from '@angular/core';

@Injectable()
export class LineCategoryService {
  // initial variables
  allLinesCategory:any = {};
  lineCategoryNavItems:any = {};
  lineCategoryItems:any = {};

  constructor() { 
    this.lineCategoryNavItems = {
      "status":"ok",
      "list":[
        {
          id:101,
          category:"Shop Category",
          subCategory:[
            {
              categoryId:101,
              subCategoryId:1011,
              subCategoryName:"Laptop/Notebooks",
              totalItem:3
            },{
              categoryId:101,
              subCategoryId:1012,
              subCategoryName:"Gaming Laptops",
              totalItem:23
            },{
              categoryId:101,
              subCategoryId:1013,
              subCategoryName:"2-in-1 Laptops",
              totalItem:23
            },{
              categoryId:101,
              subCategoryId:1014,
              subCategoryName:"Chromebooks",
              totalItem:15
            },{
              categoryId:101,
              subCategoryId:1015,
              subCategoryName:"Mobile Workstation",
              totalItem:2
            }
          ]
        },{
          categoryId:102,
          category:"Accessories",
          subCategory:[
            {
              categoryId:102,
              subCategoryId:1021,
              subCategoryName:"Docking stations",
              totalItem:2
            }
          ]
        },{
          categoryId:103,
          category:"Condition",
          subCategory:[
            {
              categoryId:102,
              subCategoryId:1022,
              subCategoryName:"Brand New",
              totalItem:2
            },{
              categoryId:102,
              subCategoryId:1023,
              subCategoryName:"Open Box",
              totalItem:2
            },{
              categoryId:102,
              subCategoryId:1024,
              subCategoryName:"Second Hand",
              totalItem:2
            }
          ]
        },{
          categoryId:104,
          category:"Brand",
          subCategory:[
            {
              categoryId:104,
              subCategoryId:1041,
              subCategoryName:"Brand New",
              totalItem:2
            }
          ]
        },{
          categoryId:105,
          category:"Laptop desplay size",
          subCategory:[
            {
              categoryId:105,
              subCategoryId:1051,
              subCategoryName:"Laptop desplay size1",
              totalItem:0
            }
          ]
        },{
          categoryId:106,
          category:"Ram capacity",
          subCategory:[
            {
              categoryId:106,
              subCategoryId:1061,
              subCategoryName:"Ram 1GB",
              totalItem:0
            }
          ]
        },{
          categoryId:107,
          category:"Processor type",
          subCategory:[
            {
              categoryId:107,
              subCategoryId:1071,
              subCategoryName:"micro processor",
              totalItem:0
            }
          ]
        },{
          categoryId:108,
          category:"Hard disk capacity",
          subCategory:[
            {
              categoryId:108,
              subCategoryId:181,
              subCategoryName:"1TB",
              totalItem:0
            }
          ]
        },{
          categoryId:109,
          category:"Price",
          subCategory:[
            {
              categoryId:109,
              subCategoryId:1091,
              subCategoryName:"1001-5001",
              totalItem:0
            }
          ]
        },{
          categoryId:110,
          category:"Graphics processor",
          subCategory:[
            {
              categoryId:1010,
              subCategoryId:10101,
              subCategoryName:"HDF",
              totalItem:0
            }
          ]
        }
      ]
    };
    this.lineCategoryItems = {
      "status":"success",
      "data":{
        "Laptop/Notebooks":[
          {
            productId:10110110, // need to combination of category & subCategoryID.
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions2.",
            label:"sale",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },{
            productId:10110112,
            itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
            description:"item descriptions2.",
            label:"Regular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },{
            productId:10110113,
            itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
            description:"item descriptions2.",
            label:"Best Sellers",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Gaming Laptops":[
          {
            productId:10110111,
            itemUrl:"http://cdn.mos.cms.futurecdn.net/7e9fc4311edb3dde06b3229de1bf0e68.jpg",
            description:"item descriptions1.",
            label:"Regular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://promotions.newegg.com/visnav/gaming-laptops/20170104/msi.jpg",
            description:"item descriptions2.",
            label:"Best Sellers",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "2-in-1 Laptops":[
          {
            productId:10110111,
            itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
            description:"item descriptions2.",
            label:"Best Sellers",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Chromebooks":[
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions2.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Mobile Workstation":[
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions2.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },{
            productId:10110171,
            itemUrl:"https://ae01.alicdn.com/kf/HTB1U417fxsIL1JjSZFqq6AeCpXas/TORRAS-for-iPhone-X-Cover-Case-Slim-Hardness-PC-Protective-Phone-Case-Accessories-Brand-New-Phone.jpg_640x640.jpg",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"torras",
            store:"4 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Docking stations":[
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
            description:"item descriptions2.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Brand New":[
          {
            productId:10110171,
            itemUrl:"https://ae01.alicdn.com/kf/HTB1U417fxsIL1JjSZFqq6AeCpXas/TORRAS-for-iPhone-X-Cover-Case-Slim-Hardness-PC-Protective-Phone-Case-Accessories-Brand-New-Phone.jpg_640x640.jpg",
            description:"item descriptions1.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"torras",
            store:"4 Fronts",
            priceRange:"AED 34000 - 78000"
          },
          {
            productId:10110111,
            itemUrl:"https://ae01.alicdn.com/kf/HTB1Qr5tdrPx2eJjSZFBq6zmZVXal/Brand-New-Women-Hair-Accessories-2017-Fashion-Bandana-Scarf-Square-Head-Female-Bandanas-Headwear-Headbands-Women.jpg_640x640.jpg",
            description:"item descriptions2.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Asus",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Open Box":[
          {
            productId:10110141,
            itemUrl:"https://multimedia.bbycastatic.ca/multimedia/products/500x500/116/11614/11614863.jpg",
            description:"item descriptions2.",
            label:"Most Popular",
            serialNo:"7Zx87hd99",
            modelNo:"P-Series P2540UA-AB51",
            provider:"Shuru",
            store:"34 Fronts",
            priceRange:"AED 34000 - 78000"
          }
        ],
        "Second Hand":[]
      }
    };
    this.allLinesCategory = {
      "status":"Ok",
      "list":[
        {
          categoryId:101,
          category:"Shop Category",
          subCategory:[
            {  //need to add categoryId & subCategoryId
              categoryId:101,
              subCategoryId:1011,
              subCategoryName:"Laptop/Notebooks",
              totalItem:3,
              "Laptop/Notebooks":[
                {
                  productId:10110110, // need to combination of category & subCategoryID.
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions2.",
                  label:"sale",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            },
            {
              categoryId:101,
              subCategoryId:1012,
              subCategoryName:"Gaming Laptops",
              totalItem:23,
              "Gaming Laptops":[
                {
                  productId:10110111,
                  itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
                  description:"item descriptions1.",
                  label:"Regular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
                  description:"item descriptions2.",
                  label:"Best Seller",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            }, 
            {
              categoryId:101,
              subCategoryId:1013,
              subCategoryName:"2-in-1 Laptops",
              totalItem:23,
              "2-in-1 Laptops":[
                {
                  productId:10110111,
                  itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/TLX-500w.png",
                  description:"item descriptions2.",
                  label:"Best Sellers",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            },
            {
              categoryId:101,
              subCategoryId:1014,
              subCategoryName:"Chromebooks",
              totalItem:15,
              "Chromebooks":[
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions2.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            },
            {
              categoryId:101,
              subCategoryId:1015,
              subCategoryName:"Mobile Workstation",
              totalItem:2,
              "Mobile Workstation":[
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions2.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            }
          ]
        },{
          categoryId:102,
          category:"Accessories",
          subCategory:[
            {
              categoryId:102,
              subCategoryId:1021,
              subCategoryName:"Docking stations",
              totalItem:2,
              "Docking stations":[
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions2.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            }
          ]
        },{
          categoryId:103,
          category:"Condition",
          subCategory:[
            {
              categoryId:102,
              subCategoryId:1022,
              subCategoryName:"Brand New",
              totalItem:2,
              "Brand New":[
                {
                  productId:10110111,
                  itemUrl:"https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/p/1pl24pa.jpg",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            },{
              categoryId:102,
              subCategoryId:1023,
              subCategoryName:"Open Box",
              totalItem:2,
              "Open Box":[
                {
                  productId:10110111,
                  itemUrl:"url",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            },{
              categoryId:102,
              subCategoryId:1024,
              subCategoryName:"Second Hand",
              totalItem:2,
              "Second Hand":[
                {
                  productId:10110111,
                  itemUrl:"url",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            }
          ]
        },{
          categoryId:104,
          category:"Brand",
          subCategory:[
            {
              categoryId:104,
              subCategoryId:1041,
              subCategoryName:"Brand New",
              totalItem:2,
              "Brand New":[
                {
                  productId:10110111,
                  itemUrl:"url",
                  description:"item descriptions1.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                },
                {
                  productId:10110111,
                  itemUrl:"url",
                  description:"item descriptions2.",
                  label:"Most Popular",
                  serialNo:"7Zx87hd99",
                  modelNo:"P-Series P2540UA-AB51",
                  provider:"Asus",
                  store:"34 Fronts",
                  priceRange:"AED 34000 - 78000"
                }
              ]
            }
          ]
        },{
          categoryId:105,
          category:"Laptop desplay size",
          subCategory:[
            {
              categoryId:105,
              subCategoryId:1051,
              subCategoryName:"Laptop desplay size1",
              totalItem:0,
              "Laptop desplay size1":[]
            }
          ]
        },{
          categoryId:106,
          category:"Ram capacity",
          subCategory:[
            {
              categoryId:106,
              subCategoryId:1061,
              subCategoryName:"Ram 1GB",
              totalItem:0,
              "Ram 1GB":[]
            }
          ]
        },{
          categoryId:107,
          category:"Processor type",
          subCategory:[
            {
              categoryId:107,
              subCategoryId:1071,
              subCategoryName:"micro processor",
              totalItem:0,
              "micro processor":[]
            }
          ]
        },{
          categoryId:108,
          category:"Hard disk capacity",
          subCategory:[
            {
              categoryId:108,
              subCategoryId:181,
              subCategoryName:"1TB",
              totalItem:0,
              "1TB":[]
            }
          ]
        },{
          categoryId:109,
          category:"Price",
          subCategory:[
            {
              categoryId:109,
              subCategoryId:1091,
              subCategoryName:"1001-5001",
              totalItem:0,
              "1001-5001":[]
            }
          ]
        },{
          categoryId:110,
          category:"Graphics processor",
          subCategory:[
            {
              categoryId:1010,
              subCategoryId:10101,
              subCategoryName:"HDF",
              totalItem:0,
              "HDF":[]
            }
          ]
        }
      ]
    }
  }



  getAllLinesCategory(){
    return this.lineCategoryItems;
   // return this.allLinesCategory;
  }
  getNavListItem(){
    return this.lineCategoryNavItems;
  }

}
