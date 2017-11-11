import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  searchInput: string;

  constructor() {
  }

  ngOnInit() {
  }

}
