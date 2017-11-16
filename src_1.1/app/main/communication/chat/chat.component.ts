import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {isUndefined} from "util";

@Component({
  selector: "chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild("stayBottom") private chatHistoryElm: ElementRef;
  @Input() shrinkMode: boolean;
  composedMsg: string;
  chatHistory = [{
    self: false,
    msg: "Hello Amaresh!"
  }, {
    self: true,
    msg: "Hello"
  }]

  constructor() {
  }

  ngOnInit() {
    this.scrollToBottom();
    // if (isUndefined(this.shrinkMode)) {
    //   this.shrinkMode = true;
    // }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatHistoryElm.nativeElement.scrollTop = this.chatHistoryElm.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  send(): void {
    if (this.composedMsg) {
      this.chatHistory.push({
        self: true,
        msg: this.composedMsg
      });
    } else {
      return;
    }
  }
}
