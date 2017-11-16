import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-contact-points',
  templateUrl: './front-contact-points.component.html',
  styleUrls: ['./front-contact-points.component.css']
})
export class FrontContactPointsComponent implements OnInit {

  contactPoints = [{
    name: "Yayaba Yusuf",
    img: "https://i1.rgstatic.net/ii/profile.image/AS%3A284706059898880%401444890622271_m/Amir_Cheraghi.png",
    domain: "Content writer"
  }, {
    name: "Saira Banu",
    img: "https://media.npr.org/about/people/bios/biophotos/snelson_sq-2767caa78582a137346c4cd0281656a4872fa37d-s100-c85.jpg",
    domain: "Social media strategist"
  }, {
    name: "Samantha Jones",
    img: "https://www.incimages.com/uploaded_files/image/100x100/Kimberly-bkt_16048.jpg",
    domain: "Content writer"
  }, {
    name: "Jonathan Francis",
    img: "http://i2.wp.com/www.dailycal.org/assets/uploads/2017/04/yordan_dkim_staff1-100x100.jpg",
    domain: "Content strategist"
  }]

  constructor() { }

  ngOnInit() {
  }

}
