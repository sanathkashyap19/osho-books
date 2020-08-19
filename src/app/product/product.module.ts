import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'angular-image-slider';
import { ProductImageSliderComponent } from './product-image-slider/product-image-slider.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [ProductImageSliderComponent, ProductInfoComponent],
  imports: [CommonModule, SliderModule, CarouselModule],
  exports: [ProductImageSliderComponent, ProductInfoComponent],
})
export class ProductModule {}
