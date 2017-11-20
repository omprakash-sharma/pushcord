import {Component, OnInit, HostListener} from "@angular/core";
import {ConnectDialogComponent} from "./connect-dialog/connect-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: "front-details",
  templateUrl: "./front-details.component.html",
  styleUrls: ["./front-details.component.scss"]
})
export class FrontDetailsComponent implements OnInit {
  frontInfoToggle: boolean;
  openCommunication: boolean;
  frontHeaderFixed: boolean;
  sideNavFixed: boolean;


  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (window.scrollY > 189) {
    this.frontHeaderFixed = true;
    } else {
     this.frontHeaderFixed = false;
    }

     if (window.scrollY > 223) {
    this.sideNavFixed = true;
    } else {
     this.sideNavFixed = false;
    }


  }


  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openConnectionDialog(): void {
    const dialogRef = this.dialog.open(ConnectDialogComponent, {
      data: { }
    });
  }

  sheetClosed(e): void {
    this.openCommunication = e;
  }

}
