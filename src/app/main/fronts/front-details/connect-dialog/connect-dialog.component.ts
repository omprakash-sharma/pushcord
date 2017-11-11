import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: "connect-dialog",
  templateUrl: "./connect-dialog.component.html",
  styleUrls: ["./connect-dialog.component.css"]
})
export class ConnectDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConnectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
