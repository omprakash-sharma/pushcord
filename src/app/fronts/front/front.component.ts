import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";

@Component({
  selector: "main",
  templateUrl: "./front.component.html",
  styleUrls: ["./front.component.css"]
})
export class FrontComponent implements OnInit {
  /* Start: Side bar CSS adjustment */
  @ViewChild("sidebarTile") sidebarTile: ElementRef;

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (this.sidebarTile.nativeElement.style.position !== "fixed") {
      this.adjustSideBar();
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.adjustSideBar();
  }

  adjustSideBar(): void {
    const width = document.querySelector(".sidebar-grid-style").clientWidth;
    this.sidebarTile.nativeElement.style.position = "fixed";
    this.sidebarTile.nativeElement.style.width = width + "px";
  }
  /* END: Side bar CSS adjustment */

  constructor() {
  }

  ngOnInit() {
  }

}
