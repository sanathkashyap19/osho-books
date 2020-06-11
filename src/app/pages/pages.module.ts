import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [LandingComponent, ProductDetailsComponent],
  imports: [CommonModule, SharedModule, ProductModule],
})
export class PagesModule {}