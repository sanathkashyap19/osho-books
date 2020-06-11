import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'angular-image-slider';

import { ProductImageSliderComponent } from './product-image-slider/product-image-slider.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [ProductImageSliderComponent, ProductInfoComponent],
  imports: [CommonModule, SliderModule],
  exports: [ProductImageSliderComponent, ProductInfoComponent],
})
export class ProductModule {}
