import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'angular-image-slider';
import { ProductImageSliderComponent } from './product-image-slider/product-image-slider.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RelevantProductsComponent } from './relevant-products/relevant-products.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductImageSliderComponent, ProductInfoComponent, CommentsSectionComponent, RelevantProductsComponent],
  imports: [CommonModule, SliderModule, CarouselModule, ReactiveFormsModule, SharedModule],
  exports: [ProductImageSliderComponent, ProductInfoComponent, CommentsSectionComponent, RelevantProductsComponent],
})
export class ProductModule {}
