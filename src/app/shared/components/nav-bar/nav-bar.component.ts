import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import { DataSharingService } from '../../../main/store/services/data-sharing.service';
@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  providers:[]
})
export class NavBarComponent implements OnInit {
  searchInput: string;
  allSelectedStoreProducts:any = [];

  constructor(private ds:DataSharingService) {
  }

  ngOnInit() {
    this.ds.newProductSharingSubject.subscribe(data =>this.allSelectedStoreProducts.push(data));
  }
 
}
