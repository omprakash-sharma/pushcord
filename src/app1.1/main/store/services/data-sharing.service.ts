import { Injectable } from '@angular/core';
import { Subject }  from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class DataSharingService{
    // initial variables
    selectedStoreProductsList:any = [];
    newProductSharingSubject = new Subject<any>();
    constructor(){}

    getSelectedProductList():Observable<any[]>{
        return Observable.of(this.selectedStoreProductsList);
    }
    addProductsToStore(selectedProducts){
        this.newProductSharingSubject.next(selectedProducts)
        // if(this.selectedStoreProductsList.length>1){
        //     let foundIndex = this.selectedStoreProductsList.findIndex(selectedProducts);
        //     console.log(foundIndex)
        //     if(foundIndex != -1)
        //         this.selectedStoreProductsList.push(selectedProducts);
        // }else{
        //     this.selectedStoreProductsList.push(selectedProducts);
        // }
        this.selectedStoreProductsList.push(selectedProducts);
        
        //console.log(selectedProducts)
    };

}
