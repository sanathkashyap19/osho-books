import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imagesUrl;

  constructor() {}

  ngOnInit(): void {
    this.imagesUrl = [
      '../../../assets/images/Capture.PNG',
      '../../../assets/images/Capture.PNG',
      '../../../assets/images/Capture.PNG',
    ];
  }
}
