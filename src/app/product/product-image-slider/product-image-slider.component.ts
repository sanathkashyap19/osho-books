import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.scss'],
})
export class ProductImageSliderComponent implements OnInit {
  @Input() imagesUrl;

  constructor() {}

  ngOnInit(): void {}
}
