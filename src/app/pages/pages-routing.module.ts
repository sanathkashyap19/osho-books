import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutFlowComponent } from './checkout-flow/checkout-flow.component';
import { LoginFlowComponent } from './login-flow/login-flow.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutFlowComponent,
  },
  {
    path: 'login',
    component: LoginFlowComponent
  },
  {
    path: '**',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
