import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutFlowComponent } from './checkout-flow/checkout-flow.component';
import { LoginFlowComponent } from './login-flow/login-flow.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutFlowComponent,  canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component: LoginFlowComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
