import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'angular-image-slider';

import { ProductDetailsComponent } from './product-image-slider/product-image-slider.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, SliderModule],
  exports: [ProductDetailsComponent],
})
export class ProductModule {}
