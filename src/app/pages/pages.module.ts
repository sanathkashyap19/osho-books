import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutFlowComponent } from './checkout-flow/checkout-flow.component';
import { CheckoutModule } from '../checkout/checkout.module';

@NgModule({
  declarations: [
    LandingComponent,
    ProductDetailsComponent,
    CheckoutFlowComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ProductModule,
    CheckoutModule,
  ],
})
export class PagesModule {}
