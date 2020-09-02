import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.scss']
})
export class ProductImageSliderComponent implements OnInit {
  @Input() imagesUrl;

  constructor() {}

  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>' ],
    responsive: {
      0: {
        items: 1,
        margin: 5
      },
      400: {
        items: 2,
        margin: 5
      },
      740: {
        items: 2,
        margin: 10
      }
    },
    nav: true
  }

  ngOnInit(): void {}
}
