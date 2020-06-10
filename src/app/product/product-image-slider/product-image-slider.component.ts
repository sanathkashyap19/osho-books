import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
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
