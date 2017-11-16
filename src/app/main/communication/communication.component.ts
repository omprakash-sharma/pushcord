import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "communication",
  templateUrl: "./communication.component.html",
  styleUrls: ["./communication.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CommunicationComponent implements OnInit {
  shrinkWidget: boolean;
  selectedTab: number;

  @Input() forontId: string;
  @Input() bounadryElement: HTMLElement;
  @Input() openSheet: boolean;

  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.selectedTab = 0;
  }

  closeSheet(): void {
    this.openSheet = false;
    this.onClose.emit(this.openSheet);
  }

}
