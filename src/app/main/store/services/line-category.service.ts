import { Injectable } from '@angular/core';

@Injectable()
export class LineCategoryService {
  // initial variables
  allLinesCategory:{};
  constructor() { 

    this.allLinesCategory = {
      "status":"Ok",
      "list":[
        {
          id:101,
          category:"Shop Category",
          subCategory:[
            {  //need to add categoryId & subCategoryId
              id:1011,
              subCategoryName:"Laptop/Notebooks",
              totalItem:3,
              items:[
                {
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
              id:1012,
              subCategoryName:"Gaming Laptops",
              totalItem:23,
              items:[
                {
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
              id:1013,
              subCategoryName:"2-in-1 Laptops",
              totalItem:23,
              items:[
                {
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
              id:1014,
              subCategoryName:"Chromebooks",
              totalItem:15,
              items:[
                {
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
              id:1015,
              subCategoryName:"Mobile Workstation",
              totalItem:2,
              items:[
                {
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
          id:102,
          category:"Accessories",
          subCategory:[
            {
              id:1021,
              subCategoryName:"Docking stations",
              totalItem:2,
              items:[
                {
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
          id:103,
          category:"Condition",
          subCategory:[
            {
              id:1031,
              subCategoryName:"Brand New",
              totalItem:2,
              items:[
                {
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
              id:1032,
              subCategoryName:"Open Box",
              totalItem:2,
              items:[
                {
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
              id:1033,
              subCategoryName:"Second Hand",
              totalItem:2,
              items:[
                {
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
          id:104,
          category:"Condition",
          subCategory:[
            {
              id:1041,
              subCategoryName:"Brand New",
              totalItem:2,
              items:[
                {
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
          id:105,
          category:"Laptop desplay size",
          subCategory:[
            {
              id:1051,
              subCategoryName:"Laptop desplay size1",
              totalItem:0,
              items:[]
            }
          ]
        },{
          id:106,
          category:"Ram capacity",
          subCategory:[
            {
              id:1061,
              subCategoryName:"",
              totalItem:0,
              items:[]
            }
          ]
        },{
          id:107,
          category:"Processor type",
          subCategory:[
            {
              id:1071,
              subCategoryName:"",
              totalItem:0,
              items:[]
            }
          ]
        },{
          id:108,
          category:"Hard disk capacity",
          subCategory:[
            {
              id:1081,
              subCategoryName:"",
              totalItem:0,
              items:[]
            }
          ]
        },{
          id:109,
          category:"Price",
          subCategory:[
            {
              id:1091,
              subCategoryName:"",
              totalItem:0,
              items:[]
            }
          ]
        },{
          id:110,
          category:"Graphics processor",
          subCategory:[
            {
              id:1101,
              subCategoryName:"",
              totalItem:0,
              items:[]
            }
          ]
        }
      ]
    }
  }



  getAllLinesCategory(){
    return this.allLinesCategory;
  }

}
