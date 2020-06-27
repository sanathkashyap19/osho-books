import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  imagesUrl;

  constructor() {}

  ngOnInit(): void {
    this.imagesUrl = [
      '../../../assets/images/belief_doubt_and_fanaticism-front.jpg',
      '../../../assets/images/belief_doubt_and_fanaticism-back.jpg',
    ];
  }
}
