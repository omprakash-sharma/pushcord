import {Component, OnInit} from "@angular/core";

@Component({
  selector: "running-transactions",
  templateUrl: "./running-transactions.component.html",
  styleUrls: ["./running-transactions.component.scss"]
})
export class RunningTransactionsComponent implements OnInit {
  totalRunningTransactions: number;
  runningTransactions: any[];

  constructor() {
  }

  ngOnInit() {
    this.totalRunningTransactions = 6;
    this.runningTransactions = [{
      cord: {
        img: "/assets/images/placeholders/cord-1.jpg",
        name: "Pak Lyari Resturant"
      },
      line: {
        img: "/assets/images/placeholders/transaction.jpg",
        name: "Mutton Biryani",
        time: "01 July 2017 at 010:01 PM",
        amount: "AED 14"
      }
    }, {
      cord: {
        img: "/assets/images/placeholders/cord-2.jpg",
        name: "Sharaf DG"
      },
      line: {
        img: "/assets/images/placeholders/transaction-2.jpg",
        name: "Ipad Pro 10.2\"",
        time: "29 June 2017 at 010:01 PM",
        amount: "AED 1,114"
      }
    }];
  }

}
