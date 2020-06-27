import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutFlowComponent } from './checkout-flow/checkout-flow.component';
import { CheckoutModule } from '../checkout/checkout.module';
import { LoginFlowComponent } from './login-flow/login-flow.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    ProductDetailsComponent,
    CheckoutFlowComponent,
    LoginFlowComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ProductModule,
    CheckoutModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
