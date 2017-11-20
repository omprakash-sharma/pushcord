import {Component, OnInit} from "@angular/core";

@Component({
  selector: "fronts-search",
  templateUrl: "./fronts-search.component.html",
  styleUrls: ["./fronts-search.component.scss"]
})
export class FrontsSearchComponent implements OnInit {

  searchResults: any[] = [{
    type: "Companies",
    requests: false,
    list: [{
      name: "Pansonic",
      img: "https://yt3.ggpht.com/-P3BFq0ncBII/AAAAAAAAAAI/AAAAAAAAAAA/Oup5-c-dz48/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
      domain: "Consumer Electronics",
      transactions: 5
    }, {
      name: "Starbucks",
      img: "https://yt3.ggpht.com/-IpBltZ2knJs/AAAAAAAAAAI/AAAAAAAAAAA/p44jq28WcWI/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
      domain: "Consumer Electronics",
      transactions: 26
    }, {
      name: "Gulf Oil",
      img: "https://media.glassdoor.com/sql/4005/gulf-oil-squarelogo.png",
      domain: "Consumer Electronics",
      transactions: 17
    }, {
      name: "Apple",
      img: "/assets/images/placeholders/cord-2.jpg",
      domain: "Consumer Electronics",
      transactions: 50
    }]
  }, {
    type: "Individual",
    requests: false,
    list: [{
      name: "Yayaba Yusuf",
      img: "https://i1.rgstatic.net/ii/profile.image/AS%3A284706059898880%401444890622271_m/Amir_Cheraghi.png",
      domain: "Content writer",
      transactions: 3
    }, {
      name: "Saira Banu",
      img: "https://media.npr.org/about/people/bios/biophotos/snelson_sq-2767caa78582a137346c4cd0281656a4872fa37d-s100-c85.jpg",
      domain: "Social media strategist",
      transactions: 0
    }, {
      name: "Samantha Jones",
      img: "https://www.incimages.com/uploaded_files/image/100x100/Kimberly-bkt_16048.jpg",
      domain: "Content writer",
      transactions: 10
    }, {
      name: "Jonathan Francis",
      img: "http://i2.wp.com/www.dailycal.org/assets/uploads/2017/04/yordan_dkim_staff1-100x100.jpg",
      domain: "Content strategist",
      transactions: 190
    }]
  }, {
    type: "Requests",
    requests: true,
    list: [{
      name: "Yayaba Yusuf",
      img: "https://i1.rgstatic.net/ii/profile.image/AS%3A284706059898880%401444890622271_m/Amir_Cheraghi.png",
      domain: "Receptionist @Cordis Technology",
      requestType: "Colleague"
    }, {
      name: "Qudsia Bano",
      img: "https://media.npr.org/about/people/bios/biophotos/snelson_sq-2767caa78582a137346c4cd0281656a4872fa37d-s100-c85.jpg",
      domain: "House Wife",
      requestType: "Family"
    }]
  }]

  constructor() {
  }

  ngOnInit() {
  }

  disablePropagation(e): void {
    e.stopPropagation();
  }

}
