import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutTableComponent } from './checkout-table/checkout-table.component';

@NgModule({
  declarations: [CheckoutTableComponent],
  imports: [CommonModule],
  exports: [CheckoutTableComponent],
})
export class CheckoutModule {}
