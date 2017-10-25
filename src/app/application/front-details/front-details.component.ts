import {Component, OnInit} from "@angular/core";
import {ConnectDialogComponent} from "./connect-dialog/connect-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: "front-details",
  templateUrl: "./front-details.component.html",
  styleUrls: ["./front-details.component.css"]
})
export class FrontDetailsComponent implements OnInit {
  frontInfoToggle: boolean;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openConnectionDialog(): void {
    const dialogRef = this.dialog.open(ConnectDialogComponent, {
      data: { }
    });
  }

}
