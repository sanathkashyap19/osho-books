import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imagesUrl;
  public currentUser;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  // constructor() {}

  ngOnInit(): void {
    console.log(this.currentUser,"hi")
    this.imagesUrl = [
      '../../../assets/images/Capture.PNG',
      '../../../assets/images/Capture.PNG',
      '../../../assets/images/Capture.PNG',
    ];
  }
}
